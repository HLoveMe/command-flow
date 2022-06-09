import { Observable, interval, asyncScheduler, timer, NEVER } from "rxjs";
import { takeUntil, take } from "rxjs/operators";
import { NumberObject } from "../..";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
import { InstructionOTM, InstructionOTO } from "../Instruction";
// 一直发
class IntervalWork extends InstructionOTM {
    constructor(interval, max = Infinity, notifier) {
        super();
        this.name = "IntervalWork";
        this.intervalTime = interval || 1000;
        this.maxCount = max;
        this.notifier = notifier || NEVER;
    }
    run(input) {
        const intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
        const that = this;
        return new Observable(observer => {
            const sub = interval(intervalTime, asyncScheduler).pipe(take(that.maxCount), takeUntil(this.notifier)).subscribe({
                next: (value) => observer.next(wrapperValue(input, new NumberObject(value))),
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
// 定时发
class TimeoutWork extends InstructionOTO {
    constructor(interval) {
        super();
        this.name = "TimeoutWork";
        this.intervalTime = interval || 1000;
    }
    run(input) {
        const intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
        const that = this;
        return new Observable(observer => {
            const sub = interval(intervalTime, asyncScheduler)
                .pipe(take(1)).subscribe({
                next: (value) => {
                    observer.next(wrapperValue(input, new NumberObject(value)));
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
// 延迟 然后一直发
class DelayIntervalWork extends InstructionOTM {
    constructor(delay = 0, interval = 1000, max = Infinity, notifier) {
        super();
        this.name = 'DelayIntervalWork';
        this.intervalTime = interval || 1000;
        this.maxCount = max;
        this.delayTime = delay || 0;
        this.notifier = notifier || NEVER;
    }
    run(input) {
        const intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
        const that = this;
        return new Observable(observer => {
            const sub = timer(that.delayTime, intervalTime, asyncScheduler)
                .pipe(take(that.maxCount), takeUntil(this.notifier))
                .subscribe({
                next: (value) => observer.next(wrapperValue(input, new NumberObject(value))),
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
export { IntervalWork, TimeoutWork, DelayIntervalWork };
//# sourceMappingURL=UtilWork.js.map