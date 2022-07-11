import { NULLObject } from '../Object';
import { Subject, Observable, asyncScheduler, } from 'rxjs';
import { isJS, PlatformSelect } from '../Util/Equipment';
import { observeOn, tap } from 'rxjs/operators';
import { v4 as UUID } from 'uuid';
import { WorkUnit } from './WorkUnit';
import { StringObject } from '../Object';
import { wrapperValue } from '../Util/channel-value-util';
import { noop } from '../Util/tools';
/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
export class Instruction extends Subject {
    constructor() {
        super();
        this.name = 'Instruction';
        this.id = Instruction._id++;
        this.runSubscriptions = new Map();
        this.pools = []; // 订阅自己的
        // 运行配置 config:OPTION todo
        this.config = { development: true };
        this.uuid = UUID();
    }
    // 连接上下通道
    prepare(before, next) {
        var _a;
        this.beforeWork = before;
        this.nextWork = next;
        this.config = ((_a = this.context) === null || _a === void 0 ? void 0 : _a.runOptions) || {};
        this._connectChannel();
        return Promise.resolve();
    }
    // 处理上一个的传入
    _connectChannel() {
        const that = this;
        // // 处理数据
        const sub2 = this.pipe(tap((value) => {
            var _a, _b;
            ((_a = this.config) === null || _a === void 0 ? void 0 : _a.development) &&
                ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                    work: [that],
                    content: this.context,
                    desc: '[Work:preRun]->接受到数据',
                    value: value,
                }));
        })).subscribe({
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
        const execFunc = PlatformSelect({
            web: () => {
                var _a;
                return ((_a = that.web_run) !== null && _a !== void 0 ? _a : (that.run || noop)).bind(that)(value, nextOption);
            },
            node: () => {
                var _a;
                return ((_a = that.node_run) !== null && _a !== void 0 ? _a : (that.run || noop)).bind(that)(value, nextOption);
            },
            other: () => (that.run || noop).bind(that)(value, nextOption),
        });
        sendLog('[Work][Func:run]->入口', value);
        const uuid = UUID();
        const runSub = execFunc(value)
            .pipe(tap(function (_value) {
            sendLog('[Work][Func:run]->结果', _value);
        }), observeOn(asyncScheduler))
            .subscribe({
            complete: () => {
                const unit = that.runSubscriptions.get(uuid);
                unit === null || unit === void 0 ? void 0 : unit.sub.unsubscribe();
                that.runSubscriptions.delete(uuid);
            },
            error: (err) => {
                sendLog('[Work][Func:run]->执行错误', value, err);
                that.completeOneLoop(value, new NULLObject(), false);
            },
            next: (res) => {
                var _a;
                sendLog('[Work][Func:run]->将执行下一个Work', res);
                that.completeOneLoop(value, res, true);
                (_a = that.nextWork) === null || _a === void 0 ? void 0 : _a.next(res);
            },
        });
        const unit = new WorkUnit(that.context, that, runSub, uuid);
        this.runSubscriptions.set(unit.uuid, unit);
    }
    stopWork() {
        const that = this;
        return new Observable((subscribe) => {
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
                desc: '[Work:preRun]-接受上一个消息错误',
                date: new Date(),
                value: new StringObject(err.message),
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
                value: wrapperValue(input, null),
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
                desc: this.toString() + ' 已经关闭',
                value: wrapperValue(value, null),
            });
        }
    }
    // 声明周期
    // 处理输入的值
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, toValue, success) { }
    // 基础
    toString() {
        return `[${this.name}:${this.id}]`;
    }
    isAble() {
        return this.__proto__.isAble();
    }
    static isAble() {
        return isJS;
    }
}
Instruction._id = 0;
export class InstructionOTO extends Instruction {
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, toValue, success) { }
    run(input) {
        return new Observable((subscriber) => {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}
export class InstructionOTM extends Instruction {
    constructor() {
        super(...arguments);
        this.name = 'MultipleInstruction';
    }
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, next, success) { }
    run(input) {
        return new Observable((subscriber) => {
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
export class InstructionMTM extends Instruction {
    constructor() {
        super(...arguments);
        this.name = 'MultipleInstruction';
    }
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, next, success) { }
    run(input) {
        return new Observable((subscriber) => {
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
//# sourceMappingURL=Instruction.js.map