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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Observable, interval, asyncScheduler, timer } from "rxjs";
import { take } from "rxjs/operators";
import { NumberObject, ObjectTarget } from "../..";
import { unpackValue } from "../../Util/channel-value-util";
import { InstructionOTM, InstructionOTO } from "../Instruction";
// 一直发
var IntervalWork = /** @class */ (function (_super) {
    __extends(IntervalWork, _super);
    function IntervalWork(interval, max) {
        if (max === void 0) { max = Infinity; }
        var _this = _super.call(this) || this;
        _this.name = "IntervalWork";
        _this.intervalTime = interval || 1000;
        _this.maxCount = max;
        return _this;
    }
    IntervalWork.prototype.run = function (input) {
        var intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
        var that = this;
        return new Observable(function (observer) {
            var sub = interval(intervalTime, asyncScheduler).pipe(take(that.maxCount)).subscribe({
                next: function (value) { return observer.next(new ObjectTarget(__assign(__assign({}, input._value), { value: new NumberObject(value) }))); },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            });
            return {
                unsubscribe: function () {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    };
    return IntervalWork;
}(InstructionOTM));
// 定时发
var TimeoutWork = /** @class */ (function (_super) {
    __extends(TimeoutWork, _super);
    function TimeoutWork(interval) {
        var _this = _super.call(this) || this;
        _this.name = "TimeoutWork";
        _this.intervalTime = interval || 1000;
        return _this;
    }
    TimeoutWork.prototype.run = function (input) {
        var intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
        var that = this;
        return new Observable(function (observer) {
            var sub = interval(intervalTime, asyncScheduler)
                .pipe(take(1)).subscribe({
                next: function (value) {
                    debugger;
                    observer.next(new ObjectTarget(__assign(__assign({}, input._value), { value: new NumberObject(value) })));
                },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            });
            return {
                unsubscribe: function () {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    };
    return TimeoutWork;
}(InstructionOTO));
// 延迟 然后一直发
var DelayIntervalWork = /** @class */ (function (_super) {
    __extends(DelayIntervalWork, _super);
    function DelayIntervalWork(delay, interval, max) {
        if (delay === void 0) { delay = 0; }
        if (interval === void 0) { interval = 1000; }
        if (max === void 0) { max = Infinity; }
        var _this = _super.call(this) || this;
        _this.name = 'DelayIntervalWork';
        _this.intervalTime = interval || 1000;
        _this.maxCount = max;
        _this.delayTime = delay;
        return _this;
    }
    DelayIntervalWork.prototype.run = function (input) {
        var intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
        var that = this;
        return new Observable(function (observer) {
            var sub = timer(that.delayTime, intervalTime, asyncScheduler)
                .pipe(take(that.maxCount))
                .subscribe({
                next: function (value) { return observer.next(new ObjectTarget(__assign(__assign({}, input._value), { value: new NumberObject(value) }))); },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            });
            return {
                unsubscribe: function () {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    };
    return DelayIntervalWork;
}(InstructionOTM));
export { IntervalWork, TimeoutWork, DelayIntervalWork };
//# sourceMappingURL=UtilWork.js.map