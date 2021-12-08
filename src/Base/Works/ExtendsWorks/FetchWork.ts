import { BaseType, ContextImpl, Value } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import {
  ObjectTarget,
} from "../../Object/Able/ObjectAble";
import { isJS } from "../../Util/Equipment";
import { FileLoadEvent, FileOption } from "../../Bridge/ConfigTypes";
import { takeLast, tap } from "rxjs/operators";

export default class FetchWork extends InstructionOTO {
  name: string = "FetchWork";

  run(input: BaseType, option?: FileOption): Observable<ObjectTarget<any>> {
    return new Observable((subscriber: Subscriber<ObjectTarget<any>>) => {
      return {
        unsubscribe: () => {
          subscriber.unsubscribe()
        }
      }
    })
  }
  static isAble() {
    return isJS
  }
}
