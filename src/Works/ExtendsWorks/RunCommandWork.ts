

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
function handleEvalCommand(template: string, params: ChannelObject, config: CommandParams, runOption: RunCommandWorkConfig): string {
  const input = unpackValue<CommandParams | string>(params)
  let runCommand: string = template;
  if (typeof input === 'string') {
    const placeholder = config['*'];
    if (placeholder) {
      const reg = new RegExp(placeholder, 'g')
      runCommand = runCommand.replace(reg, input)
    }
  } else {
    Object.keys(config).forEach(key => {
      const placeholder = config[key];
      const value = input[key]
      const reg = new RegExp(placeholder, 'g')
      runCommand = runCommand.replace(reg, value)
    })
  }
  return runCommand;
}

/**
 * 默认：
 * run javascript 
 * 
 * node:指定
 *  = "#javascript#console.log('hello world')"
 *  = "#shell#echo hello world"
 * 
 *  lastWork-output-value:1000
 *  new RunCommandWork('$I$ + 1') === new RunCommandWork('$I$ + 1',{'*':'$I$ '})
 *  ===>run "1000 + 1" 
 *  ==================================
 * 
 *  lastWork-output-value:{A:1000,B:2}
 *  new RunCommandWork('$X$ + 20 * $Y$',{'A':'$X$,'B':'$Y$' '})
 *  ===> "1000 + 20 * 2"
 */
export default class RunCommandWork extends InstructionOTO {
  template: string = '';
  name: string = "RunCommandWork";
  paramsConfig: CommandParams = {};
  constructor(template: string = '$I$', paramsConfig?: CommandParams) {
    super();
    this.template = template;
    this.paramsConfig = paramsConfig || { "*": "$I$" }
  }
  run(command: ChannelObject, option?: RunCommandWorkConfig): Observable<ChannelObject<BooleanObject>> {
    const that = this;
    return new Observable((subscriber: Subscriber<ChannelObject<BooleanObject>>) => {
      const target: string = handleEvalCommand(that.template, command, this.paramsConfig, option)
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
