import { BaseType, ContextImpl, WorkType } from "../Type";
import {
  Subject,
  Subscription,
  Observable,
  PartialObserver,
  Subscriber,
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
import { tap } from "rxjs/operators";
import { v4 as UUID } from "uuid";
import { WorkUnit } from "./WorkUnit";
import { EnvironmentAble } from "../Util/EquipmentTools";
import { StringObject } from "../Object/BaseObject";
import { ValueAble } from "../Object/ObjectTypes";

/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
class Instruction
  extends Subject<BaseType>
  implements WorkType.Work, EnvironmentAble
{
  static OPTION: WorkRunOption;
  name: string = "Instruction";
  static _id: number = 0;
  id: number = Instruction._id++;
  uuid: WorkType.WorkUUID;
  beforeWork?: WorkType.Work;
  nextWork?: WorkType.Work;
  context?: ContextImpl;
  inputSubject: Subject<BaseType> = new Subject<BaseType>();
  inputSubscription: Subscription;
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

  prepare(before?: WorkType.Work, next?: WorkType.Work): void {
    this.beforeWork = before;
    this.nextWork = next;
    this._connectChannel();
  }

  // 处理上一个的传入
  _connectChannel() {
    const that = this;
    // 处理启动指令 仅仅头部work会触发
    const observer: PartialObserver<any> = {
      next: (value) => that.next(value),
      error: null,
      complete: null,
    };
    var sub1: Subscription = this.inputSubject.subscribe(observer);
    this.inputSubscription = sub1;
    this.pools.push(sub1);
    // // 处理数据
    const sub2: Subscription = that
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
        complete: () => {},
        error: (error) => that.error(error),
        next: (value: BaseType) => that._run(value),
      });
    this.pools.push(sub2);
  }

  _run(value: BaseType) {
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
          tap((_value: ValueAble<any>) => {
            that.config?.dev &&
              that.context?.sendLog({
                work: that,
                content: this.context,
                desc: "[Work][Func:run]->结果",
                value: _value?.valueOf(),
              });
          })
        )
        .subscribe({
          complete: () => {
            const unit = that.runSubscriptions.get(uuid);
            unit.sub.unsubscribe();
            that.runSubscriptions.delete(uuid);
          },
          error: (err) => {
            that.context.msgChannel.error(new ExecError(that, err));
          },
          next: (res) => {
            that.config?.dev &&
              that.context?.sendLog({
                work: that,
                content: that.context,
                desc: "[Work][Func:run]->下一个Work",
                value: res?.valueOf(),
              });
            that.nextWork?.next(res);
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
    return new Observable<Boolean>((subscribe: Subscriber<Boolean>) => {
      this.stop();
      this.runSubscriptions.forEach((value) => {
        value.sub.unsubscribe();
      });
      subscribe.next(true);
      subscribe.complete();
      return {
        unsubscribe: () => subscribe.unsubscribe(),
      };
    });
  }

  stop(): void {
    this.inputSubscription.unsubscribe();
  }

  /**
   * 运行
   * @param value
   */
  startRun(value: BaseType) {
    this.inputSubject.next(value);
  }

  complete() {
    super.complete();
    this.inputSubject.complete();
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
  handleMessageNext(value: BaseType) {
    this.next(value);
    this.stop();
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
  handleMessageNext(value: BaseType) {
    this.next(value);
    this.stop();
  }
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

  handleMessageNext(value: BaseType) {
    this.next(value);
  }
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
