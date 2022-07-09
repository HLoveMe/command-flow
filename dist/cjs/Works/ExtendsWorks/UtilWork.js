"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelayIntervalWork = exports.TimeoutWork = exports.IntervalWork = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const index_1 = require("../../Object/index");
const channel_value_util_1 = require("../../Util/channel-value-util");
const Instruction_1 = require("../Instruction");
// 一直发
class IntervalWork extends Instruction_1.InstructionOTM {
    name = "IntervalWork";
    intervalTime;
    maxCount;
    notifier;
    constructor(interval, max = Infinity, notifier) {
        super();
        this.intervalTime = interval || 1000;
        this.maxCount = max;
        this.notifier = notifier || rxjs_1.NEVER;
    }
    run(input) {
        const intervalTime = parseInt((0, channel_value_util_1.unpackValue)(input)) || this.intervalTime || 1000;
        const that = this;
        return new rxjs_1.Observable(observer => {
            const sub = (0, rxjs_1.interval)(intervalTime, rxjs_1.asyncScheduler).pipe((0, operators_1.take)(that.maxCount), (0, operators_1.takeUntil)(this.notifier)).subscribe({
                next: (value) => observer.next((0, channel_value_util_1.wrapperValue)(input, value)),
                error: (error) => observer.error(error),
                complete: () => observer.complete()
            });
            return {
                unsubscribe: () => {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    }
}
exports.IntervalWork = IntervalWork;
// 定时发
class TimeoutWork extends Instruction_1.InstructionOTO {
    name = "TimeoutWork";
    intervalTime;
    constructor(interval) {
        super();
        this.intervalTime = interval || 1000;
    }
    run(input) {
        const intervalTime = parseInt((0, channel_value_util_1.unpackValue)(input)) || this.intervalTime || 1000;
        const that = this;
        return new rxjs_1.Observable(observer => {
            const sub = (0, rxjs_1.interval)(intervalTime, rxjs_1.asyncScheduler)
                .pipe((0, operators_1.take)(1)).subscribe({
                next: (value) => {
                    observer.next((0, channel_value_util_1.wrapperValue)(input, value));
                },
                error: (error) => observer.error(error),
                complete: () => observer.complete()
            });
            return {
                unsubscribe: () => {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    }
}
exports.TimeoutWork = TimeoutWork;
// 延迟 然后一直发
class DelayIntervalWork extends Instruction_1.InstructionOTM {
    name = 'DelayIntervalWork';
    intervalTime;
    maxCount;
    delayTime;
    notifier;
    constructor(delay = 0, interval = 1000, max = Infinity, notifier) {
        super();
        this.intervalTime = interval || 1000;
        this.maxCount = max;
        this.delayTime = delay || 0;
        this.notifier = notifier || rxjs_1.NEVER;
    }
    run(input) {
        const intervalTime = parseInt((0, channel_value_util_1.unpackValue)(input)) || this.intervalTime || 1000;
        const that = this;
        return new rxjs_1.Observable(observer => {
            const sub = (0, rxjs_1.timer)(that.delayTime, intervalTime, rxjs_1.asyncScheduler)
                .pipe((0, operators_1.take)(that.maxCount), (0, operators_1.takeUntil)(this.notifier))
                .subscribe({
                next: (value) => observer.next((0, channel_value_util_1.wrapperValue)(input, new index_1.NumberObject(value))),
                error: (error) => observer.error(error),
                complete: () => observer.complete()
            });
            return {
                unsubscribe: () => {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    }
}
exports.DelayIntervalWork = DelayIntervalWork;
