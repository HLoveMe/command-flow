import { BaseType, ContextImpl, WorkType, Value, ChannelObject, ChannelValue } from "../Types";
import {
  Subject,
  Subscription,
  Observable,
  PartialObserver,
  Subscriber,
  asyncScheduler,
} from "rxjs";
import {
  isJS,
  PlatformSelect,
} from "../Util/Equipment";
import { ContextRunOption, WorkRunOption } from "../Configs";
import { observeOn, tap } from "rxjs/operators";
import { v4 as UUID } from "uuid";
import { WorkUnit } from "./WorkUnit";
import { EnvironmentAble } from "../Util/EvalEquipment";
import { StringObject } from "../Object/Able/ObjectAble";
import { wrapperValue } from "../Util/channel-value-util";
import { noop } from "../Util/tools";

/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
export class Instruction
  extends Subject<ChannelObject>
  implements WorkType.Work, EnvironmentAble {
  observers: any[];
  name: string = "Instruction";
  static _id: number = 0;
  id: number = Instruction._id++;
  uuid: WorkType.WorkUUID;
  beforeWork?: WorkType.Work;
  nextWork?: WorkType.Work;
  context: ContextImpl;
  runSubscriptions: Map<string, WorkUnit> = new Map();
  pools: Subscription[] = [];// 订阅自己的
  // 运行配置 config:OPTION todo
  config: ContextRunOption = { development: true };
  constructor() {
    super();
    this.uuid = UUID();
  }
  // 连接上下通道
  prepare(before?: WorkType.Work, next?: WorkType.Work): Promise<void> {
    this.beforeWork = before;
    this.nextWork = next;
    this.config = this.context?.runOptions || {} as ContextRunOption;
    this._connectChannel();
    return Promise.resolve();
  }

  // 处理上一个的传入
  _connectChannel() {
    const that = this;
    // // 处理数据
    const sub2: Subscription = this
      .pipe(
        tap((value) => {
          this.config?.development &&
            that.context?.sendLog({
              work: [that],
              content: this.context,
              desc: "[Work:preRun]->接受到数据",
              value: value,
            });
        })
      )
      .subscribe({
        complete: () => { },
        error: (error) => that.error(error),
        next: (value: BaseType) => that._run(value as ChannelObject),
      });
    this.pools.push(sub2);
  }

  _run(value: ChannelObject) {
    const sendLog = (desc: string, _value?: ChannelObject, _error?: Error) => {
      that.config?.development &&
        that.context?.sendLog({
          work: [that],
          content: this.context,
          desc: desc,
          value: _value || value,
          error: _error,
        });
    }
    value = this.nextValue(value) || value;
    const that = this;
    const nextOption = (this.config?.workConfig || {})[this.name] || {};
    const execFunc: WorkType.WorkFunction = PlatformSelect({
      web: () =>
        ((that as WorkType.Work).web_run ?? ((that as WorkType.Work).run || noop)).bind(
          that
        )(value, nextOption),
      node: () =>
        ((that as WorkType.Work).node_run ?? ((that as WorkType.Work).run || noop)).bind(
          that
        )(value, nextOption),
      electron: () =>
        ((that as WorkType.Work).electron_run ?? ((that as WorkType.Work).run || noop)).bind(
          that
        )(value, nextOption),
      other: () =>
        (((that as WorkType.Work).run || noop)).bind(
          that
        )(value, nextOption)
    });
    sendLog("[Work][Func:run]->入口", value);
    const uuid = UUID();
    const runSub: Subscription = execFunc(value)
      .pipe(
        tap(function(_value:ChannelObject){
          sendLog("[Work][Func:run]->结果", _value)
        }),
        observeOn(asyncScheduler)
      )
      .subscribe({
        complete: () => {
          const unit = that.runSubscriptions.get(uuid);
          unit?.sub.unsubscribe();
          that.runSubscriptions.delete(uuid);
        },
        error: (err) => {
          sendLog("[Work][Func:run]->执行错误", value, err);
          that.completeOneLoop(value, null, false);
        },
        next: (res) => {
          sendLog("[Work][Func:run]->将执行下一个Work", res);
          that.completeOneLoop(value, res as BaseType, true);
          that.nextWork?.next(res as BaseType);
        },
      });
    const unit = new WorkUnit(that.context, that, runSub, uuid);
    this.runSubscriptions.set(unit.uuid, unit);

  }

  stopWork(): Observable<Boolean> {
    const that = this
    return new Observable<Boolean>((subscribe: Subscriber<Boolean>) => {
      that.runSubscriptions.forEach((value) => {
        value?.sub.unsubscribe();
      });
      subscribe.next(true);
      subscribe.complete();
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

  error(err: Error): void {
    this.context &&
      this.context.sendLog({
        work: [this],
        content: this.context,
        desc: "[Work:preRun]-接受上一个消息错误",
        date: new Date(),
        value: new StringObject(err.message),
      });
  }
  addVariable(name: string, value: BaseType): void {
    this.context && this.context.addVariable(this, name, value);
  }
  logMsg(msg: string, input: ChannelObject): void {
    this.config?.development &&
      this.context?.sendLog({
        work: [this],
        content: this.context,
        desc: msg,
        value: wrapperValue(input, null),
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
        desc: this.toString() + " 已经关闭",
        value: wrapperValue(value, null),
      })
    }
  }
  // 声明周期
  // 处理输入的值
  nextValue(input: ChannelObject): ChannelObject { return input }
  completeOneLoop(input: BaseType, toValue: BaseType, success: Boolean) { }

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

export class InstructionOTO extends Instruction {
  nextValue(input: ChannelObject): ChannelObject {
    return input;
  }
  completeOneLoop(input: ChannelObject, toValue: ChannelObject, success: Boolean) { }
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
  static OPTION: WorkRunOption;
  name: string = "MultipleInstruction";
  nextValue(input: ChannelObject): ChannelObject { return input }
  completeOneLoop(input: ChannelObject, next: ChannelObject, success: Boolean) { }
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
  // 声明可以进行配置的属性 todo
  static OPTION: WorkRunOption;
  name: string = "MultipleInstruction";

  nextValue(input: ChannelObject): ChannelObject { return input }
  completeOneLoop(input: ChannelObject, next: ChannelObject, success: Boolean) { }

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
