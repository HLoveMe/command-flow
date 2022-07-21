import { BaseType, ChannelObject, ChannelValue, ContextImpl } from "../../Types";
import { StringObject, Value } from '../../Object'
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { QRcodeOption } from "../../Bridge/ConfigTypes";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
import { StringObjectAble } from "../../Object/Able/Base/StringObject";

/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
class QRCodeWork extends InstructionOTO {
  static NAME: string = "QRCodeWork";
  constructor(runConfig?: QRcodeOption){
    super(runConfig)
  }
  run(input: ChannelObject, option?: QRcodeOption): Observable<ChannelObject<StringObjectAble>> {
    const that = this;
    return new Observable((subscriber: Subscriber<ChannelObject<StringObjectAble>>) => {
      let target: string;
      if (input === null || input === undefined) target = "";
      else {
        target = unpackValue(input)
      }
      const sub = (that.context as ContextImpl).platform
        .createQrCode(target, option)
        .subscribe({
          next: (res) => subscriber.next(wrapperValue<string>(input, res._value)),
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
