

import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { CommandStatus } from "../../Bridge/ConfigTypes";
import { BaseType, ChannelObject, ContextImpl } from "../../Types";
import { Value } from '../../Types';
import { BooleanObject } from '../../Object/Able/ObjectAble';
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";

/**
 * 默认：
 * run javascript 
 * 
 * node:指定
 *  = "#javascript#console.log('hello world')"
 *  = "#shell#echo hello world"
 */
export default class RunCommandWork extends InstructionOTO {
  name: string = "RunCommandWork";
  run(command: ChannelObject, option?: any): Observable<ChannelObject<BooleanObject>> {
    const that = this;
    return new Observable((subscriber: Subscriber<ChannelObject<BooleanObject>>) => {
      let target: string;
      if (command === null || command === undefined) target = "";
      else {
        // target = ((command as Value.ValueAble<any>).valueOf() as Object).toString();
        target = unpackValue(command)
      }
      const sub = (that.context as ContextImpl).platform
        .runCommand(target)
        .subscribe({
          next: (info: CommandStatus) => {
            this.logMsg(JSON.stringify(info), command);
            subscriber.next(wrapperValue(command, new BooleanObject(info.error !== null && info.status === true)))
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
