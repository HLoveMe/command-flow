
import { ChannelObject } from "../../Types";
import { Base64 } from 'js-base64';
import { InstructionMTM } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
import { StringObjectAble } from "../../Object/Able/Base/StringObject";

//编码
class Base64EnCodeWork extends InstructionMTM {
  static NAME: string = "Base64EnCodeWork";

  run(input: ChannelObject): Observable<ChannelObject> {
    return new Observable((subscriber: Subscriber<ChannelObject<StringObjectAble>>) => {
      let target: string
      if (input === null || input === undefined) target = ''
      else {
        target = unpackValue(input)
      }
      subscriber.next(wrapperValue(input, Base64.encode(target)))
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
  static NAME: string = "Base64DecodeWork";

  run(input: ChannelObject): Observable<ChannelObject> {
    return new Observable((subscriber: Subscriber<ChannelObject<StringObjectAble>>) => {
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