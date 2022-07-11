"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../Instruction");
const rxjs_1 = require("rxjs");
const Object_1 = require("../../Object");
const Equipment_1 = require("../../Util/Equipment");
const ConfigTypes_1 = require("../../Bridge/ConfigTypes");
const operators_1 = require("rxjs/operators");
const channel_value_util_1 = require("../../Util/channel-value-util");
class LoadFileWork extends Instruction_1.InstructionOTO {
    name = 'LoadFileWork';
    currentConfig = { type: ConfigTypes_1.FileType.All };
    constructor(config) {
        super();
        this.currentConfig = config || { type: ConfigTypes_1.FileType.All };
    }
    run(input, option) {
        const that = this;
        const runOption = { ...option, ...this.currentConfig };
        return new rxjs_1.Observable((subscriber) => {
            const target = (0, channel_value_util_1.unpackValue)(input);
            const sub = that.context.platform
                .loadFile(target, runOption)
                .pipe((0, operators_1.tap)((data) => {
                const obj = data;
                const { loaded, total, finish } = obj.valueOf();
                this.logMsg(`加载进度[load:progress]---：${loaded}/${total} 是否完成：${finish}`, input);
            }), (0, operators_1.takeLast)(1))
                .subscribe({
                next: (obj) => {
                    const { data, file } = obj.valueOf();
                    subscriber.next(new Object_1.ObjectTarget({
                        ...input._value,
                        value: new Object_1.DataObject(data),
                        option: { file },
                    }));
                    subscriber.complete();
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
        });
    }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.default = LoadFileWork;
