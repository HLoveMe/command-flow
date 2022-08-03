import { PartialObserver, Observable, Subject, Subscription } from 'rxjs';
import { Value } from './Object';
import { ContextRunOption } from './Configs/types';
import { PlatformBridgeAble } from './Bridge/ConfigTypes';
import { LogBase, LogInitParams } from './Log/types';
import { RUNSetting } from './FlowOption/types';

export type BaseType<T extends any = any, U extends any = any> =
  | Value.ObjectAble<T> // ObjectTarget
  | Value.ArrayAble<T> // ArrayTarget
  | Value.MapAble<string | symbol | number, U> // MapTarget
  | Value.SetAble<T> // SetTarget
  | Value.StringAble // StringTarget
  | Value.NumberAble // NumberTarget
  | Value.BooleanAble // BooleanTarget
  | Value.DateAble //  DateTarget
  | Value.DataAble // DataTarget
  | Value.NUllAble // NullTarget
  | Value.Mixins<Value.ObjectAble<T>>; // MixinsTarget

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

  export declare type Variable = { workId: WorkUUID, id: UUID, name: string, value: BaseType }

  export declare type UUID = string;
  export type WorkUUID = string;
  export type WorkConstantKey = string;

  export type WorkConstant = Map<WorkConstantKey, WorkType.Variable>;

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
    work: Work[];
    desc?: any;
    value?: T | ChannelValue<T> | null;
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
    // 整个Work的配置
    runOption: ConfigInfo;
    //当前运行的配置
    // getCurrentConfig(): any;
    //配置导出
    runConfigExport(): any;
  }
  export interface WorkUnitImpl {
    context?: ContextImpl;
    work?: WorkType.Work;
    uuid: string;
    sub: Subscription;
  }

  export interface WorkLoop {
    /***
     * 完成准备工作，已经接收到上下Work链
     */
    didPrepare?(context: ContextImpl, work: Work): void;

    /**
     * 接收到上面一个传递过来的值
     * 可以修改信号值
     * @param context
     * @param signal 接受至上一个的信号
     * @return 将会替代 signal
     */
    onReceiveSignal?(
      context: ContextImpl,
      work: Work,
      signal: ChannelObject
    ): ChannelObject | null;

    /**
     * 执行完work一次逻辑，将信号执行下一个work。可能会被执行很多次
     * @param context
     * @param signal 原始信号
     * @reSignal onReceiveSignal处理完成后的信号
     * @param next 传递给下一个的信号
     * @return 将会替代 signal
     */
    onChainNext?(
      context: ContextImpl,
      work: Work,
      signal: ChannelObject,
      reSignal: ChannelObject,
      next: ChannelObject
    ): ChannelObject | null;

    /**
     * 一次信号输出，该work 执行完成
     * @param context
     * @param work
     * @signal 接受的原始信号
     * @reSignal onReceiveSignal处理完成后的信号
     */
    onChainComplete?(
      context: ContextImpl,
      work: Work,
      signal: ChannelObject,
      reSignal: ChannelObject,
    ): void;

    /***
     * 被强制中断
     */
    onForceFinish?(context: ContextImpl, work: Work): void;
  }

  export declare interface Work
    extends WorkOperation,
    WorkContext,
    WorkChain,
    WorkConfig,
    WorkLoop {
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
    addVariable(name: string, value: BaseType): Variable;
    logMsg(msg: string, inputValue?: ChannelObject, error?: Error | null): void;
  }
}

export declare interface ContextImpl {
  status: WorkType.WorkRunStatus;
  platform: PlatformBridgeAble;
  runOptions: ContextRunOption;
  runConstant: Map<WorkType.WorkUUID, WorkType.WorkConstant>;
  works: WorkType.Work[];
  msgChannel: Subject<WorkType.WorkStatus<any>>;
  log: LogBase;
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

  addVariable(from: WorkType.Work, name: string, value: BaseType): WorkType.Variable;
  sendLog(status: WorkType.WorkStatus<BaseType>): void;
  clear(): void;
  stopWorkChain(): Promise<boolean>;

  /**
   * 部分可用  对于配置参数有函数的work 无法序列化
   */
  showRunSetting(): RUNSetting;
}
