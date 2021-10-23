
import { WorkType, BaseType, ContextImpl } from "./Types";
import { forkJoin, Observable, Subject, Subscription } from "rxjs";
import { ContextRunOption } from "./Configs";
import { BooleanObject, StringObject } from "./Object/Able/ObjectAble";
import Platform from "./Bridge/Index";
import { Value } from "./Types";
import { PlatformBridge } from "./Bridge/Platform/BasePlatform";

export class Context implements ContextImpl {
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
  msgChannel: Subject<BaseType> = new Subject();
  constructor(runOptions?: ContextRunOption) {
    this.runOptions = runOptions || {};
    const sub = this.msgChannel.subscribe(
      this.workMessage.bind(this),
      this.workError.bind(this)
    );
    this.pools.push(sub);
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
  workMessage(input: Value.ValueAble<any>) {
    console.log("msgChannel", input.valueOf());
  }
  workError(error) {
    console.log("msgChannelError", error);
    this.stopWorkChain();
  }

  sendLog(status: WorkType.WorkStatus<any>) {
    const log = {
      date: new Date().getTime(),
      work: (Array.isArray(status.work) ? status.work : [status.work]).forEach(
        ($1) => $1.name
      ),
      info: status.desc,
    };
    this.msgChannel.next(new StringObject(JSON.stringify(log)));
  }

  addWork(work: WorkType.Work) {
    work.context = this;
    this.works.push(work);
  }
  addWorks(...works: WorkType.Work[]): void {
    works.forEach(this.addWork);
  }
  // 执行works
  prepareWorks() {
    this.works.forEach(
      ($1: WorkType.Work, index: number, source: WorkType.Work[]) => {
        const before: WorkType.Work = source[index - 1];
        const after: WorkType.Work = source[index + 1];
        $1.prepare(before, after);
      }
    );
  }

  run(input: BaseType, initOption?: any) {
    this.prepareWorks();
    const inputWork = this.works[0];
    if (inputWork) {
      inputWork.startRun(input);
      // inputWork.complete()
    }
  }

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
