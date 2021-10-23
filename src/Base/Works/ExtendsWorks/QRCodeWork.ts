import { BaseType, ContextImpl,Value } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { QRcodeOption } from "../../Bridge/ConfigTypes";

/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
class QRCodeWork extends InstructionOTO {
  name: string = "OpenURLWork";
  run(input: BaseType, option?: QRcodeOption): Observable<Value.StringAble> {
    const that = this;
    return new Observable((subscriber: Subscriber<Value.StringAble>) => {
      let target: string;
      if (input === null || input === undefined) target = "";
      else {
        target = ((input as Value.ValueAble<any>).valueOf() as Object).toString();
      }
      const sub = (that.context as ContextImpl).platform
        .createQrCode(target, option)
        .subscribe({
          next: (res) => subscriber.next(res),
          complete: () => subscriber.complete(),
          error: (err) => subscriber.error(err),
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
    // return isNode || isWeb || isRN
  }
}

export { QRCodeWork };
