
import { BaseType, ContextImpl, Value } from "../../Types";
import { ChannelObject, ChannelValue } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { BooleanObject, ObjectTarget } from "../../Object/Able/ObjectAble";
import { isElectron, isJS, isNode, isWeb } from "../../Util/Equipment";
import { unpackValue } from "../../Util/channel-value-util";

/**
 * 打开路径
 * http://www.baidu.com
 * window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 */
export default class OpenURLWork extends InstructionOTO {
  name: string = "OpenURLWork";
  run(input: ChannelObject, option?: any): Observable<ChannelObject<BooleanObject>> {
    const that = this;
    return new Observable((subscriber: Subscriber<ChannelObject<BooleanObject>>) => {
      let target: string;
      if (input === null || input === undefined) target = "";
      else {
        target = unpackValue(input);
      }
      const sub = (that.context as ContextImpl).platform
        .open(target)
        .subscribe({
          next: _ => subscriber.next(new ObjectTarget({
            ...input._value,
            value: new BooleanObject(true)
          })),
          complete: () => subscriber.complete(),
          error: (err) => subscriber.error(err)
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
    return isJS
    // return isNode || isWeb || isRN || isElectron
  }
}
