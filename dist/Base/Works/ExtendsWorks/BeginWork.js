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
exports.BeginWork = void 0;
var rxjs_1 = require("rxjs");
var uuid_1 = require("uuid");
var Instruction_1 = require("../Instruction");
var Equipment_1 = require("../../Util/Equipment");
var rxjs_operators_1 = require("../../Util/rxjs_operators");
var BeginWork = /** @class */ (function (_super) {
    __extends(BeginWork, _super);
    function BeginWork() {
        var _this = _super.call(this) || this;
        _this.name = "BeginWork";
        // 输入 头部work
        _this.inputSubject = new rxjs_1.Subject();
        _this.uuid = (0, uuid_1.v4)();
        _this.heartSubject = (0, rxjs_1.interval)(1000);
        return _this;
    }
    // 处理上一个的传入
    BeginWork.prototype._connectChannel = function () {
        var that = this;
        // 处理启动指令 仅仅头部work会触发
        var observer = {
            next: function (value) { return that.next(value[1]); },
            error: null,
            complete: null,
        };
        // var sub1: Subscription = this.inputSubject.subscribe(observer);
        var sub1 = (0, rxjs_1.combineLatest)([this.heartSubject, this.inputSubject]).pipe((0, rxjs_operators_1.BufferValue)()).subscribe(observer);
        this.inputSubscription = sub1;
        this.pools.push(sub1);
        // // 处理数据
        var sub2 = that
            .subscribe({
            complete: function () { },
            error: function (error) { return that.error(error); },
            next: function (value) { return that._run(value); },
        });
        this.pools.push(sub2);
    };
    BeginWork.prototype._run = function (input, initOption) {
        var _a;
        (_a = this.nextWork) === null || _a === void 0 ? void 0 : _a.next(input);
    };
    /**
     * 运行 头部
     * @param value
     */
    BeginWork.prototype.startRun = function (value) {
        this.inputSubject.next(value);
    };
    BeginWork.prototype.completeOneLoop = function () { };
    BeginWork.isAble = function () {
        return Equipment_1.isJS;
    };
    BeginWork._id = 0;
    return BeginWork;
}(Instruction_1.InstructionMTM));
exports.BeginWork = BeginWork;
//# sourceMappingURL=BeginWork.js.map