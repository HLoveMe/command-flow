"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCodeWork = void 0;
const Instruction_1 = require("../Instruction");
const rxjs_1 = require("rxjs");
const Equipment_1 = require("../../Util/Equipment");
const channel_value_util_1 = require("../../Util/channel-value-util");
/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
class QRCodeWork extends Instruction_1.InstructionOTO {
    name = "QRCodeWork";
    run(input, option) {
        const that = this;
        return new rxjs_1.Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = "";
            else {
                target = (0, channel_value_util_1.unpackValue)(input);
            }
            const sub = that.context.platform
                .createQrCode(target, option)
                .subscribe({
                next: (res) => subscriber.next((0, channel_value_util_1.wrapperValue)(input, res._value)),
                complete: () => subscriber.complete(),
                error: (err) => subscriber.error(err),
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
        // return isNode || isWeb || isRN
    }
}
exports.QRCodeWork = QRCodeWork;
