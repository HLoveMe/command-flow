"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../Instruction");
const rxjs_1 = require("rxjs");
const Object_1 = require("../../Object");
const Equipment_1 = require("../../Util/Equipment");
const channel_value_util_1 = require("../../Util/channel-value-util");
/**
 * 打开路径
 * http://www.baidu.com
 * node window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 *
 * node:可以打开文件 网页
 * web:只能代开网页
 */
class OpenURLWork extends Instruction_1.InstructionOTO {
    name = "OpenURLWork";
    run(input, option) {
        const that = this;
        return new rxjs_1.Observable((subscriber) => {
            const target = (0, channel_value_util_1.unpackValue)(input);
            const sub = that.context.platform
                .open(target, option)
                .subscribe({
                next: _ => subscriber.next((0, channel_value_util_1.wrapperValue)(input, new Object_1.BooleanObject(true))),
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
    }
}
exports.default = OpenURLWork;
