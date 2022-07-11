import { InstructionOTO } from '../Instruction';
import { Observable, Subscriber } from 'rxjs';
import { isJS } from '../../Util/Equipment';
import { CommandStatus } from '../../Bridge/ConfigTypes';
import { ChannelObject, ContextImpl, BaseType } from '../../Types';
import { BooleanObject, ObjectTarget } from '../../Object';
import { unpackValue, wrapperValue } from '../../Util/channel-value-util';
import { RunCommandWorkConfig } from '../../Configs';
import { noop } from '../../Util/tools';

type CommandParams = { [key: string]: string };
type HandleEvalCommand = (
  params: CommandParams | string,
  runOption?: RunCommandWorkConfig
) => string;
/**
 * "1 + $I$ "
 * @param template
 * @param input
 * @param option
 * @returns
 */
function handleEvalCommand(
  template: string,
  params: ChannelObject,
  config: CommandParams,
  runOption?: RunCommandWorkConfig
): string {
  const input = unpackValue<CommandParams | string>(params);
  let runCommand: string = template;
  if (typeof input === 'string') {
    const placeholder = config['*'];
    if (placeholder) {
      const reg = new RegExp(placeholder, 'g');
      runCommand = runCommand.replace(reg, input);
    }
  } else {
    Object.keys(config).forEach((key) => {
      const placeholder = config[key];
      const reg = new RegExp(placeholder, 'g');
      const value = input[key];
      runCommand = runCommand.replace(reg, value);
    });
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
 *  ===================================
 *
 *  lastWork-output-value:{A:1000,B:2}
 *  new RunCommandWork((params:{A:1000,B:2})=>{
 *     return `${A} * 2 + ${B}`
 *  })
 */
export default class RunCommandWork extends InstructionOTO {
  template: string = '';
  name: string = 'RunCommandWork';
  paramsConfig: CommandParams = {};
  callBack?: HandleEvalCommand = undefined;
  constructor(...args: any[]) {
    super();
    if (typeof args[0] === 'string') {
      const template: string = args[0] || '$I$';
      const paramsConfig: CommandParams = args[1] || { '*': '$I$' };
      this.template = template;
      this.paramsConfig = paramsConfig;
    } else if (typeof args[0] === 'function') {
      this.callBack = args[0] as HandleEvalCommand;
    }
  }

  run(
    command: ChannelObject,
    option?: RunCommandWorkConfig
  ): Observable<ChannelObject<ObjectTarget<any>>> {
    const that = this;
    return new Observable(
      (subscriber: Subscriber<ChannelObject<ObjectTarget<any>>>) => {
        let target: string;
        if (that.callBack && typeof that.callBack === 'function') {
          target = (this.callBack as HandleEvalCommand)(
            unpackValue<CommandParams | string>(command),
            option
          );
        } else
          target = handleEvalCommand(
            that.template,
            command,
            this.paramsConfig,
            option
          );
        const sub = (that.context as ContextImpl).platform
          .runCommand(target)
          .subscribe({
            next: (info: CommandStatus) => {
              this.logMsg(
                `执行command：${info.error ? '失败' : '成功'}。结果：${
                  info.result
                }`,
                command
              );
              subscriber.next(
                wrapperValue<Object>(
                  command,
                  (info.error ? undefined : info.result) as any
                )
              );
            },
            complete: () => subscriber.complete(),
            error: (err) => subscriber.error(err),
          });
        return {
          unsubscribe: () => {
            sub.unsubscribe();
            subscriber.unsubscribe();
          },
        };
      }
    );
  }
  static isAble() {
    return isJS;
    // return isNode || isWeb || isRN || isElectron
  }
}
