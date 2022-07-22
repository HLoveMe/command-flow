import { Observable, interval, asyncScheduler, timer, NEVER } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import {
  DelayIntervalConfig,
  IntervalConfig,
  TimeoutConfig,
} from '../../Configs/types';
import { NumberObjectAble, NumberObject } from '../../Object/index';
import { ChannelObject } from '../../Types';
import { unpackValue, wrapperValue } from '../../Util/channel-value-util';
import { InstructionOTM, InstructionOTO } from '../Instruction';

// 一直发
class IntervalWork extends InstructionOTM {
  static NAME = 'IntervalWork';
  notifier: Observable<any>;
  constructor(runConfig?: IntervalConfig, notifier?: Observable<any>) {
    super(runConfig);
    this.notifier = notifier || NEVER;
  }

  run(input: ChannelObject): Observable<ChannelObject<NumberObjectAble>> {
    const { intervalTime, max } = this.getCurrentConfig() as IntervalConfig;
    const that = this;
    return new Observable((observer) => {
      const sub = interval(intervalTime, asyncScheduler)
        .pipe(take(max), takeUntil(this.notifier))
        .subscribe({
          next: (value: number) => observer.next(wrapperValue(input, value)),
          error: (error) => observer.error(error),
          complete: () => observer.complete(),
        });
      return {
        unsubscribe: () => {
          observer.unsubscribe();
          sub.unsubscribe();
        },
      };
    });
  }
}

// 定时发
class TimeoutWork extends InstructionOTO {
  static NAME = 'TimeoutWork';
  constructor(runConfig?: TimeoutConfig) {
    super(runConfig);
  }

  run(input: ChannelObject): Observable<ChannelObject<NumberObjectAble>> {
    const { intervalTime } = this.getCurrentConfig() as TimeoutConfig;
    return new Observable((observer) => {
      const sub = interval(intervalTime, asyncScheduler)
        .pipe(take(1))
        .subscribe({
          next: (value) => {
            observer.next(wrapperValue(input, value));
          },
          error: (error) => observer.error(error),
          complete: () => observer.complete(),
        });
      return {
        unsubscribe: () => {
          observer.unsubscribe();
          sub.unsubscribe();
        },
      };
    });
  }
}

// 延迟 然后一直发
class DelayIntervalWork extends InstructionOTM {
  static NAME = 'DelayIntervalWork';
  notifier: Observable<any>;
  constructor(runConfig?: DelayIntervalConfig, notifier?: Observable<any>) {
     super(runConfig);
    this.notifier = notifier || NEVER;
  }

  run(input: ChannelObject): Observable<ChannelObject<NumberObjectAble>> {
    const { intervalTime, max, delay } =
      this.getCurrentConfig() as DelayIntervalConfig;
    const that = this;
    return new Observable((observer) => {
      const sub = timer(delay, intervalTime, asyncScheduler)
        .pipe(take(max), takeUntil(this.notifier))
        .subscribe({
          next: (value) =>
            observer.next(wrapperValue(input, new NumberObject(value))),
          error: (error) => observer.error(error),
          complete: () => observer.complete(),
        });
      return {
        unsubscribe: () => {
          observer.unsubscribe();
          sub.unsubscribe();
        },
      };
    });
  }
}

export { IntervalWork, TimeoutWork, DelayIntervalWork };
