import { } from "./Object/InOutputValue";
import { WorkType, BaseType, ContextImpl } from "./Type";
import { Subject, Subscription } from "rxjs";
import { ContextRunOption } from "./Configs";
import { StringObj } from "./Object/BaseObject";

export class Context implements ContextImpl {
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
    const sub = this.msgChannel.subscribe(this.workMessage, this.workError);
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
  workMessage(input: BaseType) {
    console.log("msgChannel", input);
  }
  workError(error) {
    console.log("msgChannelError", error);
  }

  sendLog(work: WorkType.Work, info: any) {
    const log = {
      date: new Date().getDate(),
      work: work.name,
      info,
    }
    this.msgChannel.next(new StringObj(JSON.stringify(log)))
  }

  addWork(work: WorkType.Work) {
    work.context = this;
    this.works.push(work);
  }
  addWorks(...works: WorkType.Work[]): void {
    works.forEach(this.addWork);
  }
  // 执行works
  prepareWorks(initOption: any = null) {
    this.works.forEach(
      ($1: WorkType.Work, index: number, source: WorkType.Work[]) => {
        const before: WorkType.Work = source[index - 1];
        const after: WorkType.Work = source[index + 1];
        $1.prepare(before, after);
      }
    );
  }

  run(input: BaseType, initOption?: any) {
    this.prepareWorks(initOption);
    const inputWork = this.works[0];
    if (inputWork) {
      inputWork.startRun(input);
      inputWork.complete()
    }
  }

  clear(): void {
    this.pools.forEach(($1) => $1.unsubscribe());
  }
}
