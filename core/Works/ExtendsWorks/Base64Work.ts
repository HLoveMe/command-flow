
import { BaseType,Value } from "../../Types";
import { Base64 } from 'js-base64';
import { InstructionMTM } from "../Instruction";
import { Observable, of, Subscriber } from "rxjs";
import { StringObject } from "../../Object/Able/ObjectAble";
import { isJS } from "../../Util/Equipment";

//编码
class Base64EnCodeWork extends InstructionMTM {
  name: string = "Base64EnCodeWork";

  run(input: BaseType): Observable<Value.StringAble> {
    return new Observable((subscriber: Subscriber<Value.StringAble>) => {
      let target: string
      if (input === null || input === undefined) target = ''
      else {
        target = ((input as Value.ValueAble<any>).valueOf() as Object).toString()
      }
      subscriber.next(new StringObject(Base64.encode(target)))
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

  run(input: BaseType): Observable<Value.StringAble> {
    return new Observable((subscriber: Subscriber<Value.StringAble>) => {
      let target: string
      if (input === null || input === undefined) target = ''
      else {
        target = ((input as Value.ValueAble<any>).valueOf() as Object).toString()
      }
      subscriber.next(new StringObject(Base64.decode(target)))
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