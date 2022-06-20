import { Observable, PartialObserver, Subject, Subscription } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
type TypeNumber =
  | 0 // Automatic type number
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
  | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
  | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
  ;
type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
declare module 'command-flow' {
  export namespace Value {
    export type NULL = null | undefined;
    export interface ValueAble<V> {
      _value: V;
      valueOf(): V;
    }
    export interface ObjectAble<V> extends ValueAble<V> {
      json(): Value.StringAble;
      merge(target: ObjectAble<V>): ObjectAble<V>;
    }
    export interface ArrayAble<T>
      extends ValueAble<Array<T>>,
      ObjectAble<Array<T>> {
      len(): number;
      first(): T;
      last(): T;
      valueOfIndex(index: number): T;
      valueOf(): Array<T>;
    }

    export interface MapAble<T, U>
      extends ValueAble<Map<T, U>>,
      ObjectAble<Map<T, U>> {
      len(): number;
      valueOf(): Map<T, U>;
    }

    export interface SetAble<T> extends ValueAble<Set<T>>, ObjectAble<Set<T>> {
      len(): number;
      valueOf(): Set<T>;
    }

    export interface NumberAble extends ValueAble<Number>, ObjectAble<Number> {
      valueOf(): Number;
    }

    export interface StringAble extends ValueAble<String>, ObjectAble<String> {
      valueOf(): String;
    }

    export interface BooleanAble
      extends ValueAble<Boolean>,
      ObjectAble<Boolean> {
      valueOf(): Boolean;
    }

    export interface DateAble extends ValueAble<Date>, ObjectAble<Date> {
      timestamp(): number;
    }

    export interface DataAble
      extends ValueAble<ArrayBuffer>,
      ObjectAble<ArrayBuffer> {
      data(): ArrayBuffer;
    }

    export interface NullAble
      extends ValueAble<NULL>,
      ObjectAble<NULL> {
      valueOf(): null | undefined;
      isTruly(): boolean;
      isNull(): boolean;
      isUndefined(): boolean;
    }
    export interface Mixins<
      V extends Value.ObjectAble<any> = Value.ObjectAble<any>,
      U extends any = NULL
      > extends ValueAble<V | U> { }
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
    export type ConfigInfo = { [key: string]: any };

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
    export interface Work
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
      completeOneLoop(
        input: BaseType,
        toValue: BaseType,
        success: Boolean
      ): void;
    }
  }
  export namespace Bridge {
    export interface RunTimeInfo {
      name: string;
      platform: any;
    }

    export type PathLike = string | URL;
    export interface CommandStatus {
      command: string;
      status: boolean;
      error?: Error;
      result?: string;
    }

    export interface QRcodeOption {
      type: TypeNumber;
      Level: ErrorCorrectionLevel;
      SideLength: number;
    }

    export enum FileType {
      Audio = 'audio/*',
      Video = 'video/*',
      HTML = 'text/html',
      Txt = 'text/plain',
      Image = 'image/*',
      Csv = '.csv',
      Pdf = 'application/pdf',
      Word = 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword，application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      All = '*',
    }
    export interface FileOption {
      type: FileType;
    }
    export interface FileLoadEvent {
      total: number;
      loaded: number;
      data: ArrayBuffer;
      finish: boolean;
      file?: File;
    }

    export interface RequestTimeOut {
      timeout: number;
    }
    export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'OPTIONS' | 'DELETE';
    export interface RequestParamsInit {
      headers?: { [key: string]: any };
      method?: RequestMethod;
      timeout?: number;
      data?: any;
      url: string;
    }
    export type RequestParams = AxiosRequestConfig;
    export enum SupportContentType {
      JSON = 'application/json',
      TEXT = 'text/plain',
    }
    export interface ResponseContent {
      error?: Error;
      data?: any;
      response: AxiosResponse;
    }

    /**
     * 硬件驱动部分
     */
    export namespace Hardware {
      // 拍照
      // 视频
      // 相片
      // 地理位置
      // 录音
      // 文件
      // 震动 =>手机
      // 传感器
      // 调节/获取音量 =>手机
      // 调节/获取亮度 =>手机
      // 系统信息
      // 蓝牙状态/开关/发送数据/监听/关闭
      // 语音播放文字
      export type DataString = string;
      export interface ImageResponse {
        image: DataString;
        error?: Error;
      }
      export interface TakePhotoOption { }

      export interface VideoOption { }
      export interface VideoResponse {
        videoUrl?: string;
        error?: Error;
      }
      export interface PositionResponse {
        longitude?: number;
        latitude?: number;
        accuracy?: number;
      }
      export interface PositionOption { }
      export interface AudioResponse { }

      export interface VibratorOption { }
      export interface BluetoothDevice { }
      export interface SpeechOption { }
      export interface SpeechResponse { }

      export interface Permission {
        // 权限处理
      }
      export interface PlatformDrive extends Permission {
        // 拍照
        takePhoto(option: TakePhotoOption): Promise<ImageResponse>;
        // 视频
        recordVideo(option: VideoOption): Promise<VideoResponse>;

        // 相片
        getPhotos(): Promise<Array<ImageResponse>>;

        // 地理位置
        getCurrentPosition(): Promise<PositionResponse>;
        watchPosition(option: PositionOption): Observable<PositionResponse>;
        closePosition(): Promise<boolean>;

        // 录音
        recordAudio(): Promise<AudioResponse>;
        stopAudio(): Promise<Boolean>;

        // 文件
        getFile(option: any): Promise<any>;

        // start 震动
        startVibrator(option: VibratorOption): Promise<Boolean>;
        stopVibrator(): Promise<Boolean>;

        //传感器 距离传感器 加速度传感器 陀螺仪 磁力计

        // 系统信息
        getSystemInfo(): Promise<RunTimeInfo>;

        //音量
        getVolume(): Promise<number>;
        setVolume(volume: number): Promise<Boolean>;

        //亮度
        getBrightness(): Promise<number>;
        setBrightness(brightness: number): Promise<Boolean>;

        //蓝牙
        scanBluetooth(): Promise<Array<BluetoothDevice>>;
        connectBluetooth(device: BluetoothDevice): Promise<Boolean>;
        bluetoothSendData(data: String): Promise<Boolean>;
        bluetoothReceiveData(device: BluetoothDevice): Observable<String>;
        bluetoothClose(device: BluetoothDevice): Promise<Boolean>;

        //语音
        speechInit(option: SpeechOption): Promise<Boolean>;
        speak(text: string): Promise<SpeechResponse>;
        stopSpeak(): Promise<SpeechResponse>;
        clearSpeech(): Promise<Boolean>;
      }
    }

    export interface PlatformBridgeAble extends Hardware.PlatformDrive {
      // // 硬件相关
      // hardwareSource?: Hardware.PlatformDrive;

      //计算机运行相关硬件
      loadRunInfo(): Observable<RunTimeInfo>;
      //命令行工具
      /***
       * 运行一个脚本 path
       * 运行 javascript
       */
      runCommand(command: string, option?: any): Observable<CommandStatus>;

      //计算机操作
      open(url: String, option?: any): Observable<BooleanObject>;

      //文件相关
      loadFile(
        url: PathLike,
        option?: FileOption
      ): Observable<Value.ObjectAble<FileLoadEvent>>;

      // 工具
      createQrCode(
        context: String,
        option?: QRcodeOption
      ): Observable<StringObject>;

      // 网络
      // 仅仅支持json/txt
      fetch(
        req: AxiosRequestConfig
      ): Observable<Value.ObjectAble<ResponseContent>>;
    }
  }
  export namespace Environment {
    export interface EnvironmentAble {
      isAble(): Boolean;
    }
  }

  export namespace Config {
    type WorkName = string;
    // Work 运行过程中可以配置的选项
    export type RunCommandWorkConfig = { [key: WorkName]: any };
    export interface WorkRunOption {
      RunCommandWork: RunCommandWorkConfig;
      QRCodeWork: Bridge.QRcodeOption;
      LoadFileWork: Bridge.FileOption;
      FetchWork: Bridge.RequestParamsInit;
    }
    export interface Environment { }
    export interface ContextRunOption {
      development: boolean;
      environment?: Environment;
      workConfig?: WorkRunOption;
    }
  }

  export interface ContextImpl {
    status: WorkType.WorkRunStatus;
    platform: Bridge.PlatformBridgeAble;
    runOptions: Config.ContextRunOption;
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
    export type CompareExec = (
      type: CompareEnum,
      target: Value.ValueAble<any>
    ) => Value.BooleanAble;

    export type CompareFunction = (
      target: Value.ValueAble<any>
    ) => Value.BooleanAble;

    type CompareAble = {
      [T in CompareEnum]: CompareFunction;
    };
    export interface Compare<U extends Value.ValueAble<any>>
      extends CompareAble {
      compare<T extends CompareEnum>(type: T, target: U): Value.BooleanAble;
    }

    // 计算接口
    export type CalcFunction = (target: Value.NumberAble) => Value.NumberAble;

    type CalcAble = {
      [T in CalcEnum]: CalcFunction;
    };
    export interface Calc<U extends Value.NumberAble> extends CalcAble {
      calc(type: ControlFlow.CalcEnum, target: U): U;
    }

    // Array
    export type CollectionArrayExec = (
      key: ArrayEnum,
      ...args: any[]
    ) => BaseType;
    export type ArrayFunction = (...args) => BaseType | void;
    type ArrayAbsoluteAble = {
      [T in ArrayEnum]: ArrayFunction;
    };
    export interface CollectionArray extends ArrayAbsoluteAble {
      collectionArray(key: ArrayEnum, ...args: any[]): BaseType | void;
    }

    // Set
    export type CollectionSetExec = (key: SetEnum, ...args: any[]) => BaseType;
    export type SetFunction = ArrayFunction;
    type SetAbsoluteAble = {
      [T in SetEnum]: SetFunction;
    };
    export interface CollectionSet extends SetAbsoluteAble {
      collectionSet(key: SetEnum, ...args: any[]): BaseType;
    }

    // Map
    export type CollectionMapExec = (
      key: MapEnum,
      ...args: any[]
    ) => BaseType | void;
    export type MapFunction<U> = (
      ...args: any[]
    ) => CollectionMap<any, U> | U | Value.NULL | any;
    export type MapAbsoluteAble<U> = {
      [T in MapEnum]: MapFunction<U>;
    };
    export interface CollectionMap<T, U> extends MapAbsoluteAble<U> {
      collectionMap(key: MapEnum, ...args: any[]): U | Value.NULL;
    }
  }
  export class Context implements ContextImpl {
    status: WorkType.WorkRunStatus;
    platform: Bridge.PlatformBridgeAble;
    runOptions: Config.ContextRunOption;
    runConstant: Map<string, WorkType.WorkConstant>;
    works: WorkType.Work[];
    msgChannel: Subject<WorkType.WorkStatus<any>>;
    pools: Subscription[];
    addWork(work: WorkType.Work): void;
    addWorks(...works: WorkType.Work[]): void;
    addWorkLog(
      tap: PartialObserver<WorkType.WorkStatus<ChannelObject<BaseType>>>
    ): Subscription;
    prepareWorks(): Promise<void>;
    dispatch(input?: any | BaseType): void;
    addVariable(from: WorkType.Work, name: string, value: BaseType): void;
    sendLog(status: WorkType.WorkStatus<BaseType>): void;
    clear(): void;
    stopWorkChain(): Promise<boolean>;
  }
  export class Instruction
    extends Subject<ChannelObject>
    implements WorkType.Work, Environment.EnvironmentAble {
    observers: any[];
    isAble(): Boolean;
    name: string;
    id: number;
    uuid: string;
    prepare(
      before?: WorkType.Work | undefined,
      next?: WorkType.Work | undefined
    ): Promise<void>;
    stopWork(): Observable<Boolean>;
    clear(): void;
    addVariable(name: string, value: BaseType): void;
    logMsg(msg: string, inputValue: ChannelObject<BaseType>): void;
    nextValue(input: BaseType): BaseType;
    completeOneLoop(input: BaseType, toValue: BaseType, success: Boolean): void;
    beforeWork?: WorkType.Work | undefined;
    nextWork?: WorkType.Work | undefined;
    context?: ContextImpl | undefined;
    runSubscriptions: Map<string, WorkType.WorkUnitImpl>;
    pools: Subscription[];
    config: WorkType.ConfigInfo;
  }
  export class InstructionMTM extends Instruction { }
  export class InstructionOTM extends Instruction { }
  export class InstructionOTO extends Instruction { }
  export class TimeoutWork extends InstructionOTO {
    constructor(interval?: number);
  }
  export class IntervalWork extends InstructionOTM {
    constructor(interval?: number, max?: number, notifier?: Observable<any>);
  }
  export class DelayIntervalWork extends InstructionOTM {
    constructor(
      delay?: number,
      interval?: number,
      max?: number,
      notifier?: Observable<any>
    );
  }
  export class Base64EnCodeWork extends InstructionMTM { }
  export class Base64DecodeWork extends InstructionMTM { }
  export class LoadFileWork extends InstructionOTO {
    constructor(config?: Bridge.FileOption);
  }
  export class OpenURLWork extends InstructionOTO { }
  export class QRCodeWork extends InstructionOTO { }
  export class RunCommandWork extends InstructionOTO {
    constructor(template?: string);
  }
  export class FetchWork extends InstructionOTO { }

  export class ObjectTarget<T> implements Value.ObjectAble<T> {
    json(): Value.StringAble;
    merge(target: Value.ObjectAble<T>): Value.ObjectAble<T>;
    _value: T;
    valueOf(): T;
  }

  export class ArrayObject<T>
    extends ObjectTarget<Array<T>>
    implements Value.ArrayAble<T>, ControlFlow.CollectionArray {

    constructor(...args: any[]);
    constructor(count: number);
    constructor(value: T);
    len(): number;
    first(): T;
    last(): T;
    valueOfIndex(index: number): T;
    valueOf(): T[];
    _value: T[];
    json(): Value.StringAble;
    merge(target: Value.ObjectAble<T[]>): Value.ObjectAble<T[]>;
    collectionArray(key: ControlFlow.ArrayEnum, ...args: any[]): BaseType | void;
    // array function

    concat(...items: (T | ArrayObject<T>)[]): ArrayObject<T>;

    copyWithin(target: number, start: number, end?: number): ArrayObject<T>;

    fill<U extends T>(value: U, start?: number, end?: number): this;

    find(
      predicate: (value: T, index: number, obj: Uint8Array) => boolean,
      thisArg?: any
    ): Value.Mixins<Value.ObjectAble<T>>;

    findIndex(
      predicate: (value: T, index: number, obj: Uint8Array) => boolean,
      thisArg?: any
    ): NumberObject;

    lastIndexOf(searchElement: T, fromIndex?: number): NumberObject;

    pop(): ObjectTarget<T>;

    push(...items: T[]): NumberObject;

    reverse(): ArrayObject<T>;

    shift(): Value.Mixins;

    unshift(...items: T[]): NumberObject;

    slice(start?: number, end?: number): ArrayObject<T>;

    sort(compareFn?: (a: T, b: T) => number): this;
    sort(start?: number, end?: number): ArrayObject<T>;

    splice(start: number, deleteCount: number, ...items: any[]): ArrayObject<T>;
    splice(start: number, deleteCount?: number): ArrayObject<T>;

    includes(searchElement: T, fromIndex?: number): BooleanObject;

    indexOf(searchElement: T, fromIndex?: number): NumberObject;

    join(separator?: string): StringObject;

    entries(): Value.ObjectAble<IterableIterator<[T, T]>>;

    values(): Value.ObjectAble<IterableIterator<T>>;

    keys(): Value.ObjectAble<IterableIterator<number>>;

    forEach(
      callbackfn: (value: T, index: number, array: T[]) => void,
      thisArg?: any
    ): void;

    filter<S extends T>(
      predicate: (value: T, index: number, array: T[]) => value is S,
      thisArg?: any
    ): ArrayObject<S>;

    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): ArrayObject<T>;

    map<U>(
      callbackfn: (value: T, index: number, array: T[]) => U,
      thisArg?: any
    ): ArrayObject<U>;

    every(
      predicate: (value: T, index: number, array: T[]) => unknown,
      thisArg?: any
    ): BooleanObject;

    some(
      predicate: (value: T, index: number, array: T[]) => unknown,
      thisArg?: any
    ): BooleanObject;

    reduce(
      callbackfn: (
        previousValue: T,
        currentValue: T,
        currentIndex: number,
        array: T[]
      ) => T,
      initialValue?: T
    ): ArrayObject<T>;

    reduceRight(
      callbackfn: (
        previousValue: T,
        currentValue: T,
        currentIndex: number,
        array: T[]
      ) => T,
      initialValue?: T
    ): ArrayObject<T>;

    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): ArrayObject<U>;


    toLocaleString(): StringObject;

    get length(): NumberObject;
  }

  export class MapObject<T, U>
    extends ObjectTarget<Map<T, U>>
    implements
    Value.MapAble<T, U>,
    ControlFlow.CollectionMap<T, U> {
    constructor(arg?: Map<T, U>);
    len(): number;
    valueOf(): Map<T, U>;
    _value: Map<T, U>;
    json(): Value.StringAble;
    merge(target: Value.ObjectAble<Map<T, U>>): Value.ObjectAble<Map<T, U>>;
    collectionMap(key: ControlFlow.MapEnum, ...args: any[]): any;

    get(key: string): U | Value.NULL;

    set(key: string, value: BaseType): Value.NULL;

    has(key: string): BooleanObject;

    delete(key: string): BooleanObject;

    clear(): void;

    entries(): ObjectTarget<IterableIterator<[T, U]>>;

    forEach(callback: (value: U, key: T, map: Map<T, U>) => void, thisArg?: any): void;

    values(): ObjectTarget<IterableIterator<U>>;

    keys(): ObjectTarget<IterableIterator<T>>;

    get size(): Value.NumberAble;
  }
  export class SetObject<T>
    extends ObjectTarget<Set<T>>
    implements Value.SetAble<T>, ControlFlow.CollectionSet {
    constructor(value?: Set<T> | Array<T>);
    len(): number;
    valueOf(): Set<T>;
    _value: Set<T>;
    json(): Value.StringAble;
    merge(target: Value.ObjectAble<Set<T>>): ObjectTarget<Set<T>>;
    collectionSet(key: ControlFlow.SetEnum, ...args: any[]): any;

    has(value: T): BooleanObject;

    add(value: T): this;

    delete(value: T): BooleanObject;

    clear(): void;

    forEach(
      callbackfn: (value: T, value2: T, set: Set<T>) => void,
      thisArg?: any
    ): void;

    entries(): ObjectTarget<IterableIterator<[T, T]>>

    values(): ObjectTarget<IterableIterator<T>>

    keys(): ObjectTarget<IterableIterator<T>>

    get size(): NumberObject;
  }

  export class NumberObject
    extends ObjectTarget<number>
    implements
    Value.NumberAble,
    ControlFlow.Compare<Value.NumberAble>,
    ControlFlow.Calc<Value.NumberAble>
  {
    constructor(value: number);
    valueOf(): number;
    _value: number;
    json(): Value.StringAble;
    merge(target: Value.ObjectAble<number>): Value.ObjectAble<number>;

    compare(
      type: ControlFlow.CompareEnum,
      target: NumberObject
    ): Value.BooleanAble;
    more(target: Value.ValueAble<any>): Value.BooleanAble;
    equal(target: Value.ValueAble<any>): Value.BooleanAble;
    less(target: Value.ValueAble<any>): Value.BooleanAble;
    moreEqual(target: Value.ValueAble<any>): Value.BooleanAble;
    lessEqual(target: Value.ValueAble<any>): Value.BooleanAble;

    calc(type: ControlFlow.CalcEnum, target: Value.NumberAble): NumberObject;
    plus(target: Value.NumberAble): NumberObject;
    reduce(target: Value.NumberAble): NumberObject;
    multi(target: Value.NumberAble): NumberObject;
    divide(target: Value.NumberAble): NumberObject;
  }
  export class StringObject
    extends ObjectTarget<string>
    implements Value.StringAble {
    valueOf(): string;
    _value: string;
    json(): Value.StringAble;
    merge(target: Value.ObjectAble<string>): Value.ObjectAble<string>;
  }
  export class BooleanObject
    extends ObjectTarget<Boolean>
    implements Value.BooleanAble {
    valueOf(): Boolean;
    _value: Boolean;
    json(): Value.StringAble;
    merge(target: Value.ObjectAble<Boolean>): Value.ObjectAble<Boolean>;
  }

  export class DateObject extends ObjectTarget<Date> implements Value.DateAble {
    timestamp(): number;
    _value: Date;
    valueOf(): Date;
    json(): Value.StringAble;
    merge(target: Value.ObjectAble<Date>): Value.ObjectAble<Date>;
  }

  export class DataObject
    extends ObjectTarget<ArrayBuffer>
    implements Value.DataAble {
    data(): ArrayBuffer;
    _value: ArrayBuffer;
    valueOf(): ArrayBuffer;
    json(): Value.StringAble;
    merge(target: Value.ObjectAble<ArrayBuffer>): Value.ObjectAble<ArrayBuffer>;
  }

  export class OptionalObject
    extends ObjectTarget<Value.NULL>
    implements Value.NullAble {
    isTruly(): boolean;
    isNull(): boolean;
    isUndefined(): boolean;
  }

  export function unpackValue(value: ChannelObject): string;

  export function wrapperValue<T extends BaseType = BaseType>(
    input: ChannelObject,
    value: T | any
  ): ChannelObject<T>;

  export function isAbleType(value: any): boolean;

  export function decide(value: any | BaseType, force?: boolean): BaseType;
}
