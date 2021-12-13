import { BaseType, ContextImpl, WorkType, Value } from "../../Types";
import {
  Subject,
  Subscription,
  Observable,
  PartialObserver,
  Subscriber,
  asyncScheduler,
} from "rxjs";
import { ExecError } from "../../Error";
import { WorkRunOption } from "../../Configs";
import { v4 as UUID } from "uuid";
import { EnvironmentAble } from "../../Util/EquipmentTools";
import {  InstructionMTM } from "../Instruction";
import { isJS } from "../../Util/Equipment";

export class BeginWork
  extends InstructionMTM
  implements WorkType.Work, EnvironmentAble, WorkType.WorkEntrance {
  static OPTION: WorkRunOption;
  name: string = "BeginWork";
  static _id: number = 0;
  // 输入 头部work
  inputSubject: Subject<BaseType> = new Subject<BaseType>();
  inputSubscription: Subscription;
  constructor() {
    super();
    this.uuid = UUID();
  }

  // 处理上一个的传入
  _connectChannel() {
    const that = this;
    // 处理启动指令 仅仅头部work会触发
    const observer: PartialObserver<any> = {
      next: (value) => that.next(value),
      error: null,
      complete: null,
    };
    var sub1: Subscription = this.inputSubject.subscribe(observer);
    this.inputSubscription = sub1;
    this.pools.push(sub1);
    // // 处理数据
    const sub2: Subscription = that
      .subscribe({
        complete: () => { },
        error: (error) => that.error(error),
        next: (value: BaseType) => that._run(value),
      });
    this.pools.push(sub2);
  }
  _run(input?: BaseType, initOption?: any): void {
    this.nextWork?.next(input);
  }
  /**
   * 运行 头部
   * @param value
   */
  startRun(value: BaseType) {
    this.inputSubject.next(value);
  }

  completeOneLoop() { }

  static isAble() {
    return isJS;
  }

}