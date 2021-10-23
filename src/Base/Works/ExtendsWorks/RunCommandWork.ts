
import { BaseType, ContextImpl } from "../../Type";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { ValueAble } from "../../Object/ObjectTypes";
import { BooleanObject } from "../../Object/BaseObject";
import { isJS } from "../../Util/Equipment";
import { CommandStatus } from "../../Bridge/ConfigTypes";

/**
 * mobil   run javascript 
 * pc shell
 */
export default class RunCommandWork extends InstructionOTO {
  name: string = "RunCommandWork";
  run(command: BaseType, option?: any): Observable<BooleanObject> {
    const that = this;
    return new Observable((subscriber: Subscriber<BooleanObject>) => {
      let target: string;
      if (command === null || command === undefined) target = "";
      else {
        target = ((command as ValueAble<any>).valueOf() as Object).toString();
      }
      const sub = (that.context as ContextImpl).platform
        .runCommand(target)
        .subscribe({
          next: (info: CommandStatus) => {
            this.logMsg(JSON.stringify(info));
            subscriber.next(new BooleanObject(info.error !== null && info.status === true))
          },
          complete: () => subscriber.complete(),
          error: (err) => subscriber.error(err)
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
    return isJS
    // return isNode || isWeb || isRN || isElectron
  }
}
