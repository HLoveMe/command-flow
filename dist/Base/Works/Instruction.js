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
exports.InstructionMTM = exports.InstructionOTM = exports.InstructionOTO = void 0;
var rxjs_1 = require("rxjs");
var Error_1 = require("../Error");
var Equipment_1 = require("../Util/Equipment");
var operators_1 = require("rxjs/operators");
var uuid_1 = require("uuid");
var WorkUnit_1 = require("./WorkUnit");
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
        _this.inputSubject = new rxjs_1.Subject();
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
    Instruction.prototype.prepare = function (before, next) {
        this.beforeWork = before;
        this.nextWork = next;
        this._connectChannel();
    };
    // 处理上一个的传入
    Instruction.prototype._connectChannel = function () {
        var _this = this;
        var that = this;
        // 处理启动指令 仅仅头部work会触发
        var observer = {
            next: function (value) { return that.next(value); },
            error: null,
            complete: null,
        };
        var sub1 = this.inputSubject.subscribe(observer);
        this.inputSubscription = sub1;
        this.pools.push(sub1);
        // // 处理数据
        var sub2 = that
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
                ((_a = _this.config) === null || _a === void 0 ? void 0 : _a.dev) &&
                    ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                        work: that,
                        content: _this.context,
                        desc: "[Work][Func:run]->结果",
                        value: _value === null || _value === void 0 ? void 0 : _value.valueOf(),
                    }));
            }))
                .subscribe({
                complete: function () {
                    var unit = that.runSubscriptions.get(uuid_2);
                    unit.sub.unsubscribe();
                    _this.runSubscriptions.delete(uuid_2);
                },
                next: function (res) {
                    var _a, _b, _c;
                    ((_a = _this.config) === null || _a === void 0 ? void 0 : _a.dev) &&
                        ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                            work: that,
                            content: _this.context,
                            desc: "[Work][Func:run]->下一个Work",
                            value: res === null || res === void 0 ? void 0 : res.valueOf(),
                        }));
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
        var _this = this;
        return new rxjs_1.Observable(function (subscribe) {
            _this.stop();
            _this.runSubscriptions.forEach(function (value) {
                value.sub.unsubscribe();
            });
            subscribe.next(true);
            subscribe.complete();
            return {
                unsubscribe: function () { return subscribe.unsubscribe(); },
            };
        });
    };
    Instruction.prototype.stop = function () {
        this.inputSubscription.unsubscribe();
    };
    /**
     * 运行
     * @param value
     */
    Instruction.prototype.startRun = function (value) {
        this.inputSubject.next(value);
    };
    Instruction.prototype.complete = function () {
        _super.prototype.complete.call(this);
        this.inputSubject.complete();
    };
    Instruction.prototype.clear = function () {
        this.pools && this.pools.forEach(function ($1) { return $1.unsubscribe(); });
        this.pools.length = 0;
        this.unsubscribe();
    };
    Instruction.prototype.error = function (err) {
        this.context && this.context.msgChannel.error(new Error_1.ExecError(this, err));
    };
    Instruction.prototype.addVariable = function (name, value) {
        this.context && this.context.addVariable(this, name, value);
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
var InstructionOTO = /** @class */ (function (_super) {
    __extends(InstructionOTO, _super);
    function InstructionOTO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionOTO.prototype.handleMessageNext = function (value) {
        this.next(value);
        this.stop();
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
    InstructionOTM.prototype.handleMessageNext = function (value) {
        this.next(value);
        this.stop();
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
    InstructionMTM.prototype.handleMessageNext = function (value) {
        this.next(value);
    };
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