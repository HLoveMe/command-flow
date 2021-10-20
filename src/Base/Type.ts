import { Readable } from "stream";
import { AsyncSubject, Observable, Subject, Subscription } from "rxjs";
import {
  ArrayAble,
  MapAble,
  SetAble,
  StringAble,
  NumberAble,
  ValueAble,
  BooleanAble,
  DateAble,
} from "./Object/ObjectTypes";
import { ContextRunOption } from "./Configs";

// ArrayAble<any> | MapAble<any, any> | SetAble<any>;
// export type BaseType = null | number | string | Object ;
export type BaseType =
  | ArrayAble<any>
  | MapAble<any, any>
  | SetAble<any>
  | StringAble
  | NumberAble
  | BooleanAble
  | DateAble
  | undefined
  | null;

// export type AbleType = BaseType | Readable

export type InOutData = Observable<BaseType>;

export declare interface InOutputAble {
  value(): InOutData;
}
export type InOutputAbleOrNil = InOutputAble | null | undefined;

export namespace WorkType {
  export declare type ConfigInfo = { [key: string]: any };

  export type WorkUUID = string;

  export type WorkConstantKey = string;

  export type WorkConstant = Map<WorkConstantKey, BaseType>;

  export type WorkFunction = (
    input: BaseType
  ) => Observable<BaseType>;

  type WorkTypes = "rn_run" | "web_run" | "node_run";

  export type WorkOperation = {
    [P in WorkTypes]?: WorkFunction;
  };
  export interface WorkContext {
    beforeWork?: Work;
    nextWork?: Work;
    context?: ContextImpl;
  }
  export interface WorkChain extends Subject<BaseType> {
    inputSubject: Subject<BaseType>
    inputSubscription: Subscription;
    pools: Subscription[];
  }
  // 入口
  export interface WorkEntrance {
    // 仅仅头部work 有效
    startRun(value: BaseType): void;
  }
  export interface WorkConfig {
    //根据该属性 控制Work 工作流程
    config: ConfigInfo;
  }
  export declare interface Work
    extends WorkOperation,
    WorkContext,
    WorkChain,
    WorkConfig, WorkEntrance {
    name: string;
    id: number;
    uuid: WorkUUID;
    handleMessageNext: (value: BaseType) => void;
    // run: WorkFunction;
    run?(
      input: BaseType
    ): Observable<BaseType>
    rn_run?(
      input: BaseType
    ): Observable<BaseType>
    web_run?(
      input: BaseType
    ): Observable<BaseType>
    node_run?(
      input: BaseType
    ): Observable<BaseType>
    prepare(
      before?: Work,
      next?: Work
    ): void;
    stop(): void;
    clear(): void;
    addVariable(name: string, value: BaseType): void;
    error(err: Error): void;
  }
}

export declare interface ContextImpl {
  runOptions: ContextRunOption;
  runConstant: Map<WorkType.WorkUUID, WorkType.WorkConstant>;
  works: WorkType.Work[];
  msgChannel: Subject<BaseType>;
  pools: Subscription[];
  addWork(work: WorkType.Work): void;
  addWorks(...works: WorkType.Work[]): void;
  run(input: BaseType, initOption?: any):void;
  addVariable(from: WorkType.Work, name: string, value: BaseType): void;
  sendLog(work: WorkType.Work, info: any): void;
  clear(): void;
}

export namespace ControlFlow {
  export enum ControlEnum {
    "more" = "more",
    "equal" = "equal",
    "less" = "less",
    "more_equal" = "more_equal",
    "less_equal" = "less_equal",
    "contain" = "contain",
  }
  export declare type CompareExec = <T extends ControlEnum>(
    type: T,
    target: ValueAble
  ) => boolean;

  export declare type CompareFunction = (target: ValueAble) => Boolean;

  declare type CompareAble = {
    [T in ControlEnum]?: CompareFunction;
  };
  export interface Compare extends CompareAble {
    compare?<T extends ControlEnum>(type: T, target: ValueAble): boolean;
  }
}
