import { Observable, interval, asyncScheduler, timer, of } from "rxjs"
import { delay, take, timeout } from "rxjs/operators"
import { BaseType, NumberObject } from "../.."
import { InstructionOTM, InstructionOTO } from "../Instruction"

// 一直发
class IntervalWork extends InstructionOTM {

  intervalTime: number;
  maxCount: number;
  constructor(interval: number, max: number = Infinity) {
    super()
    this.intervalTime = interval || 1000;
    this.maxCount = max;
  }

  run(input: BaseType): Observable<NumberObject> {
    const intervalTime = input.valueOf() ?? this.intervalTime ?? 1000;
    const that = this;
    return new Observable(observer => {
      const sub = interval(intervalTime, asyncScheduler).pipe(
        take(that.maxCount)
      ).subscribe({
        next: (value) => observer.next(new NumberObject(value)),
        error: (error) => observer.error(error),
        complete: () => observer.complete()
      })
      that.pools.push(sub)
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
  intervalTime: number;
  constructor(interval: number,) {
    super()
    this.intervalTime = interval || 1000;
  }
  run(input: BaseType): Observable<NumberObject> {
    const intervalTime = input.valueOf() ?? this.intervalTime ?? 1000;
    const that = this;
    return new Observable(observer => {
      const sub = of(0).pipe(
        timeout(intervalTime, asyncScheduler)
      ).subscribe({
        next: (value) => observer.next(new NumberObject(value)),
        error: (error) => observer.error(error),
        complete: () => observer.complete()
      })
      that.pools.push(sub)
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
  intervalTime: number;
  maxCount: number;
  delayTime: number;
  constructor(delay: number = 0, interval: number = 1000, max: number = Infinity) {
    super()
    this.intervalTime = interval || 1000;
    this.maxCount = max;
    this.delayTime = delay;
  }

  run(input: BaseType): Observable<NumberObject> {
    const intervalTime = input.valueOf() ?? this.intervalTime ?? 1000;
    const that = this;
    return new Observable(observer => {
      const sub = timer(that.delayTime, intervalTime, asyncScheduler).subscribe({
        next: (value) => observer.next(new NumberObject(value)),
        error: (error) => observer.error(error),
        complete: () => observer.complete()
      })
      that.pools.push(sub)
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