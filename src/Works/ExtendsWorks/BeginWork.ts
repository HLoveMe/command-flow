import { BaseType, ChannelObject, ChannelValue, WorkType } from '../../Types';
import { Subject, Subscription, Observer, tap } from 'rxjs';
import { WorkRunOption } from '../../Configs/types';
import { v4 as UUID } from 'uuid';
import { EnvironmentAble } from '../../Util/EvalEquipment';
import { InstructionOTO } from '../Instruction';
import { isJS } from '../../Util/Equipment';
import { ObjectTarget } from '../../Object';
import { decide } from '../../Object/valueUtil';

export class BeginWork
  extends InstructionOTO
  implements WorkType.Work, EnvironmentAble, WorkType.WorkEntrance
{
  static NAME: string = 'BeginWork';
  static _id: number = 0;
  channelSignals: any[] = [];
  // 输入 头部work
  // inputSubject: Subject<BaseType> = new Subject<BaseType>();
  inputSubscription: Subscription;
  constructor() {
    super();
    this.uuid = UUID();
  }

  /**
   * 运行 头部
   * @param value
   */
  startRun(value: BaseType, runId?: string) {
    const id = runId ?? UUID();
    this.channelSignals.push(this.channelSignals);
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
