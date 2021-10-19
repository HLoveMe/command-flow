import {} from "./Object/InOutputValue";
import { WorkType, BaseType, InOutputAbleOrNil, ContextImpl } from "./Type";
import { Subject, Subscription } from "rxjs";
import { ContextRunOption } from "./Configs";

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
  msgChannel: Subject<InOutputAbleOrNil> = new Subject();
  constructor(runOptions: ContextRunOption) {
    this.runOptions = runOptions;
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
  workMessage(input: InOutputAbleOrNil) {
    console.log("msgChannel", input);
  }
  workError(error) {
    console.log("msgChannelError", error);
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
        const input = index == 0 ? initOption : before.output;
        $1.prepare(input, before, after);
      }
    );
  }
  run(initOption: any) {
    this.prepareWorks(initOption);
  }

  /**
   * 测试运行
   * @param input
   */
  testRun(input: InOutputAbleOrNil) {
    this.prepareWorks();
    this.works[0].input.next(input);
    this.works[0].input.complete();
  }

  clear(): void {
    this.pools.forEach(($1) => $1.unsubscribe());
  }
}
