import { cloneDeep, merge } from "lodash";
import {
  forkJoin,
  Observable,
  PartialObserver,
  Subject,
  Subscription,
} from "rxjs";
import { v4 as UUID } from "uuid";
import { ContextRunOption } from "./Configs/types";
import { DefaultRunConfig } from "./Configs";
import { BooleanObject, ObjectTarget } from "./Object";
import Platform from "./Bridge/Index";
import { PlatformBridge } from "./Bridge/Platform/BasePlatform";
import { BeginWork } from "./Works/ExtendsWorks/BeginWork";
import { decide } from "./Object/valueUtil";
import { take } from "rxjs/operators";
import { ConsoleLog } from "./Log";
import { LogBase, LogInitParams } from "./Log/types";
import { RUNSetting } from "./FlowOption/types";
import { WorkType, BaseType, ContextImpl } from "./Types";

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

  log: LogBase;
  /**
   * 消息传输通道
   */
  msgChannel: Subject<WorkType.WorkStatus> = new Subject();

  /**
   * 需要销毁的Subscription
   */
  pools: Subscription[] = [];

  constructor(
    runOptions: ContextRunOption = null,
    log: LogInitParams = [ConsoleLog, []]
  ) {
    this.runOptions = merge(
      cloneDeep(DefaultRunConfig),
      runOptions || {}
    ) as any as ContextRunOption;
    const [LogConstruct, params] = log;
    this.log = Reflect.construct(LogConstruct, [this, ...params]);
    this.addWork(new BeginWork());
  }

  showRunSetting(): RUNSetting {
    const result = {
      runOptions: this.runOptions,
      log: (this.log as Object).constructor,
      works: [],
      signals: [],
    } as RUNSetting;
    result.signals =
      (this.works.find(($1) => $1.name === BeginWork.NAME) as BeginWork)
        .channelSignals || [];
    result.works = this.works
      .filter(($1) => $1.name !== BeginWork.NAME)
      .map(($1) => {
        const config = $1.runConfigExport();
        return [$1.name, Array.isArray(config) ? (config as any) : [config]];
      });
    return result;
  }

  /**
   * 增加上下文变量
   * @param from
   * @param name
   * @param value
   */
  addVariable(
    from: WorkType.Work,
    name: string,
    value: BaseType
  ): WorkType.Variable {
    const w_map = this.runConstant.get(from.uuid);
    !w_map && this.runConstant.set(from.uuid, new Map());
    const result = {
      workId: from.uuid,
      id: UUID(),
      name,
      value,
    } as WorkType.Variable;
    this.runConstant.get(from.uuid)?.set(name, result);
    return result;
  }

  getAllVariableKeys(): Map<WorkType.WorkUUID, WorkType.WorkConstant> {
    const result: Map<WorkType.WorkUUID, WorkType.WorkConstant> = new Map();
    this.runConstant.forEach(
      ($1: WorkType.WorkConstant, $key1: WorkType.WorkUUID) => {
        result.set($key1, new Map($1));
      }
    );
    return result;
  }

  getWorkVariableKeys(from: WorkType.Work): WorkType.Variable[] {
    const constant: WorkType.WorkConstant = this.runConstant.get(from.uuid);
    const result = [...constant.values()];
    return result;
  }

  addWorkLog(tap: PartialObserver<WorkType.WorkStatus>): Subscription {
    return this.msgChannel.subscribe(tap);
  }

  /**
   * 处理所有work所有消息 包括错误消息
   * @param status
   */
  sendLog(status: WorkType.WorkStatus) {
    const log = {
      date: new Date(),
      work: status.work.filter(($1) => $1.name) ?? null,
      desc: status.desc,
      value: status.value,
      error: status.error,
    };
    this.msgChannel.next(log as WorkType.WorkStatus);
    this.log && this.log.nextLog(log);
    // 错误消息
    if (status.error && status.error instanceof Error) {
      this.stopWorkChain();
    }
  }

  addWork(work: WorkType.Work) {
    if (
      (work.constructor as any).isAble &&
      (work.constructor as any).isAble() === false
    ) {
      const desc = "[content][Func:addWork][work isAble is false]";
      return this.sendLog({
        content: this,
        work: [],
        desc,
        value: null,
        error: new Error(desc),
      });
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
    }
    await Promise.all(
      this.works.map(
        ($1: WorkType.Work, index: number, source: WorkType.Work[]) => {
          const before: WorkType.Work = source[index - 1];
          const after: WorkType.Work = source[index + 1];
          return $1.prepare(before, after);
        }
      )
    );
    this.status = WorkType.WorkRunStatus.READY;
    return void 0;
  }

  dispatch(input?: any | BaseType) {
    if (this.status === WorkType.WorkRunStatus.INIT) {
      return this.sendLog({
        content: this,
        work: [],
        desc: "[context][Func:run][run status is not ready  or 已经初始化]",
        value: new BooleanObject(false),
      });
    }
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
    const that: ContextImpl = this;
    return new Promise((resolve, reject) => {
      const taskUns: Observable<Boolean>[] = this.works.map(($1) =>
        $1.stopWork()
      );
      let isSuccess: boolean = false;
      let errors: WorkType.Work[] = [];
      forkJoin(taskUns)
        .pipe(take(1))
        .subscribe({
          next: (values) => {
            isSuccess = values.every(($1, index) => {
              if ($1 === true) return true;
              errors.push(this.works[index]);
              return false;
            });
            resolve(isSuccess);
          },
          error: (error: Error) => {
            // 关闭报错
            reject(error);
          },
          complete: () => {
            this.sendLog({
              content: that,
              work: errors,
              desc: "[content][Func:stopWorkChain]",
              value: new ObjectTarget({
                id: "stopWorkChain",
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
