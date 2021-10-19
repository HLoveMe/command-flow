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
exports.SingleInstruction = exports.MultipleInstruction = void 0;
var rxjs_1 = require("rxjs");
var Error_1 = require("../Error");
var Equipment_1 = require("../Util/Equipment");
var UUID = require("uuid/v4");
/**
 * 一次输入--->一次输出
 * 一次输入--->多次输出 Instruction,MultipleInstruction
 * n次输入---->m次输出
 */
var Instruction = /** @class */ (function (_super) {
    __extends(Instruction, _super);
    function Instruction() {
        var _this = _super.call(this) || this;
        _this.name = "Instruction";
        _this.id = Instruction._id++;
        _this.pools = [];
        // 运行配置 config:OPTION todo
        _this.config = { dev: true };
        _this.uuid = UUID();
        return _this;
    }
    Instruction.prototype.prepare = function (input, before, next) {
        this.beforeWork = before;
        this.nextWork = next;
        this._connectChannel(input);
    };
    // 处理上一个的传入
    Instruction.prototype._connectChannel = function (input) {
        var that = this;
        // 连接上一个的输出
        var observer = {
            next: function (value) { return that.next(value); },
            error: null,
            complete: null,
        };
        var sub1 = ((0, rxjs_1.isObservable)(input) ? input : (0, rxjs_1.of)(input)).subscribe(observer);
        this.pools.push(sub1);
        // // 处理数据
        var sub2 = that.subscribe({
            complete: function () { },
            error: function (error) { return that.error(error); },
            next: function (value) { return that._run(value); },
        });
        this.pools.push(sub2);
    };
    Instruction.prototype._run = function (value) {
        var _this = this;
        var that = this;
        var execFunc = (0, Equipment_1.PlatformSelect)({
            reactNative: function () { var _a; return ((_a = that.rn_run) !== null && _a !== void 0 ? _a : that.run)(value); },
            web: function () { var _a; return ((_a = that.web_run) !== null && _a !== void 0 ? _a : that.run)(value); },
            node: function () {
                var _a;
                return ((_a = that.node_run) !== null && _a !== void 0 ? _a : that.run)(value);
            },
        });
        execFunc &&
            execFunc(value).subscribe({
                complete: function () { },
                next: function (res) { return _this.nextWork.next(res); },
            });
    };
    // 接受处理上一个work的值
    Instruction.prototype.handleMessageNext = function (value) {
        this.next(value);
    };
    Instruction.prototype.run = function (input) {
        return new rxjs_1.Observable(function (subscriber) {
            subscriber.next(input);
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    Instruction.prototype.stop = function () { };
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
    Instruction._id = 0;
    return Instruction;
}(rxjs_1.Subject));
var MultipleInstruction = /** @class */ (function (_super) {
    __extends(MultipleInstruction, _super);
    function MultipleInstruction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "MultipleInstruction";
        return _this;
    }
    return MultipleInstruction;
}(Instruction));
exports.MultipleInstruction = MultipleInstruction;
var SingleInstruction = /** @class */ (function (_super) {
    __extends(SingleInstruction, _super);
    function SingleInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleInstruction.prototype.run = function (input) {
        return new rxjs_1.Observable(function (subscriber) {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return SingleInstruction;
}(Instruction));
exports.SingleInstruction = SingleInstruction;
//# sourceMappingURL=Instruction.js.map