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
exports.DelayIntervalWork = exports.TimeoutWork = exports.IntervalWork = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var __1 = require("../..");
var Instruction_1 = require("../Instruction");
// 一直发
var IntervalWork = /** @class */ (function (_super) {
    __extends(IntervalWork, _super);
    function IntervalWork(interval, max) {
        if (max === void 0) { max = Infinity; }
        var _this = _super.call(this) || this;
        _this.intervalTime = interval || 1000;
        _this.maxCount = max;
        return _this;
    }
    IntervalWork.prototype.run = function (input) {
        var _a, _b;
        var intervalTime = (_b = (_a = input.valueOf()) !== null && _a !== void 0 ? _a : this.intervalTime) !== null && _b !== void 0 ? _b : 1000;
        var that = this;
        return new rxjs_1.Observable(function (observer) {
            var sub = (0, rxjs_1.interval)(intervalTime, rxjs_1.asyncScheduler).pipe((0, operators_1.take)(that.maxCount)).subscribe({
                next: function (value) { return observer.next(new __1.NumberObject(value)); },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            });
            that.pools.push(sub);
            return {
                unsubscribe: function () {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    };
    return IntervalWork;
}(Instruction_1.InstructionOTM));
exports.IntervalWork = IntervalWork;
// 定时发
var TimeoutWork = /** @class */ (function (_super) {
    __extends(TimeoutWork, _super);
    function TimeoutWork(interval) {
        var _this = _super.call(this) || this;
        _this.intervalTime = interval || 1000;
        return _this;
    }
    TimeoutWork.prototype.run = function (input) {
        var _a, _b;
        var intervalTime = (_b = (_a = input.valueOf()) !== null && _a !== void 0 ? _a : this.intervalTime) !== null && _b !== void 0 ? _b : 1000;
        var that = this;
        return new rxjs_1.Observable(function (observer) {
            var sub = (0, rxjs_1.of)(0).pipe((0, operators_1.timeout)(intervalTime, rxjs_1.asyncScheduler)).subscribe({
                next: function (value) { return observer.next(new __1.NumberObject(value)); },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            });
            that.pools.push(sub);
            return {
                unsubscribe: function () {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    };
    return TimeoutWork;
}(Instruction_1.InstructionOTO));
exports.TimeoutWork = TimeoutWork;
// 延迟 然后一直发
var DelayIntervalWork = /** @class */ (function (_super) {
    __extends(DelayIntervalWork, _super);
    function DelayIntervalWork(delay, interval, max) {
        if (delay === void 0) { delay = 0; }
        if (interval === void 0) { interval = 1000; }
        if (max === void 0) { max = Infinity; }
        var _this = _super.call(this) || this;
        _this.intervalTime = interval || 1000;
        _this.maxCount = max;
        _this.delayTime = delay;
        return _this;
    }
    DelayIntervalWork.prototype.run = function (input) {
        var _a, _b;
        var intervalTime = (_b = (_a = input.valueOf()) !== null && _a !== void 0 ? _a : this.intervalTime) !== null && _b !== void 0 ? _b : 1000;
        var that = this;
        return new rxjs_1.Observable(function (observer) {
            var sub = (0, rxjs_1.timer)(that.delayTime, intervalTime, rxjs_1.asyncScheduler).subscribe({
                next: function (value) { return observer.next(new __1.NumberObject(value)); },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            });
            that.pools.push(sub);
            return {
                unsubscribe: function () {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    };
    return DelayIntervalWork;
}(Instruction_1.InstructionOTM));
exports.DelayIntervalWork = DelayIntervalWork;
//# sourceMappingURL=UtilWork.js.map