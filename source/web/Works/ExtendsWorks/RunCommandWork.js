import { InstructionOTO } from "../Instruction";
import { Observable } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
/**
 * "1 + $I$ "
 * @param template
 * @param input
 * @param option
 * @returns
 */
function handleEvalCommand(template, input, option) {
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
    constructor(template = '$I$') {
        super();
        this.template = '';
        this.name = "RunCommandWork";
        this.template = template;
    }
    run(command, option) {
        const that = this;
        return new Observable((subscriber) => {
            const target = handleEvalCommand(that.template, unpackValue(command), option);
            const sub = that.context.platform
                .runCommand(target)
                .subscribe({
                next: (info) => {
                    this.logMsg(`执行command：${info.error ? '失败' : '成功'}。结果：${info.result}`, command);
                    subscriber.next(wrapperValue(command, info.error ? undefined : info.result));
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
        return isJS;
        // return isNode || isWeb || isRN || isElectron
    }
}
//# sourceMappingURL=RunCommandWork.js.map