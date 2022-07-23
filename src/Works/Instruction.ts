import { cloneDeep, merge } from 'lodash';
import { BaseType, ContextImpl, WorkType, ChannelObject } from '../Types';
import {
  Subject,
  Subscription,
  Observable,
  Subscriber,
  asyncScheduler,
  Observer,
} from 'rxjs';
import { isJS, PlatformSelect } from '../Util/Equipment';
import { ContextRunOption, WorkRunOption } from '../Configs/types';
import { observeOn, tap } from 'rxjs/operators';
import { v4 as UUID } from 'uuid';
import { WorkUnit } from './WorkUnit';
import { EnvironmentAble } from '../Util/EvalEquipment';
import { NULLObject, StringObject } from '../Object';
import { emptyChannelValue, wrapperValue } from '../Util/channel-value-util';
import { noop } from '../Util/tools';

/**
 *
 * 示例
 *
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
export class Instruction
  extends Subject<ChannelObject>
  implements WorkType.Work, EnvironmentAble
{
  declare observers: Observer<BaseType>[];
  static NAME: string = 'Instruction';
  static _id: number = 0;
  id: number = Instruction._id++;
  uuid: WorkType.WorkUUID;
  beforeWork?: WorkType.Work;
  nextWork?: WorkType.Work;
  context: ContextImpl;
  runSubscriptions: Map<string, WorkUnit> = new Map();
  pools: Subscription[] = []; // 订阅自己的
  runOption: ContextRunOption = { development: true };
  runConfig?: any;
  constructor(runConfig?: any) {
    super();
    this.uuid = UUID();
    this.runConfig = runConfig || {};
  }
  // 连接上下通道
  prepare(before?: WorkType.Work, next?: WorkType.Work): Promise<void> {
    this.beforeWork = before;
    this.nextWork = next;
    // if(Object.keys(this.c))
    this.runOption = this.context?.runOptions || ({} as ContextRunOption);
    this._connectChannel();
    return Promise.resolve().then(() => {
      this.didPrepare && this.didPrepare(this.context, this);
    });
  }

  get name(): string {
    return this.constructor.name;
  }

  getCurrentConfig() {
    const defaultOption = (this.runOption?.workConfig || {})[this.name] || {};
    return merge(cloneDeep(defaultOption), this.runConfig);
  }

  runConfigExport() {
    return this.getCurrentConfig();
  }

  // 处理上一个的传入
  _connectChannel() {
    const that = this;
    // // 处理数据
    const sub2: Subscription = this.pipe(
      tap((value) => {
        this.runOption?.development &&
          that.context?.sendLog({
            work: [that],
            content: this.context,
            desc: '[Work:preRun]->接受到数据',
            value: value,
          });
      })
    ).subscribe({
      complete: () => {},
      error: (error) =>
        that.logMsg('[next][接受上一个work信号错误]', null, error),
      next: (value: BaseType) => that._run(value as ChannelObject),
    });
    this.pools.push(sub2);
  }

  _run(signal: ChannelObject) {
    const that = this;
    const newValue =
      (this.onReceiveSignal
        ? this.onReceiveSignal(this.context, this, signal)
        : null) || signal;

    const nextOption = this.getCurrentConfig();
    const execFunc: WorkType.WorkFunction = PlatformSelect({
      web: () =>
        (
          (that as WorkType.Work).web_run ??
          ((that as WorkType.Work).run || noop)
        ).bind(that)(newValue, nextOption),
      node: () =>
        (
          (that as WorkType.Work).node_run ??
          ((that as WorkType.Work).run || noop)
        ).bind(that)(newValue, nextOption),
      other: () =>
        ((that as WorkType.Work).run || noop).bind(that)(newValue, nextOption),
    });
    that.logMsg('[Work][Func:run]->入口', newValue);
    const uuid = UUID();
    const runSub: Subscription = execFunc(newValue)
      .pipe(
        tap(function (_value: ChannelObject) {
          that.logMsg('[Work][Func:run]->结果', _value);
        }),
        observeOn(asyncScheduler)
      )
      .subscribe({
        complete: () => {
          const unit = that.runSubscriptions.get(uuid);
          unit?.sub.unsubscribe();
          that.runSubscriptions.delete(uuid);
          that.onChainComplete &&
            that.onChainComplete(that.context, that, signal, newValue);
        },
        error: (err) => {
          that.logMsg('[Work][Func:run]->执行错误', newValue, err);
        },
        next: (res) => {
          that.logMsg('[Work][Func:run]->将执行下一个Work', res);
          res =
            (that.onChainNext
              ? this.onChainNext(that.context, that, signal, newValue, res)
              : null) || res;
          that.nextWork?.next(res as BaseType);
        },
      });
    const unit = new WorkUnit(that.context, that, runSub, uuid);
    this.runSubscriptions.set(unit.uuid, unit);
  }

  stopWork(): Observable<Boolean> {
    const that = this;
    return new Observable<Boolean>((subscribe: Subscriber<Boolean>) => {
      that.runSubscriptions.forEach((value) => {
        value?.sub.unsubscribe();
      });
      subscribe.next(true);
      subscribe.complete();
      that.onForceFinish && that.onForceFinish(that.context, that);
      return {
        unsubscribe: () => subscribe.unsubscribe(),
      };
    });
  }
  clear(): void {
    this.pools && this.pools.forEach(($1) => $1.unsubscribe());
    this.pools.length = 0;
    this.unsubscribe();
  }

  addVariable(name: string, value: BaseType): void {
    this.context && this.context.addVariable(this, name, value);
  }
  logMsg(msg: string, input?: ChannelObject, error?: Error | null): void {
    this.runOption?.development &&
      this.context?.sendLog({
        date: new Date(),
        work: [this],
        content: this.context,
        desc: msg,
        value: input ?? emptyChannelValue(),
        error,
      });
  }

  //重写
  next(value: ChannelObject) {
    if (this.closed === false) {
      super.next(value);
    } else {
      this.context.sendLog({
        work: [this],
        content: this.context,
        desc: this.toString() + ' 已经关闭',
        value: wrapperValue(value, null),
      });
    }
  }

  /*** Loop */
  didPrepare(context: ContextImpl, work: WorkType.Work) {}
  onReceiveSignal(
    context: ContextImpl,
    work: WorkType.Work,
    signal: ChannelObject
  ): ChannelObject | null {
    return null;
  }
  onChainNext?(
    context: ContextImpl,
    work: WorkType.Work,
    signal: ChannelObject,
    reSignal: ChannelObject,
    next: ChannelObject
  ): ChannelObject | null {
    return null;
  }

  onChainComplete(
    context: ContextImpl,
    work: WorkType.Work,
    signal: ChannelObject,
    reSignal: ChannelObject
  ) {}

  onForceFinish(context: ContextImpl, work: WorkType.Work) {}

  // 基础
  toString() {
    return `[${this.name}:${this.id}]`;
  }
  isAble(): Boolean {
    return (this as any).__proto__.isAble();
  }
  static isAble() {
    return isJS;
  }
}

/***
 *
 */
export class InstructionOTO extends Instruction {
  static NAME: string = 'MultipleInstruction';
  run(input: ChannelObject): Observable<ChannelObject> {
    return new Observable((subscriber) => {
      subscriber.next(input);
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}

export class InstructionOTM extends Instruction {
  // 声明可以进行配置的属性 todo
  static NAME: string = 'MultipleInstruction';
  run(input: ChannelObject): Observable<ChannelObject> {
    return new Observable((subscriber) => {
      // subscriber.next(input);
      // 输出多次
      subscriber.next(input);
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}

export class InstructionMTM extends Instruction {
  // 声明可以进行配置的属性 todo=
  static NAME: string = 'MultipleInstruction';
  run(input: ChannelObject): Observable<ChannelObject> {
    return new Observable((subscriber) => {
      // subscriber.next(input);
      // 输出多次
      subscriber.next(input);
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
