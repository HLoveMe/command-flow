
import { Observable, Subscriber, BehaviorSubject } from "rxjs";
import { ChannelObject } from "../../Types";
import { InstructionOTM } from "../Instruction";
import { isJS } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";

const AwaitActiveWorkInit = wrapperValue<any>({} as any, {});
const Disabled = undefined;
const canDone = null;

/***
 * 需要 手动触发才能把信号传递下去
 */
export default class AwaitActiveWork extends InstructionOTM {
  static NAME: string = "AwaitActiveWork";

  private nextInfo: ChannelObject = AwaitActiveWorkInit;

  private await: BehaviorSubject<any> = new BehaviorSubject<any>(Disabled);

  constructor(doNext?: (next: () => void) => void) {
    super();
    doNext && doNext(this.doNext);
  }

  doNext() {
    this.await.next(canDone);
  }

  run(input: ChannelObject): Observable<ChannelObject<any>> {
    const that = this;
    this.nextInfo = input;
    return new Observable((subscriber: Subscriber<ChannelObject<any>>) => {
      const sub = that.await.subscribe({
        complete: () => {
          subscriber.complete();
        },
        next: (value) => {
          if (value === Disabled) return;
          if (that.nextInfo === AwaitActiveWorkInit) return;
          that.await.next(Disabled);
          subscriber.next(
            wrapperValue<any>(this.nextInfo, unpackValue<any>(this.nextInfo))
          );
        },
        error: (e) => {
          subscriber.error(e);
        },
      });

      return {
        unsubscribe: () => {
          sub.unsubscribe();
          subscriber.unsubscribe();
        },
      };
    });
  }
  static isAble() {
    return isJS;
  }
}

// // dome 待测试
// const awaitWork = new AwaitActiveWork();
// awaitWork.subscribe({
//   next: (value) => {
//     console.log("下一个命令接受到", value);
//   },
// });

// document.addEventListener("click", () => {
//   awaitWork.doNext(); // 点击一次才容许发送消息
// });

// interval(1000).subscribe({
//   next: (value) => {
//     awaitWork.next(
//       new ObjectTarget<ChannelValue>({
//         id: "-1",
//         value: decide(value),
//         option: {},
//       })
//     );
//   },
// });
