"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionMTM = exports.InstructionOTM = exports.InstructionOTO = exports.Instruction = void 0;
const rxjs_1 = require("rxjs");
const Equipment_1 = require("../Util/Equipment");
const operators_1 = require("rxjs/operators");
const uuid_1 = require("uuid");
const WorkUnit_1 = require("./WorkUnit");
const ObjectAble_1 = require("../Object/Able/ObjectAble");
const channel_value_util_1 = require("../Util/channel-value-util");
/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
class Instruction extends rxjs_1.Subject {
    constructor() {
        super();
        this.name = "Instruction";
        this.id = Instruction._id++;
        this.runSubscriptions = new Map();
        this.pools = []; // 订阅自己的
        // 运行配置 config:OPTION todo
        this.config = { development: true };
        this.uuid = (0, uuid_1.v4)();
    }
    // 连接上下通道
    prepare(before, next) {
        this.beforeWork = before;
        this.nextWork = next;
        this.config = this.context.runOptions;
        this._connectChannel();
        return Promise.resolve();
    }
    // 处理上一个的传入
    _connectChannel() {
        const that = this;
        // // 处理数据
        const sub2 = this
            .pipe((0, operators_1.tap)((value) => {
            var _a, _b;
            ((_a = this.config) === null || _a === void 0 ? void 0 : _a.development) &&
                ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                    work: [that],
                    content: this.context,
                    desc: "[Work:preRun]->接受到数据",
                    value: value,
                }));
        }))
            .subscribe({
            complete: () => { },
            error: (error) => that.error(error),
            next: (value) => that._run(value),
        });
        this.pools.push(sub2);
    }
    _run(value) {
        var _a;
        const sendLog = (desc, _value, _error) => {
            var _a, _b;
            ((_a = that.config) === null || _a === void 0 ? void 0 : _a.development) &&
                ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                    work: [that],
                    content: this.context,
                    desc: desc,
                    value: _value || value,
                    error: _error,
                }));
        };
        value = this.nextValue(value) || value;
        const that = this;
        const nextOption = (((_a = this.config) === null || _a === void 0 ? void 0 : _a.workConfig) || {})[this.name] || {};
        const execFunc = (0, Equipment_1.PlatformSelect)({
            web: () => {
                var _a;
                return ((_a = that.web_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value, nextOption);
            },
            node: () => {
                var _a;
                return ((_a = that.node_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value, nextOption);
            },
            electron: () => {
                var _a;
                return ((_a = that.electron_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value, nextOption);
            },
            other: () => (that.run).bind(that)(value, nextOption)
        });
        sendLog("[Work][Func:run]->入口", value);
        if (!execFunc === true)
            return sendLog("[Work][Func:run]->没有实现run", value);
        ;
        const uuid = (0, uuid_1.v4)();
        const runSub = execFunc(value)
            .pipe((0, operators_1.tap)((_value) => sendLog("[Work][Func:run]->结果", _value)), (0, operators_1.observeOn)(rxjs_1.asyncScheduler))
            .subscribe({
            complete: () => {
                const unit = that.runSubscriptions.get(uuid);
                unit === null || unit === void 0 ? void 0 : unit.sub.unsubscribe();
                that.runSubscriptions.delete(uuid);
            },
            error: (err) => {
                sendLog("[Work][Func:run]->执行错误", value, err);
                that.completeOneLoop(value, null, false);
            },
            next: (res) => {
                var _a;
                sendLog("[Work][Func:run]->将执行下一个Work", res);
                that.completeOneLoop(value, res, true);
                (_a = that.nextWork) === null || _a === void 0 ? void 0 : _a.next(res);
            },
        });
        const unit = new WorkUnit_1.WorkUnit(that.context, that, runSub, uuid);
        this.runSubscriptions.set(unit.uuid, unit);
    }
    stopWork() {
        const that = this;
        return new rxjs_1.Observable((subscribe) => {
            that.runSubscriptions.forEach((value) => {
                value === null || value === void 0 ? void 0 : value.sub.unsubscribe();
            });
            subscribe.next(true);
            subscribe.complete();
            return {
                unsubscribe: () => subscribe.unsubscribe(),
            };
        });
    }
    clear() {
        this.pools && this.pools.forEach(($1) => $1.unsubscribe());
        this.pools.length = 0;
        this.unsubscribe();
    }
    error(err) {
        this.context &&
            this.context.sendLog({
                work: [this],
                content: this.context,
                desc: "[Work:preRun]-接受上一个消息错误",
                date: new Date(),
                value: new ObjectAble_1.StringObject(err.message),
            });
    }
    addVariable(name, value) {
        this.context && this.context.addVariable(this, name, value);
    }
    logMsg(msg, input) {
        var _a, _b;
        ((_a = this.config) === null || _a === void 0 ? void 0 : _a.development) &&
            ((_b = this.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                work: [this],
                content: this.context,
                desc: msg,
                value: (0, channel_value_util_1.wrapperValue)(input, null),
            }));
    }
    //重写
    next(value) {
        if (this.closed === false) {
            super.next(value);
        }
        else {
            this.context.sendLog({
                work: [this],
                content: this.context,
                desc: this.toString() + " 已经关闭",
                value: (0, channel_value_util_1.wrapperValue)(value, null),
            });
        }
    }
    // 声明周期
    // 处理输入的值
    nextValue(input) { return input; }
    completeOneLoop(input, toValue, success) { }
    // 基础
    toString() {
        return `[${this.name}:${this.id}]`;
    }
    isAble() {
        return this.__proto__.isAble();
    }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.Instruction = Instruction;
Instruction._id = 0;
class InstructionOTO extends Instruction {
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, toValue, success) { }
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}
exports.InstructionOTO = InstructionOTO;
class InstructionOTM extends Instruction {
    constructor() {
        super(...arguments);
        this.name = "MultipleInstruction";
    }
    nextValue(input) { return input; }
    completeOneLoop(input, next, success) { }
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
            // subscriber.next(input);
            // 输出多次
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}
exports.InstructionOTM = InstructionOTM;
class InstructionMTM extends Instruction {
    constructor() {
        super(...arguments);
        this.name = "MultipleInstruction";
    }
    nextValue(input) { return input; }
    completeOneLoop(input, next, success) { }
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
            // subscriber.next(input);
            // 输出多次
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}
exports.InstructionMTM = InstructionMTM;
//# sourceMappingURL=Instruction.js.map