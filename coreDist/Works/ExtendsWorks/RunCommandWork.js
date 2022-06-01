"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../Instruction");
const rxjs_1 = require("rxjs");
const Equipment_1 = require("../../Util/Equipment");
const channel_value_util_1 = require("../../Util/channel-value-util");
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
class RunCommandWork extends Instruction_1.InstructionOTO {
    constructor(template = '$I$') {
        super();
        this.template = '';
        this.name = "RunCommandWork";
        this.template = template;
    }
    run(command, option) {
        const that = this;
        return new rxjs_1.Observable((subscriber) => {
            const target = handleEvalCommand(that.template, (0, channel_value_util_1.unpackValue)(command), option);
            const sub = that.context.platform
                .runCommand(target)
                .subscribe({
                next: (info) => {
                    this.logMsg(`执行command：${info.error ? '失败' : '成功'}。结果：${info.result}`, command);
                    subscriber.next((0, channel_value_util_1.wrapperValue)(command, info.error ? undefined : info.result));
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
        return Equipment_1.isJS;
        // return isNode || isWeb || isRN || isElectron
    }
}
exports.default = RunCommandWork;
//# sourceMappingURL=RunCommandWork.js.map