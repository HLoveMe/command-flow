import { Subject } from 'rxjs';

declare module 'command-flow' {
  export namespace Value {
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
      extends ValueAble<Number>,
        ObjectAble<Number> {
      valueOf(): Number;
    }

    export declare interface StringAble
      extends ValueAble<String>,
        ObjectAble<String> {
      valueOf(): String;
    }

    export declare interface BooleanAble
      extends ValueAble<Boolean>,
        ObjectAble<Boolean> {
      valueOf(): Boolean;
    }

    export declare interface DateAble
      extends ValueAble<Date>,
        ObjectAble<Date> {
      timestamp(): number;
    }

    export declare interface DataAble
      extends ValueAble<ArrayBuffer>,
        ObjectAble<ArrayBuffer> {
      data(): ArrayBuffer;
    }
  }

  export type BaseType =
    | Value.ObjectAble<any> // ObjectTarget
    | Value.ArrayAble<any> // ArrayTarget
    | Value.MapAble<any, any> // MapTarget
    | Value.SetAble<any> // SetTarget
    | Value.StringAble // StringTarget
    | Value.NumberAble // NumberTarget
    | Value.BooleanAble // BooleanTarget
    | Value.DateAble //  DateTarget
    | Value.DataAble // DataTarget
    | undefined
    | null;

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

    export type WorkFunction = (input: BaseType) => Observable<BaseType>;

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
      run?(input: BaseType, option?: any): Observable<BaseType>;
      web_run?(input: BaseType, option?: any): Observable<BaseType>;
      node_run?(input: BaseType, option?: any): Observable<BaseType>;
      electron_run?(input: BaseType, option?: any): Observable<BaseType>;
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
      completeOneLoop(
        input: BaseType,
        toValue: BaseType,
        success: Boolean
      ): void;
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
    dispatch(input?: BaseType): void;
    //
    addVariable(from: WorkType.Work, name: string, value: BaseType): void;
    sendLog(status: WorkType.WorkStatus<BaseType>): void;
    clear(): void;
    stopWorkChain(): Promise<boolean>;
  }

  export namespace ControlFlow {
    // 比较属性 compare
    export enum CompareEnum {
      More = 'more', //>
      Equal = 'equal', //==
      Less = 'less', //<
      MoreEqual = 'moreEqual', //>=
      LessEqual = 'lessEqual', //<=
    }
    // 计算属性
    export enum CalcEnum {
      Plus = 'plus', //+
      Reduce = 'reduce', // -
      Multi = 'multi', // *
      Divide = 'divide', // /
    }
    //集合属性
    export enum CollectionEnum {
      Contain = 'contain', //是否包含
      Add = 'add', //增加
      ValueFor = 'valueFor', // 取值
      Keys = 'keys', // 所有keys
      Values = 'values', // 所有values
    }
    //Object.keys(Object.getOwnPropertyDescriptors(Array.prototype)).map($1=>`${$1}: ControlFlow.ArrayFunction`).join('\n')
    export enum ArrayEnum {
      Concat = 'concat',
      CopyWithin = 'copyWithin',
      Fill = 'fill',
      Find = 'find',
      FindIndex = 'findIndex',
      LastIndexOf = 'lastIndexOf',
      Pop = 'pop',
      Push = 'push',
      Reverse = 'reverse',
      Shift = 'shift',
      Unshift = 'unshift',
      Slice = 'slice',
      Sort = 'sort',
      Splice = 'splice',
      Includes = 'includes',
      IndexOf = 'indexOf',
      Join = 'join',
      Keys = 'keys',
      Entries = 'entries',
      Values = 'values',
      ForEach = 'forEach',
      Filter = 'filter',
      Map = 'map',
      Every = 'every',
      Some = 'some',
      Reduce = 'reduce',
      ReduceRight = 'reduceRight',
    }

    export enum SetEnum {
      Has = 'has',
      Add = 'add',
      Delete = 'delete',
      Clear = 'clear',
      Entries = 'entries',
      ForEach = 'forEach',
      Values = 'values',
      Keys = 'keys',
    }

    export enum MapEnum {
      Get = 'get',
      Set = 'set',
      Has = 'has',
      Delete = 'delete',
      Clear = 'clear',
      Entries = 'entries',
      ForEach = 'forEach',
      Keys = 'keys',
      Values = 'values',
    }

    // 比较 接口
    export declare type CompareExec = (
      type: CompareEnum,
      target: Value.ValueAble<any>
    ) => Value.BooleanAble;

    export declare type CompareFunction = (
      target: Value.ValueAble<any>
    ) => Value.BooleanAble;

    declare type CompareAble = {
      [T in CompareEnum]: CompareFunction;
    };
    export interface Compare<U extends Value.ValueAble<any>>
      extends CompareAble {
      compare<T extends CompareEnum>(type: T, target: U): Value.BooleanAble;
    }

    // 计算接口
    export declare type CalcFunction = (
      target: Value.NumberAble
    ) => Value.NumberAble;

    declare type CalcAble = {
      [T in CalcEnum]: CalcFunction;
    };
    export interface Calc<U extends Value.NumberAble> extends CalcAble {
      calc(target: U): U;
    }

    // Array
    export declare type CollectionArrayExec = (
      key: ArrayEnum,
      ...args: any[]
    ) => BaseType;
    export declare type ArrayFunction = (...args) => BaseType;
    declare type ArrayAbsoluteAble = {
      [T in ArrayEnum]: ArrayFunction;
    };
    export interface CollectionArray extends ArrayAbsoluteAble {
      collectionArray(key: ArrayEnum, ...args: any[]): BaseType;
    }

    // Set
    export declare type CollectionSetExec = (
      key: SetEnum,
      ...args: any[]
    ) => BaseType;
    export declare type SetFunction = ArrayFunction;
    declare type SetAbsoluteAble = {
      [T in SetEnum]: SetFunction;
    };
    export interface CollectionSet extends SetAbsoluteAble {
      collectionSet(key: SetEnum, ...args: any[]): BaseType;
    }

    // Map
    export declare type CollectionMapExec = (
      key: MapEnum,
      ...args: any[]
    ) => BaseType;
    export declare type MapFunction = ArrayFunction;
    export declare type MapAbsoluteAble = {
      [T in MapEnum]: MapFunction;
    };
    export interface CollectionMap extends MapAbsoluteAble {
      collectionMap(key: MapEnum, ...args: any[]): BaseType;
    }
  }
  export class Context implements ContextImpl {}
  export class Instruction
    extends Subject<ChannelObject>
    implements WorkType.Work, EnvironmentAble {}
  export class InstructionMTM extends Instruction {}
  export class InstructionOTM extends Instruction {}
  export class InstructionOTO extends Instruction {}
  export class TimeoutWork extends InstructionOTO {
    constructor(interval: number);
  }
  export class IntervalWork extends InstructionOTM {
    constructor(interval: number, max: number = Infinity, notifier?: Observable<any>);
  }
  export class DelayIntervalWork extends InstructionOTM {
    constructor(delay: number = 0, interval: number = 1000, max: number = Infinity, notifier?: Observable<any>)
  }
  export class Base64EnCodeWork extends InstructionMTM {}
  export class Base64DecodeWork extends InstructionMTM {}
  export class LoadFileWork extends InstructionOTO {
    constructor(config?: FileOption);
  }
  export class OpenURLWork extends InstructionOTO {}
  export class QRCodeWork extends InstructionOTO {}
  export class RunCommandWork extends InstructionOTO {
    constructor(template: string);
  }
  export class FetchWork extends InstructionOTO {}

  export class ObjectTarget<T> implements Value.ObjectAble<T> {}
  export class ArrayObject<T>
    extends ObjectTarget<Array<T>>
    implements Value.ArrayAble<T>, ControlFlow.CollectionArray {}

  export class MapObject<T, U>
    extends ObjectTarget<Map<T, U>>
    implements
      Value.MapAble<T, U>,
      ControlFlow.CollectionMap,
      ControlFlow.MapAbsoluteAble {}
  export class SetObject<T>
    extends ObjectTarget<Set<T>>
    implements Value.SetAble<T>, ControlFlow.CollectionSet {}

  export class NumberObject
    extends ObjectTarget<number>
    implements
      Value.NumberAble,
      ControlFlow.Compare<Value.NumberAble>,
      ControlFlow.Calc<Value.NumberAble> {}
  export class StringObject
    extends ObjectTarget<string>
    implements Value.StringAble {}
  export class BooleanObject
    extends ObjectTarget<Boolean>
    implements Value.BooleanAble {}

  export class DateObject
    extends ObjectTarget<Date>
    implements Value.DateAble {}

  export class DataObject
    extends ObjectTarget<ArrayBuffer>
    implements Value.DataAble {}

  export const unpackValue = (value: ChannelObject) => string;

  export function wrapperValue<T extends BaseType = BaseType>(
    input: ChannelObject,
    value: T | any
  ): ChannelObject<T>;

  export const isAbleType = (value: any) => boolean;

  export const decide = (value: any | BaseType, force: boolean = false) =>
    BaseType;
}
