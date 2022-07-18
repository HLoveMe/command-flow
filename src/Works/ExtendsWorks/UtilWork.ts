import { Observable, interval, asyncScheduler, timer, NEVER } from "rxjs"
import { takeUntil, take } from "rxjs/operators"
import { NumberObjectAble, NumberObject } from "../../Object/index"
import { ChannelObject } from "../../Types";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
import { InstructionOTM, InstructionOTO } from "../Instruction"

// 一直发
class IntervalWork extends InstructionOTM {
  static NAME = "IntervalWork"
  intervalTime: number;
  maxCount: number;
  notifier: Observable<any>;
  constructor(interval: number, max: number = Infinity, notifier?: Observable<any>) {
    super()
    this.intervalTime = interval || 1000;
    this.maxCount = max;
    this.notifier = notifier || NEVER;
  }

  run(input: ChannelObject): Observable<ChannelObject<NumberObjectAble>> {
    const intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
    const that = this;
    return new Observable(observer => {
      const sub = interval(intervalTime, asyncScheduler).pipe(
        take(that.maxCount),
        takeUntil(this.notifier),
      ).subscribe({
        next: (value: number) => observer.next(wrapperValue(input, value)),
        error: (error) => observer.error(error),
        complete: () => observer.complete()
      })
      return {
        unsubscribe: () => {
          observer.unsubscribe()
          sub.unsubscribe()
        }
      }
    })
  }
}

// 定时发
class TimeoutWork extends InstructionOTO {
  static NAME = "TimeoutWork"
  intervalTime: number;
  constructor(interval: number,) {
    super()
    this.intervalTime = interval || 1000;
  }
  run(input: ChannelObject): Observable<ChannelObject<NumberObjectAble>> {
    const intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
    const that = this;

    return new Observable(observer => {
      const sub = interval(intervalTime, asyncScheduler)
        .pipe(
          take(1)
        ).subscribe({
          next: (value) => {
            observer.next(wrapperValue(input, value))
          },
          error: (error) => observer.error(error),
          complete: () => observer.complete()
        })
      return {
        unsubscribe: () => {
          observer.unsubscribe()
          sub.unsubscribe()
        }
      }
    })
  }
}

// 延迟 然后一直发
class DelayIntervalWork extends InstructionOTM {
  static NAME = 'DelayIntervalWork'
  intervalTime: number;
  maxCount: number;
  delayTime: number;
  notifier: Observable<any>;
  constructor(delay: number = 0, interval: number = 1000, max: number = Infinity, notifier?: Observable<any>) {
    super()
    this.intervalTime = interval || 1000;
    this.maxCount = max;
    this.delayTime = delay || 0;
    this.notifier = notifier || NEVER;
  }

  run(input: ChannelObject): Observable<ChannelObject<NumberObjectAble>> {
    const intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
    const that = this;
    return new Observable(observer => {
      const sub = timer(that.delayTime, intervalTime, asyncScheduler)
        .pipe(
          take(that.maxCount),
          takeUntil(this.notifier),
        )
        .subscribe({
          next: (value) => observer.next(wrapperValue(input, new NumberObject(value))),
          error: (error) => observer.error(error),
          complete: () => observer.complete()
        })
      return {
        unsubscribe: () => {
          observer.unsubscribe()
          sub.unsubscribe()
        }
      }
    })

  }
}

export {
  IntervalWork,
  TimeoutWork,
  DelayIntervalWork
}