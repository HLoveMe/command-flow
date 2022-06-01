var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Subject, Observable, asyncScheduler, } from "rxjs";
import { isJS, PlatformSelect, } from "../Util/Equipment";
import { observeOn, tap } from "rxjs/operators";
import { v4 as UUID } from "uuid";
import { WorkUnit } from "./WorkUnit";
import { StringObject } from "../Object/Able/ObjectAble";
import { wrapperValue } from "../Util/channel-value-util";
/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
var Instruction = /** @class */ (function (_super) {
    __extends(Instruction, _super);
    function Instruction() {
        var _this = _super.call(this) || this;
        _this.name = "Instruction";
        _this.id = Instruction._id++;
        _this.runSubscriptions = new Map();
        _this.pools = []; // 订阅自己的
        // 运行配置 config:OPTION todo
        _this.config = { development: true };
        _this.uuid = UUID();
        return _this;
    }
    // 连接上下通道
    Instruction.prototype.prepare = function (before, next) {
        this.beforeWork = before;
        this.nextWork = next;
        this.config = this.context.runOptions;
        this._connectChannel();
        return Promise.resolve();
    };
    // 处理上一个的传入
    Instruction.prototype._connectChannel = function () {
        var _this = this;
        var that = this;
        // // 处理数据
        var sub2 = this
            .pipe(tap(function (value) {
            var _a, _b;
            ((_a = _this.config) === null || _a === void 0 ? void 0 : _a.development) &&
                ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                    work: [that],
                    content: _this.context,
                    desc: "[Work:preRun]->接受到数据",
                    value: value,
                }));
        }))
            .subscribe({
            complete: function () { },
            error: function (error) { return that.error(error); },
            next: function (value) { return that._run(value); },
        });
        this.pools.push(sub2);
    };
    Instruction.prototype._run = function (value) {
        var _this = this;
        var _a;
        var sendLog = function (desc, _value, _error) {
            var _a, _b;
            ((_a = that.config) === null || _a === void 0 ? void 0 : _a.development) &&
                ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                    work: [that],
                    content: _this.context,
                    desc: desc,
                    value: _value || value,
                    error: _error,
                }));
        };
        value = this.nextValue(value) || value;
        var that = this;
        var nextOption = (((_a = this.config) === null || _a === void 0 ? void 0 : _a.workConfig) || {})[this.name] || {};
        var execFunc = PlatformSelect({
            web: function () {
                var _a;
                return ((_a = that.web_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value, nextOption);
            },
            node: function () {
                var _a;
                return ((_a = that.node_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value, nextOption);
            },
            electron: function () {
                var _a;
                return ((_a = that.electron_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value, nextOption);
            },
            other: function () {
                return (that.run).bind(that)(value, nextOption);
            }
        });
        sendLog("[Work][Func:run]->入口", value);
        if (!execFunc === true)
            return sendLog("[Work][Func:run]->没有实现run", value);
        ;
        var uuid = UUID();
        var runSub = execFunc(value)
            .pipe(tap(function (_value) { return sendLog("[Work][Func:run]->结果", _value); }), observeOn(asyncScheduler))
            .subscribe({
            complete: function () {
                var unit = that.runSubscriptions.get(uuid);
                unit === null || unit === void 0 ? void 0 : unit.sub.unsubscribe();
                that.runSubscriptions.delete(uuid);
            },
            error: function (err) {
                sendLog("[Work][Func:run]->执行错误", value, err);
                that.completeOneLoop(value, null, false);
            },
            next: function (res) {
                var _a;
                sendLog("[Work][Func:run]->将执行下一个Work", res);
                that.completeOneLoop(value, res, true);
                (_a = that.nextWork) === null || _a === void 0 ? void 0 : _a.next(res);
            },
        });
        var unit = new WorkUnit(that.context, that, runSub, uuid);
        this.runSubscriptions.set(unit.uuid, unit);
    };
    Instruction.prototype.stopWork = function () {
        var that = this;
        return new Observable(function (subscribe) {
            that.runSubscriptions.forEach(function (value) {
                value === null || value === void 0 ? void 0 : value.sub.unsubscribe();
            });
            subscribe.next(true);
            subscribe.complete();
            return {
                unsubscribe: function () { return subscribe.unsubscribe(); },
            };
        });
    };
    Instruction.prototype.clear = function () {
        this.pools && this.pools.forEach(function ($1) { return $1.unsubscribe(); });
        this.pools.length = 0;
        this.unsubscribe();
    };
    Instruction.prototype.error = function (err) {
        this.context &&
            this.context.sendLog({
                work: [this],
                content: this.context,
                desc: "[Work:preRun]-接受上一个消息错误",
                date: new Date(),
                value: new StringObject(err.message),
            });
    };
    Instruction.prototype.addVariable = function (name, value) {
        this.context && this.context.addVariable(this, name, value);
    };
    Instruction.prototype.logMsg = function (msg, input) {
        var _a, _b;
        ((_a = this.config) === null || _a === void 0 ? void 0 : _a.development) &&
            ((_b = this.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                work: [this],
                content: this.context,
                desc: msg,
                value: wrapperValue(input, null),
            }));
    };
    //重写
    Instruction.prototype.next = function (value) {
        if (this.closed === false) {
            _super.prototype.next.call(this, value);
        }
        else {
            this.context.sendLog({
                work: [this],
                content: this.context,
                desc: this.toString() + " 已经关闭",
                value: wrapperValue(value, null),
            });
        }
    };
    // 声明周期
    // 处理输入的值
    Instruction.prototype.nextValue = function (input) { return input; };
    Instruction.prototype.completeOneLoop = function (input, toValue, success) { };
    // 基础
    Instruction.prototype.toString = function () {
        return "[".concat(this.name, ":").concat(this.id, "]");
    };
    Instruction.prototype.isAble = function () {
        return this.__proto__.isAble();
    };
    Instruction.isAble = function () {
        return isJS;
    };
    Instruction._id = 0;
    return Instruction;
}(Subject));
export { Instruction };
var InstructionOTO = /** @class */ (function (_super) {
    __extends(InstructionOTO, _super);
    function InstructionOTO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionOTO.prototype.nextValue = function (input) {
        return input;
    };
    InstructionOTO.prototype.completeOneLoop = function (input, toValue, success) { };
    InstructionOTO.prototype.run = function (input) {
        return new Observable(function (subscriber) {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return InstructionOTO;
}(Instruction));
export { InstructionOTO };
var InstructionOTM = /** @class */ (function (_super) {
    __extends(InstructionOTM, _super);
    function InstructionOTM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "MultipleInstruction";
        return _this;
    }
    InstructionOTM.prototype.nextValue = function (input) { return input; };
    InstructionOTM.prototype.completeOneLoop = function (input, next, success) { };
    InstructionOTM.prototype.run = function (input) {
        return new Observable(function (subscriber) {
            // subscriber.next(input);
            // 输出多次
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return InstructionOTM;
}(Instruction));
export { InstructionOTM };
var InstructionMTM = /** @class */ (function (_super) {
    __extends(InstructionMTM, _super);
    function InstructionMTM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "MultipleInstruction";
        return _this;
    }
    InstructionMTM.prototype.nextValue = function (input) { return input; };
    InstructionMTM.prototype.completeOneLoop = function (input, next, success) { };
    InstructionMTM.prototype.run = function (input) {
        return new Observable(function (subscriber) {
            // subscriber.next(input);
            // 输出多次
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return InstructionMTM;
}(Instruction));
export { InstructionMTM };
//# sourceMappingURL=Instruction.js.map