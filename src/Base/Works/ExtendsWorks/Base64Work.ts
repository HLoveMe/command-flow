
import { BaseType } from "../../Type";
import { StringAble, ValueAble } from "../../Object/ObjectTypes";
import { Base64 } from 'js-base64';
import { InstructionMTM } from "../Instruction";
import { Observable, of, Subscriber } from "rxjs";
import { StringObj } from "../../Object/BaseObject";

//编码
class Base64EnCodeWork extends InstructionMTM {
  name: string = "Base64EnCodeWork";

  run(input: BaseType): Observable<StringAble> {
    return new Observable((subscriber: Subscriber<StringAble>) => {
      console.log('编码')
      let target: string
      if (input === null || input === undefined) target = ''
      else {
        target = ((input as ValueAble).valueOf() as Object).toString()
      }
      subscriber.next(new StringObj(Base64.encode(target)))
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
//解码
class Base64DecodeWork extends InstructionMTM {
  name: string = "Base64DecodeWork";

  run(input: BaseType): Observable<StringAble> {
    console.log('解码')
    return new Observable((subscriber: Subscriber<StringAble>) => {
      let target: string
      if (input === null || input === undefined) target = ''
      else {
        target = ((input as ValueAble).valueOf() as Object).toString()
      }
      subscriber.next(new StringObj(Base64.decode(target)))
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
export {
  Base64DecodeWork,
  Base64EnCodeWork
}