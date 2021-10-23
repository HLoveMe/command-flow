
import { BaseType, ContextImpl,Value } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { BooleanObject } from "../../Object/Able/ObjectAble";
import { isElectron, isJS, isNode, isRN, isWeb } from "../../Util/Equipment";

/**
 * 打开路径
 * http://www.baidu.com
 * window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 */
export default class OpenURLWork extends InstructionOTO {
  name: string = "OpenURLWork";
  run(input: BaseType, option?: any): Observable<BooleanObject> {
    const that = this;
    return new Observable((subscriber: Subscriber<BooleanObject>) => {
      let target: string;
      if (input === null || input === undefined) target = "";
      else {
        target = ((input as Value.ValueAble<any>).valueOf() as Object).toString();
      }
      const sub = (that.context as ContextImpl).platform
        .open(target)
        .subscribe({
          next: _ => subscriber.next(new BooleanObject(true)),
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
