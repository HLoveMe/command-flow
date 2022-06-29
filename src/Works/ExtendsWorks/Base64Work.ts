
import { ChannelObject, ChannelValue } from "../../Types";
import { Base64 } from 'js-base64';
import { InstructionMTM } from "../Instruction";
import { Observable, of, Subscriber } from "rxjs";
import { StringObject, ObjectTarget } from "../../Object";
import { isJS } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";

//编码
class Base64EnCodeWork extends InstructionMTM {
  name: string = "Base64EnCodeWork";

  run(input: ChannelObject): Observable<ChannelObject> {
    return new Observable((subscriber: Subscriber<ChannelObject<StringObject>>) => {
      let target: string
      if (input === null || input === undefined) target = ''
      else {
        target = unpackValue(input)
      }
      const nextV = wrapperValue(input, Base64.encode(target))
      subscriber.next(wrapperValue<string>(input, Base64.encode(target)))
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
  static isAble() {
    return isJS;
  }
}
//解码
class Base64DecodeWork extends InstructionMTM {
  name: string = "Base64DecodeWork";

  run(input: ChannelObject): Observable<ChannelObject> {
    return new Observable((subscriber: Subscriber<ChannelObject<StringObject>>) => {
      let target: string
      if (input === null || input === undefined) target = ''
      else {
        target = unpackValue(input)
      }

      subscriber.next(wrapperValue(input, Base64.decode(target)))
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
  static isAble() {
    return isJS;
  }
}
export {
  Base64DecodeWork,
  Base64EnCodeWork
}