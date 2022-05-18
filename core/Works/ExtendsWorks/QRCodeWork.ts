import { BaseType, ChannelObject, ChannelValue, ContextImpl, Value } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { QRcodeOption } from "../../Bridge/ConfigTypes";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";

/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
class QRCodeWork extends InstructionOTO {
  name: string = "QRCodeWork";
  run(input: ChannelObject, option?: QRcodeOption): Observable<ChannelObject<Value.StringAble>> {
    const that = this;
    return new Observable((subscriber: Subscriber<ChannelObject<Value.StringAble>>) => {
      let target: string;
      if (input === null || input === undefined) target = "";
      else {
        target = unpackValue(input)
      }
      const sub = (that.context as ContextImpl).platform
        .createQrCode(target, option)
        .subscribe({
          next: (res) => subscriber.next(wrapperValue(input, res)),
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
