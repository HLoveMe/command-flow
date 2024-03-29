import { BaseType, ChannelObject, ChannelValue, WorkType } from "../../Types";
import {
  Subject,
  Subscription,Observer
} from "rxjs";
import { WorkRunOption } from "../../Configs/types";
import { v4 as UUID } from "uuid";
import { EnvironmentAble } from "../../Util/EvalEquipment";
import { InstructionOTO } from "../Instruction";
import { isJS } from "../../Util/Equipment";
import { ObjectTarget } from "../../Object";
import { decide } from '../../Object/valueUtil'

export class BeginWork
  extends InstructionOTO
  implements WorkType.Work, EnvironmentAble, WorkType.WorkEntrance {
  static OPTION: WorkRunOption;
  static NAME: string = "BeginWork";
  static _id: number = 0;
  // 输入 头部work
  // inputSubject: Subject<BaseType> = new Subject<BaseType>();
  inputSubscription: Subscription;
  constructor() {
    super();
    this.uuid = UUID();
  }

  // // 处理上一个的传入
  // _connectChannel() {
  //   const that = this;
  //   // 处理启动指令 仅仅头部work会触发
  //   var sub1: Subscription =
  //     this.inputSubject
  //       .pipe(
  //         take(Infinity)
  //       ).subscribe({
  //         next: (value: BaseType) => that._run(value),
  //         error: (error) => that.error(error),
  //         complete: null,
  //       })
  //   this.inputSubscription = sub1;
  //   this.pools.push(sub1);
  // }
  // _run(input?: BaseType, initOption?: any): void {
  //   // this.nextWork?.next(input);
  //   this.nextWork.next(input);
  // }
  /**
   * 运行 头部
   * @param value
   */
  startRun(value: BaseType, runId?: string) {
    const id = runId ?? UUID();
    (this.nextWork as Subject<ChannelObject>).next(
      new ObjectTarget<ChannelValue>({
        id,
        value: decide(value),
        option: {},
      })
    );
  }

  static isAble() {
    return isJS;
  }

}