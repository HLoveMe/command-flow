"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64EnCodeWork = exports.Base64DecodeWork = void 0;
const js_base64_1 = require("js-base64");
const Instruction_1 = require("../Instruction");
const rxjs_1 = require("rxjs");
const Equipment_1 = require("../../Util/Equipment");
const channel_value_util_1 = require("../../Util/channel-value-util");
//编码
class Base64EnCodeWork extends Instruction_1.InstructionMTM {
    name = "Base64EnCodeWork";
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0, channel_value_util_1.unpackValue)(input);
            }
            subscriber.next((0, channel_value_util_1.wrapperValue)(input, js_base64_1.Base64.encode(target)));
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.Base64EnCodeWork = Base64EnCodeWork;
//解码
class Base64DecodeWork extends Instruction_1.InstructionMTM {
    name = "Base64DecodeWork";
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0, channel_value_util_1.unpackValue)(input);
            }
            subscriber.next((0, channel_value_util_1.wrapperValue)(input, js_base64_1.Base64.decode(target)));
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.Base64DecodeWork = Base64DecodeWork;
