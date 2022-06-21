

import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { CommandStatus } from "../../Bridge/ConfigTypes";
import { ChannelObject, ContextImpl, BaseType } from "../../Types";
import { BooleanObject } from '../../Object/Able/ObjectAble';
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
import { RunCommandWorkConfig } from "../../Configs";

type CommandParams = { [key: string]: string }
/**
 * "1 + $I$ "
 * @param template 
 * @param input 
 * @param option 
 * @returns 
 */
function handleEvalCommand(template: string, input: string, option: RunCommandWorkConfig): string {
  const inputKey = option.input;
  const command = template.replace(inputKey, input);
  return command;
}

/**
 * 默认：
 * run javascript 
 * 
 * node:指定
 *  = "#javascript#console.log('hello world')"
 *  = "#shell#echo hello world"
 */
export default class RunCommandWork extends InstructionOTO {
  template: string = '';
  constructor(template: string = '$I$') {
    super();
    this.template = template;
  }
  name: string = "RunCommandWork";
  run(command: ChannelObject, option?: RunCommandWorkConfig): Observable<ChannelObject<BooleanObject>> {
    const that = this;
    return new Observable((subscriber: Subscriber<ChannelObject<BooleanObject>>) => {
      const target: string = handleEvalCommand(that.template, unpackValue(command), option)
      const sub = (that.context as ContextImpl).platform
        .runCommand(target)
        .subscribe({
          next: (info: CommandStatus) => {
            this.logMsg(`执行command：${info.error ? '失败' : '成功'}。结果：${info.result}`, command);
            subscriber.next(wrapperValue(command, info.error ? undefined : info.result))
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
