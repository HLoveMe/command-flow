import { InOutNumber } from "../../Object/InOutputValue";
import { SwitchStatusValue, SwitchStatus } from "../WorkTypes";
import { InOutputAbleOrNil, BaseType, ContextImpl } from "../../Type";
import { } from "react-native";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { ValueAble } from "../../Object/ObjectTypes";
import { BooleanObj } from "../../Object/BaseObject";
import { isNode, isReactNative, isRN, isWeb } from "../../Util/Equipment";

/**
 * 打开路径
 * http://www.baidu.com
 * window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 */
export class OpenURLWork extends InstructionOTO {
  name: string = "OpenURLWork";
  run(input: BaseType, option?: any): Observable<BooleanObj> {
    const that = this;
    return new Observable((subscriber: Subscriber<BooleanObj>) => {
      let target: string;
      if (input === null || input === undefined) target = "";
      else {
        target = ((input as ValueAble).valueOf() as Object).toString();
      }
      const sub = (that.context as ContextImpl).platform
        .open(target)
        .subscribe({
          next: _ => subscriber.next(new BooleanObj(true)),
          complete: () => subscriber.complete(),
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
    return isNode || isWeb || isRN
  }
}
