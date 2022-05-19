import { Observable, interval, asyncScheduler, timer } from "rxjs"
import { delay, take } from "rxjs/operators"
import { BaseType, NumberObject, ObjectTarget } from "../.."
import { ChannelObject } from "../../Types";
import { unpackValue } from "../../Util/channel-value-util";
import { InstructionOTM, InstructionOTO } from "../Instruction"

// 一直发
class IntervalWork extends InstructionOTM {
  name = "IntervalWork"
  intervalTime: number;
  maxCount: number;
  constructor(interval: number, max: number = Infinity) {
    super()
    this.intervalTime = interval || 1000;
    this.maxCount = max;
  }

  run(input: ChannelObject): Observable<ChannelObject<NumberObject>> {
    const intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
    const that = this;
    return new Observable(observer => {
      const sub = interval(intervalTime, asyncScheduler).pipe(
        take(that.maxCount)
      ).subscribe({
        next: (value) => observer.next(new ObjectTarget({
          ...input._value,
          value: new NumberObject(value)
        })),
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
  name = "TimeoutWork"
  intervalTime: number;
  constructor(interval: number,) {
    super()
    this.intervalTime = interval || 1000;
  }
  run(input: ChannelObject): Observable<ChannelObject<NumberObject>> {
    const intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
    const that = this;
    return new Observable(observer => {
      const sub = interval(intervalTime, asyncScheduler)
        .pipe(
          take(1)
        ).subscribe({
          next: (value) => {
            debugger
            observer.next(new ObjectTarget({
              ...input._value,
              value: new NumberObject(value)
            }))
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
  name = 'DelayIntervalWork'
  intervalTime: number;
  maxCount: number;
  delayTime: number;
  constructor(delay: number = 0, interval: number = 1000, max: number = Infinity) {
    super()
    this.intervalTime = interval || 1000;
    this.maxCount = max;
    this.delayTime = delay;
  }

  run(input: ChannelObject): Observable<ChannelObject<NumberObject>> {
    const intervalTime = parseInt(unpackValue(input)) || this.intervalTime || 1000;
    const that = this;
    return new Observable(observer => {
      const sub = timer(that.delayTime, intervalTime, asyncScheduler)
        .pipe(
          take(that.maxCount)
        )
        .subscribe({
          next: (value) => observer.next(new ObjectTarget({
            ...input._value,
            value: new NumberObject(value)
          })),
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