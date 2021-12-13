"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionMTM = exports.InstructionOTM = exports.InstructionOTO = exports.Instruction = void 0;
var rxjs_1 = require("rxjs");
var Error_1 = require("../Error");
var Equipment_1 = require("../Util/Equipment");
var operators_1 = require("rxjs/operators");
var uuid_1 = require("uuid");
var WorkUnit_1 = require("./WorkUnit");
var ObjectAble_1 = require("../Object/Able/ObjectAble");
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
        _this.pools = [];
        // 运行配置 config:OPTION todo
        _this.config = { dev: true };
        _this.uuid = (0, uuid_1.v4)();
        return _this;
    }
    // run(input: InOutputAble): Observable<InOutputAble> {
    //   throw new Error("Method not implemented.");
    // }
    // rn_run?(input: InOutputAble): Observable<InOutputAble> {
    //   throw new Error("Method not implemented.");
    // }
    // web_run?(input: InOutputAble): Observable<InOutputAble> {
    //   throw new Error("Method not implemented.");
    // }
    // node_run?(input: InOutputAble): Observable<InOutputAble> {
    //   throw new Error("Method not implemented.");
    // }
    // 连接上下通道
    Instruction.prototype.prepare = function (before, next) {
        this.beforeWork = before;
        this.nextWork = next;
        this._connectChannel();
    };
    // 处理上一个的传入
    Instruction.prototype._connectChannel = function () {
        var _this = this;
        var that = this;
        // // 处理数据
        var sub2 = this
            .pipe((0, operators_1.tap)(function (value) {
            var _a, _b;
            ((_a = _this.config) === null || _a === void 0 ? void 0 : _a.dev) &&
                ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                    work: that,
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
        var _a, _b;
        this.nextValue(value);
        var that = this;
        var execFunc = (0, Equipment_1.PlatformSelect)({
            reactNative: function () {
                var _a;
                return ((_a = that.rn_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value);
            },
            web: function () {
                var _a;
                return ((_a = that.web_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value);
            },
            node: function () {
                var _a;
                return ((_a = that.node_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value);
            },
            electron: function () {
                var _a;
                return ((_a = that.electron_run) !== null && _a !== void 0 ? _a : that.run).bind(that)(value);
            },
        });
        ((_a = this.config) === null || _a === void 0 ? void 0 : _a.dev) &&
            ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                work: that,
                content: this.context,
                desc: "[Work][Func:run]->入口",
                value: value,
            }));
        if (execFunc) {
            var uuid_2 = (0, uuid_1.v4)();
            var runSub = execFunc(value)
                .pipe((0, operators_1.tap)(function (_value) {
                var _a, _b;
                ((_a = that.config) === null || _a === void 0 ? void 0 : _a.dev) &&
                    ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                        work: that,
                        content: _this.context,
                        desc: "[Work][Func:run]->结果",
                        value: _value === null || _value === void 0 ? void 0 : _value.valueOf(),
                    }));
            }), (0, operators_1.observeOn)(rxjs_1.asyncScheduler))
                .subscribe({
                complete: function () {
                    var unit = that.runSubscriptions.get(uuid_2);
                    unit === null || unit === void 0 ? void 0 : unit.sub.unsubscribe();
                    that.runSubscriptions.delete(uuid_2);
                },
                error: function (err) {
                    that.context.msgChannel.error(new Error_1.ExecError(that, err));
                    that.completeOneLoop(value, null, false);
                },
                next: function (res) {
                    var _a, _b, _c;
                    ((_a = that.config) === null || _a === void 0 ? void 0 : _a.dev) &&
                        ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                            work: that,
                            content: that.context,
                            desc: "[Work][Func:run]->下一个Work",
                            value: res === null || res === void 0 ? void 0 : res.valueOf(),
                        }));
                    that.completeOneLoop(value, res, true);
                    (_c = that.nextWork) === null || _c === void 0 ? void 0 : _c.next(res);
                },
            });
            var unit = new WorkUnit_1.WorkUnit(that.context, that, runSub, uuid_2);
            this.runSubscriptions.set(unit.uuid, unit);
        }
    };
    // 接受处理上一个work的值
    Instruction.prototype.handleMessageNext = function (value) {
        this.next(value);
    };
    Instruction.prototype.stopWork = function () {
        var that = this;
        return new rxjs_1.Observable(function (subscribe) {
            that.stop();
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
    Instruction.prototype.stop = function () {
        // this.inputSubscription.unsubscribe();
    };
    Instruction.prototype.clear = function () {
        this.pools && this.pools.forEach(function ($1) { return $1.unsubscribe(); });
        this.pools.length = 0;
        this.unsubscribe();
    };
    Instruction.prototype.error = function (err) {
        this.context &&
            this.context.sendLog({
                work: this,
                content: this.context,
                desc: "[Work:preRun]-接受上一个消息错误",
                date: new Date(),
                value: new ObjectAble_1.StringObject(err.message),
            });
    };
    Instruction.prototype.addVariable = function (name, value) {
        this.context && this.context.addVariable(this, name, value);
    };
    Instruction.prototype.logMsg = function (msg) {
        var _a, _b;
        ((_a = this.config) === null || _a === void 0 ? void 0 : _a.dev) &&
            ((_b = this.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                work: this,
                content: this.context,
                desc: msg,
            }));
    };
    //重写
    Instruction.prototype.next = function (value) {
        if (this.closed === false) {
            _super.prototype.next.call(this, value);
        }
        else {
            this.context.sendLog({
                work: this,
                content: this.context,
                desc: this.toString() + " 已经关闭",
            });
        }
    };
    // 声明周期
    Instruction.prototype.nextValue = function (input) { };
    Instruction.prototype.completeOneLoop = function (input, next, success) { };
    // 基础
    Instruction.prototype.toString = function () {
        return "[" + this.name + ":" + this.id + "]";
    };
    Instruction.prototype.isAble = function () {
        return this.__proto__.isAble();
    };
    Instruction.isAble = function () {
        return Equipment_1.isPC || Equipment_1.isMobile;
    };
    Instruction._id = 0;
    return Instruction;
}(rxjs_1.Subject));
exports.Instruction = Instruction;
var InstructionOTO = /** @class */ (function (_super) {
    __extends(InstructionOTO, _super);
    function InstructionOTO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // handleMessageNext(value: BaseType) {
    //   this.next(value);
    //   this.stop();
    // }
    InstructionOTO.prototype.nextValue = function (input) {
        this.complete();
    };
    InstructionOTO.prototype.completeOneLoop = function (input, next, success) {
        this.unsubscribe();
        this.clear();
    };
    InstructionOTO.prototype.run = function (input) {
        return new rxjs_1.Observable(function (subscriber) {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return InstructionOTO;
}(Instruction));
exports.InstructionOTO = InstructionOTO;
var InstructionOTM = /** @class */ (function (_super) {
    __extends(InstructionOTM, _super);
    function InstructionOTM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "MultipleInstruction";
        return _this;
    }
    // handleMessageNext(value: BaseType) {
    //   this.next(value);
    //   this.stop();
    // }
    InstructionOTM.prototype.completeOneLoop = function (input, next, success) {
        // this.inputSubject.complete();
        // this.inputSubject.unsubscribe();
    };
    InstructionOTM.prototype.run = function (input) {
        return new rxjs_1.Observable(function (subscriber) {
            subscriber.next(input);
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
exports.InstructionOTM = InstructionOTM;
var InstructionMTM = /** @class */ (function (_super) {
    __extends(InstructionMTM, _super);
    function InstructionMTM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "MultipleInstruction";
        return _this;
    }
    // handleMessageNext(value: BaseType) {
    //   this.next(value);
    // }
    InstructionMTM.prototype.run = function (input) {
        return new rxjs_1.Observable(function (subscriber) {
            subscriber.next(input);
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
exports.InstructionMTM = InstructionMTM;
//# sourceMappingURL=Instruction.js.map