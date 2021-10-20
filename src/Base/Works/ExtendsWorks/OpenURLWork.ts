import { InOutNumber } from "../../Object/InOutputValue";
import { SwitchStatusValue, SwitchStatus } from "../WorkTypes";
import { InOutputAbleOrNil, BaseType, ContextImpl } from "../../Type";
import {} from "react-native";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { ValueAble } from "../../Object/ObjectTypes";
import { BooleanObj } from "../../Object/BaseObject";

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
          next: (res) => subscriber.next(new BooleanObj(res)),
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
}
