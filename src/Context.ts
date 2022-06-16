
import { WorkType, BaseType, ContextImpl, ChannelObject, ChannelValue } from "./Types";
import { zip, forkJoin, Observable, PartialObserver, Subject, Subscription } from "rxjs";
import { ContextRunOption, DefaultRunConfig } from "./Configs";
import { BooleanObject, ObjectTarget } from "./Object/Able/ObjectAble";
import Platform from "./Bridge/Index";
import { Value } from "./Types";
import { PlatformBridge } from "./Bridge/Platform/BasePlatform";
import { BeginWork } from "./Works/ExtendsWorks/BeginWork";
import { decide } from "./Object/valueUtil";
import { take } from "rxjs/operators";

export class Context implements ContextImpl {
  status: WorkType.WorkRunStatus = WorkType.WorkRunStatus.INIT;
  platform: PlatformBridge = Platform;
  /**
   * 运行配置文件 todo
   */
  runOptions: ContextRunOption;
  /**
   * 上下文变量
   */
  runConstant: Map<WorkType.WorkUUID, WorkType.WorkConstant> = new Map();
  /**
   * 所有work
   */
  works: WorkType.Work[] = [];
  /**
   * 消息传输通道
   */
  msgChannel: Subject<WorkType.WorkStatus> = new Subject();
  constructor(runOptions?: ContextRunOption) {
    this.runOptions = (runOptions || DefaultRunConfig) as ContextRunOption;
    const sub = this.msgChannel.subscribe({
      next: (value) => this.workMessage(value),
      error: (error) => this.workError(error),
    });
    this.pools.push(sub);
    this.addWork(new BeginWork());
  }
  /**
   * 需要销毁的Subscription
   */
  pools: Subscription[] = [];

  /**
   * 增加上下文变量
   * @param from
   * @param name
   * @param value
   */
  addVariable(from: WorkType.Work, name: string, value: BaseType): void {
    const w_map = this.runConstant.get(from.uuid);
    !w_map && this.runConstant.set(from.uuid, new Map());
    this.runConstant.get(from.uuid).set(name, value);
  }
  workMessage(input: WorkType.WorkStatus) {
    console.log("msgChannel", input);
  }
  workError(error: Error) {
    console.log("msgChannelError", error);
    this.stopWorkChain();
  }

  addWorkLog(tap: PartialObserver<WorkType.WorkStatus>): Subscription {
    return this.msgChannel.subscribe(tap);
  }

  sendLog(status: WorkType.WorkStatus) {
    const log = {
      date: new Date(),
      work: status.work.filter(
        ($1) => $1?.name
      ),
      desc: status.desc,
      value: status.value,
      error: status.error,
    };
    this.msgChannel.next(log as WorkType.WorkStatus);
  }

  addWork(work: WorkType.Work) {
    if ((work.constructor as any).isAble && (work.constructor as any).isAble() === false) {
      const desc = "[content][Func:addWork][work isAble is false]"
      return this.sendLog({
        content: this,
        work: [],
        desc,
        value: null,
        error: new Error(desc),
      })
    }
    if (this.status !== WorkType.WorkRunStatus.INIT) {
      return this.sendLog({
        content: this,
        work: [],
        desc: "[content][Func:addWork][context status is not init]",
        value: new BooleanObject(false),
      });
    }
    work.context = this;
    this.works.push(work);
  }
  
  addWorks(...works: WorkType.Work[]): void {
    works.forEach(this.addWork);
  }

  async prepareWorks() {
    if (this.status !== WorkType.WorkRunStatus.INIT) {
      return this.sendLog({
        content: this,
        work: [],
        desc: "[content][Func:prepareWorks][context status is not init]",
        value: new BooleanObject(false),
      });
    };
    await Promise.all(this.works.map(
      ($1: WorkType.Work, index: number, source: WorkType.Work[]) => {
        const before: WorkType.Work = source[index - 1];
        const after: WorkType.Work = source[index + 1];
        return $1.prepare(before, after);
      }
    ))
    this.status = WorkType.WorkRunStatus.READY;
  }

  dispatch(input?: BaseType) {
    if (this.status === WorkType.WorkRunStatus.INIT) {
      return this.sendLog({
        content: this,
        work: [],
        desc: "[context][Func:run][run status is not ready  or 已经初始化]",
        value: new BooleanObject(false),
      });
    };
    const inputWork = this.works[0];
    if (inputWork) {
      (inputWork as unknown as WorkType.WorkEntrance).startRun(decide(input));
    }
    this.status = WorkType.WorkRunStatus.RUNNING;
  }

  /**
   * 停止执行
   * 关闭
   */
  stopWorkChain(): Promise<boolean> {
    const that = this;
    return new Promise((resolve, reject) => {
      const taskUns: Observable<Boolean>[] = this.works.map(($1) => $1.stopWork());
      let isSuccess: boolean = false;
      let errors: WorkType.Work[] = [];
      forkJoin(taskUns).pipe(take(1)).subscribe({
        next: (values) => {
          (isSuccess = values.every(($1, index) => {
            if ($1 === true) return true;
            errors.push(this.works[index]);
            return false;
          }))
          resolve(isSuccess)
        },
        error: (error: Error) => {
          // 关闭报错
          reject(error)
        },
        complete: () => {
          this.sendLog({
            content: that,
            work: errors,
            desc: "[content][Func:stopWorkChain]",
            value: new ObjectTarget({
              id: 'stopWorkChain',
              value: decide(isSuccess),
              option: {},
            }),
          });
        },
      });

    });
  }

  clear(): void {
    this.pools.forEach(($1) => $1.unsubscribe());
  }
}