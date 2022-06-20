import { PartialObserver, Observable, Subject, Subscription } from 'rxjs';

import { ContextRunOption } from './Configs';
import { PlatformBridgeAble } from './Bridge/ConfigTypes';

export namespace Value {
  export type NULL = null | undefined;
  export declare interface ValueAble<V> {
    _value: V;
    valueOf(): V;
  }
  export declare interface ObjectAble<V> extends ValueAble<V> {
    json(): Value.StringAble;
    merge(target: ObjectAble<V>): ObjectAble<V>;
  }
  export declare interface ArrayAble<T>
    extends ValueAble<Array<T>>,
      ObjectAble<Array<T>> {
    len(): number;
    first(): T;
    last(): T;
    valueOfIndex(index: number): T;
    valueOf(): Array<T>;
  }

  export declare interface MapAble<T, U>
    extends ValueAble<Map<T, U>>,
      ObjectAble<Map<T, U>> {
    len(): number;
    valueOf(): Map<T, U>;
  }

  export declare interface SetAble<T>
    extends ValueAble<Set<T>>,
      ObjectAble<Set<T>> {
    len(): number;
    valueOf(): Set<T>;
  }

  export declare interface NumberAble
    extends ValueAble<number>,
      ObjectAble<number> {
    valueOf(): number;
  }

  export declare interface StringAble
    extends ValueAble<string>,
      ObjectAble<string> {
    valueOf(): string;
  }

  export declare interface BooleanAble
    extends ValueAble<boolean>,
      ObjectAble<boolean> {
    valueOf(): boolean;
  }

  export declare interface DateAble extends ValueAble<Date>, ObjectAble<Date> {
    timestamp(): number;
  }

  export declare interface DataAble
    extends ValueAble<ArrayBuffer>,
      ObjectAble<ArrayBuffer> {
    data(): ArrayBuffer;
  }

  export declare interface NullAble extends ValueAble<NULL>, ObjectAble<NULL> {
    valueOf(): null | undefined;
    isTruly(): boolean;
    isNull(): boolean;
    isUndefined(): boolean;
  }
  export interface Mixins<
    V extends Value.ObjectAble<any> = Value.ObjectAble<any>,
    U extends any = NULL
  > extends ValueAble<V | U> {}
}

export type BaseType =
  | Value.ObjectAble<any> // ObjectTarget
  | Value.ArrayAble<any> // ArrayTarget
  | Value.MapAble<string | symbol, any> // MapTarget
  | Value.SetAble<any> // SetTarget
  | Value.StringAble // StringTarget
  | Value.NumberAble // NumberTarget
  | Value.BooleanAble // BooleanTarget
  | Value.DateAble //  DateTarget
  | Value.DataAble // DataTarget
  | Value.NullAble // NullTarget
  | Value.Mixins<Value.ObjectAble<any>>; // MixinsTarget

export type ChannelValue<T extends BaseType = BaseType> = {
  value: T;
  id: string;
  option?: any;
};
export type ChannelObject<T extends BaseType = BaseType> = Value.ObjectAble<
  ChannelValue<T>
>;

export namespace WorkType {
  export declare type ConfigInfo = { [key: string]: any };

  export type WorkUUID = string;

  export type WorkConstantKey = string;

  export type WorkConstant = Map<WorkConstantKey, BaseType>;

  export type WorkFunction = (
    input: ChannelObject
  ) => Observable<ChannelObject>;

  export enum WorkRunStatus {
    INIT, //初始状态
    // FROZEN,//冻结状态
    READY, //准备状态 已经初始化
    // PRE_RUN,//预运行状态 已经初始化
    RUNNING, //运行中
    COMPLETE, //完成
  }
  export interface WorkStatus<T extends BaseType = BaseType> {
    content?: ContextImpl;
    work?: Work[];
    desc?: any;
    value?: T | ChannelValue<T>;
    date?: Date;
    error?: Error;
  }

  type WorkTypes = 'electron_run' | 'web_run' | 'node_run';

  export type WorkOperation = {
    [P in WorkTypes]?: WorkFunction;
  };
  export interface WorkContext {
    beforeWork?: Work;
    nextWork?: Work;
    context?: ContextImpl;
  }
  export interface WorkChain extends Subject<BaseType> {
    runSubscriptions: Map<string, WorkUnitImpl>;
    pools: Subscription[];
  }
  // 入口
  export interface WorkEntrance {
    // 仅仅头部work 有效
    startRun(value: BaseType, runId?: string): void;
  }
  export interface WorkConfig {
    //根据该属性 控制Work 工作流程
    config: ConfigInfo;
  }
  export interface WorkUnitImpl {
    context?: ContextImpl;
    work?: WorkType.Work;
    uuid: string;
    sub: Subscription;
  }
  export declare interface Work
    extends WorkOperation,
      WorkContext,
      WorkChain,
      WorkConfig {
    name: string;
    id: number;
    uuid: WorkUUID;
    // run: WorkFunction;
    run?(input: ChannelObject, option?: any): Observable<ChannelObject>;
    web_run?(input: ChannelObject, option?: any): Observable<ChannelObject>;
    node_run?(input: ChannelObject, option?: any): Observable<ChannelObject>;
    electron_run?(
      input: ChannelObject,
      option?: any
    ): Observable<ChannelObject>;
    prepare(before?: Work, next?: Work): Promise<void>;
    // 关闭Work
    stopWork(): Observable<Boolean>;
    clear(): void;
    addVariable(name: string, value: BaseType): void;
    error(err: Error): void;
    logMsg(msg: string, inputValue: ChannelObject): void;
    // 节点
    // 收到一个消息
    nextValue(input: BaseType): BaseType;
    //完成一次 [输入->输出]
    completeOneLoop(input: BaseType, toValue: BaseType, success: Boolean): void;
  }
}

export declare interface ContextImpl {
  status: WorkType.WorkRunStatus;
  platform: PlatformBridgeAble;
  runOptions: ContextRunOption;
  runConstant: Map<WorkType.WorkUUID, WorkType.WorkConstant>;
  works: WorkType.Work[];
  msgChannel: Subject<WorkType.WorkStatus<any>>;
  pools: Subscription[];
  addWork(work: WorkType.Work): void;
  addWorks(...works: WorkType.Work[]): void;
  addWorkLog(
    tap: PartialObserver<WorkType.WorkStatus<ChannelObject>>
  ): Subscription;
  // 准备
  prepareWorks(): Promise<void>;
  // 开始运行
  dispatch(input?: any | BaseType): void;
  //
  addVariable(from: WorkType.Work, name: string, value: BaseType): void;
  sendLog(status: WorkType.WorkStatus<BaseType>): void;
  clear(): void;
  stopWorkChain(): Promise<boolean>;
}
