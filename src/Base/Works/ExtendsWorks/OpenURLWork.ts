import { InOutNumber } from "../../Object/InOutputValue";
import { SwitchStatusValue, SwitchStatus } from "../WorkTypes";
import { InOutputAbleOrNil, BaseType } from "../../Type";
import {} from "react-native";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { StringAble, ValueAble } from "../../Object/ObjectTypes";

export class OpenURLWork extends InstructionOTO {
  name: string = "OpenURLWork";
  run(input: BaseType, option?: any): Observable<StringAble> {
    return new Observable((subscriber: Subscriber<StringAble>) => {
      let target: string;
      if (input === null || input === undefined) target = "";
      else {
        target = ((input as ValueAble).valueOf() as Object).toString();
      }
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
