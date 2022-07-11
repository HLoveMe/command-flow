import { InstructionOTO } from '../Instruction';
import { Observable } from 'rxjs';
import { ChannelObject } from '../../Types';
import { ObjectTarget } from '../../Object';
import { RunCommandWorkConfig } from '../../Configs';
declare type CommandParams = {
    [key: string]: string;
};
declare type HandleEvalCommand = (params: CommandParams | string, runOption?: RunCommandWorkConfig) => string;
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
    template: string;
    name: string;
    paramsConfig: CommandParams;
    callBack?: HandleEvalCommand;
    constructor(...args: any[]);
    run(command: ChannelObject, option?: RunCommandWorkConfig): Observable<ChannelObject<ObjectTarget<any>>>;
    static isAble(): boolean;
}
export {};
//# sourceMappingURL=RunCommandWork.d.ts.map