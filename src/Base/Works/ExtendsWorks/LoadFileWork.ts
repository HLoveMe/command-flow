import { BaseType, ContextImpl } from "../../Type";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { ValueAble } from "../../Object/ObjectTypes";
import { BooleanObject } from "../../Object/BaseObject";
import { isElectron, isNode, isPC, isRN, isWeb } from "../../Util/Equipment";
import { FileOption } from "../../Bridge/ConfigTypes";

export default class LoadFileWork extends InstructionOTO {
  name: string = "LoadFileWork";
  run(input: BaseType, option?: FileOption): Observable<BooleanObject> {
    const that = this;
    return new Observable((subscriber: Subscriber<BooleanObject>) => {
      let target: string;
      if (input === null || input === undefined) target = "";
      else {
        target = ((input as ValueAble<any>).valueOf() as Object).toString();
      }
      const sub = (that.context as ContextImpl).platform
        .loadFile(target, option)
        .subscribe({
          next: (_) => subscriber.next(new BooleanObject(true)),
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
    return (isNode && isPC) || (isWeb && isPC) || isElectron || isRN;
  }
}
