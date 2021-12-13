import { BaseType, ContextImpl, WorkType, Value } from "../Types";
import {
  Subject,
  Subscription,
  Observable,
  PartialObserver,
  Subscriber,
  asyncScheduler,
} from "rxjs";
import { ExecError } from "../Error";
import {
  currentEnir,
  isMobile,
  isPC,
  JSRUNEnvirType,
  PlatformSelect,
} from "../Util/Equipment";
import { WorkRunOption } from "../Configs";
import { observeOn, tap } from "rxjs/operators";
import { v4 as UUID } from "uuid";
import { WorkUnit } from "./WorkUnit";
import { EnvironmentAble } from "../Util/EquipmentTools";
import { StringObject } from "../Object/Able/ObjectAble";

/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
export class Instruction
  extends Subject<BaseType>
  implements WorkType.Work, EnvironmentAble {
  static OPTION: WorkRunOption;
  name: string = "Instruction";
  static _id: number = 0;
  id: number = Instruction._id++;
  uuid: WorkType.WorkUUID;
  beforeWork?: WorkType.Work;
  nextWork?: WorkType.Work;
  context?: ContextImpl;
  runSubscriptions: Map<string, WorkUnit> = new Map();
  pools: Subscription[] = [];
  // 运行配置 config:OPTION todo
  config: { [key: string]: any } = { dev: true };
  constructor() {
    super();
    this.uuid = UUID();
  }
  // run(input: InOutputAble): Observable<InOutputAble> {
  //   throw new Error("Method not implemented.");
  // }
  // rn_run?(input: InOutputAble): Observable<InOutputAble> {
  //   throw new Error("Method not implemented.");
  // }
  // web_run?(input: InOutputAble): Observable<InOutputAble> {
  //   throw new Error("Method not implemented.");
  // }
  // node_run?(input: InOutputAble): Observable<InOutputAble> {
  //   throw new Error("Method not implemented.");
  // }

  // 连接上下通道
  prepare(before?: WorkType.Work, next?: WorkType.Work): void {
    this.beforeWork = before;
    this.nextWork = next;
    this._connectChannel();
  }

  // 处理上一个的传入
  _connectChannel() {
    const that = this;
    // // 处理数据
    const sub2: Subscription = this
      .pipe(
        tap((value) => {
          this.config?.dev &&
            that.context?.sendLog({
              work: that,
              content: this.context,
              desc: "[Work:preRun]->接受到数据",
              value: value,
            });
        })
      )
      .subscribe({
        complete: () => { },
        error: (error) => that.error(error),
        next: (value: BaseType) => that._run(value),
      });
    this.pools.push(sub2);
  }

  _run(value: BaseType) {
    value = this.nextValue(value) || value;
    const that = this;
    const execFunc: WorkType.WorkFunction = PlatformSelect({
      reactNative: () =>
        ((that as WorkType.Work).rn_run ?? (that as WorkType.Work).run).bind(
          that
        )(value),
      web: () =>
        ((that as WorkType.Work).web_run ?? (that as WorkType.Work).run).bind(
          that
        )(value),
      node: () =>
        ((that as WorkType.Work).node_run ?? (that as WorkType.Work).run).bind(
          that
        )(value),
      electron: () =>
        ((that as WorkType.Work).electron_run ?? (that as WorkType.Work).run).bind(
          that
        )(value),
    });
    this.config?.dev &&
      that.context?.sendLog({
        work: that,
        content: this.context,
        desc: "[Work][Func:run]->入口",
        value: value,
      });
    if (execFunc) {
      const uuid = UUID();
      const runSub: Subscription = execFunc(value)
        .pipe(
          tap((_value: Value.ValueAble<any>) => {
            that.config?.dev &&
              that.context?.sendLog({
                work: that,
                content: this.context,
                desc: "[Work][Func:run]->结果",
                value: _value?.valueOf(),
              });
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
            that.context.msgChannel.error(new ExecError(that, err));
            that.completeOneLoop(value, null, false);
          },
          next: (res) => {
            that.config?.dev &&
              that.context?.sendLog({
                work: that,
                content: that.context,
                desc: "[Work][Func:run]->下一个Work",
                value: res?.valueOf(),
              });
            that.completeOneLoop(value, res as BaseType, true);
            that.nextWork?.next(res as BaseType);
          },
        });
      const unit = new WorkUnit(that.context, that, runSub, uuid);
      this.runSubscriptions.set(unit.uuid, unit);
    }
  }

  // 接受处理上一个work的值
  handleMessageNext(value: BaseType) {
    this.next(value);
  }

  stopWork(): Observable<Boolean> {
    const that = this
    return new Observable<Boolean>((subscribe: Subscriber<Boolean>) => {
      that.stop();
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

  stop(): void {
    // this.inputSubscription.unsubscribe();
  }

  clear(): void {
    this.pools && this.pools.forEach(($1) => $1.unsubscribe());
    this.pools.length = 0;
    this.unsubscribe();
  }

  error(err: Error): void {
    this.context &&
      this.context.sendLog({
        work: this,
        content: this.context,
        desc: "[Work:preRun]-接受上一个消息错误",
        date: new Date(),
        value: new StringObject(err.message),
      });
  }
  addVariable(name: string, value: BaseType): void {
    this.context && this.context.addVariable(this, name, value);
  }
  logMsg(msg: string): void {
    this.config?.dev &&
      this.context?.sendLog({
        work: this,
        content: this.context,
        desc: msg,
      });
  }

  //重写
  next(value: BaseType) {
    if (this.closed === false) {
      super.next(value);
    } else {
      this.context.sendLog({
        work: this,
        content: this.context,
        desc: this.toString() + " 已经关闭",
      })
    }
  }
  // 声明周期
  // 接受到一个输入
  nextValue(input: BaseType): BaseType { return input }
  completeOneLoop(input: BaseType, toValue: BaseType, success: Boolean) { }

  // 基础
  toString() {
    return `[${this.name}:${this.id}]`;
  }
  isAble(): Boolean {
    return (this as any).__proto__.isAble();
  }

  static isAble() {
    return isPC || isMobile;
  }
}

export class InstructionOTO extends Instruction {
  // handleMessageNext(value: BaseType) {
  //   this.next(value);
  //   this.stop();
  // }
  nextValue(input: BaseType): BaseType {
    this.complete();
    return input;
  }
  completeOneLoop(input: BaseType, toValue: BaseType, success: Boolean) {
    this.unsubscribe()
    this.clear();
  }
  run(input: BaseType): Observable<BaseType> {
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
  nextValue(input: BaseType): BaseType { return input }
  completeOneLoop(input: BaseType, next: BaseType, success: Boolean) { }
  run(input: BaseType): Observable<BaseType> {
    return new Observable((subscriber) => {
      subscriber.next(input);
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

  nextValue(input: BaseType): BaseType { return input }
  completeOneLoop(input: BaseType, next: BaseType, success: Boolean) { }
  
  run(input: BaseType): Observable<BaseType> {
    return new Observable((subscriber) => {
      subscriber.next(input);
      // 输出多次
      subscriber.next(input);
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
