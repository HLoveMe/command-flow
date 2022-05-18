
import { WorkType, BaseType, ContextImpl, ChannelObject, ChannelValue } from "./Types";
import { CompletionObserver, forkJoin, Observable, PartialObserver, Subject, Subscription } from "rxjs";
import { ContextRunOption, DefaultRunConfig } from "./Configs";
import { BooleanObject, StringObject } from "./Object/Able/ObjectAble";
import Platform from "./Bridge/Index";
import { Value } from "./Types";
import { PlatformBridge } from "./Bridge/Platform/BasePlatform";
import { BeginWork } from "./Works/ExtendsWorks/BeginWork";
import { decide } from "./Object/valueUtil";

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
    // console.log("msgChannel", input);
  }
  workError(error: Error) {
    // console.log("msgChannelError", error);
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
    };
    this.msgChannel.next(log as WorkType.WorkStatus);
  }

  addWork(work: WorkType.Work) {
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

  // /**
  //  * 尝试再次输入某个值
  //  * 成功与否和Work是否支持有关
  //  * @param input 
  //  * @returns 
  //  */
  // tryInsertInput(input: BaseType) {
  //   if (this.status !== WorkType.WorkRunStatus.RUNNING) {
  //     return this.sendLog({
  //       content: this,
  //       work: [],
  //       desc: "[content][Func:tryInsertInput][run status is not running]",
  //       value: new BooleanObject(false),
  //     });
  //   };
  //   const inputWork = this.works[0];
  //   if (inputWork) {
  //     // (inputWork as unknown as WorkType.WorkEntrance).inputSubject.next(input);
  //   }
  // }

  /**
   * 停止执行
   * 关闭
   */
  stopWorkChain(): Observable<boolean> {
    const that = this;
    return new Observable((subscribe) => {
      const taskUns: Observable<Boolean>[] = this.works.map(($1) =>
        $1.stopWork()
      );
      let isSuccess: boolean = false;
      let errors: WorkType.Work[] = [];
      const sub = forkJoin(taskUns).subscribe({
        next: (values) =>
        (isSuccess = values.every(($1, index) => {
          if ($1 === true) return true;
          errors.push(this.works[index]);
          return false;
        })),
        error: () => {
          // 关闭报错
        },
        complete: () => {
          this.sendLog({
            content: that,
            work: errors,
            desc: "[content][Func:stopWorkChain]",
            value: new BooleanObject(isSuccess),
          });
          subscribe.next(isSuccess);
          subscribe.complete();
        },
      });
      return {
        unsubscribe: () => {
          subscribe.unsubscribe();
          sub.unsubscribe();
        },
      };
    });
  }

  clear(): void {
    this.pools.forEach(($1) => $1.unsubscribe());
  }
}
