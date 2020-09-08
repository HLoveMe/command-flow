import { Readable } from "stream";
import { Observable, Subject, Subscription } from "rxjs";
import { ArrayAble, MapAble, SetAble, StringAble, NumberAble, ValueAble } from "./Object/ObjectTypes";

// ArrayAble<any> | MapAble<any, any> | SetAble<any>;
// export type BaseType = null | number | string | Object ;
export type BaseType = ArrayAble<any> | MapAble<any, any> | SetAble<any> | StringAble | NumberAble;

// export type AbleType = BaseType | Readable 

export type InOutData = Observable<BaseType>;

export declare interface InOutputAble {
  value(): InOutData;
}
export type InOutputAbleOrNil = InOutputAble | null | undefined;



export namespace WorkType {
  export declare type ConfigInfo = { [key: string]: any }

  export type WorkUUID = string;

  export type WorkConstantKey = string;

  export type WorkConstant = Map<WorkConstantKey, BaseType>

  type WorkFunction = (input: InOutputAbleOrNil) => void;

  type WorkTypes = "rn_run" | "web_run" | "node_run";

  export type WorkOperation = {
    [P in WorkTypes]?: WorkFunction
  }
  export interface WorkContext {
    before?: Work;
    next?: Work;
    context?: ContextImpl;
  }
  export interface WorkChain {
    input: Subject<InOutputAbleOrNil>;
    output: Subject<InOutputAbleOrNil>;
    pools: Subscription[];
  }
  export interface WorkStep {
    //根据该属性 控制Work 工作流程
    config: ConfigInfo
  }
  export declare interface Work extends WorkOperation, WorkContext, WorkChain, WorkStep {
    name: string;
    id: number;
    uuid: WorkUUID;
    option?: any;
    run: WorkFunction;
    // rn_run?: WorkFunction
    // web_run?: WorkFunction
    // node_run?: WorkFunction
    prepare(input: InOutputAbleOrNil | Observable<InOutputAbleOrNil>, before: Work, next: Work): void;
    stop(): void;
    clear(): void;
    addVariable(name: string, value: BaseType): void;
    error(err: Error): void;
  }
}



export declare interface ContextImpl {
  runConstant: Map<WorkType.WorkUUID, WorkType.WorkConstant>;
  works: WorkType.Work[];
  msgChannel: Subject<InOutputAbleOrNil>;
  pools: Subscription[];
  addWork(work: WorkType.Work): void;
  addWorks(...works: WorkType.Work[]): void;
  run(): void;
  addVariable(from: WorkType.Work, name: string, value: BaseType): void;
  clear(): void;
}

export namespace ControlType {
  export declare type ControlType = "more" | "equal" | "less" | "more_equal" | "less_equal" | "contain"

  declare type CompareFunction = (target: ValueAble) => Boolean;

  declare type ControlBase = {
    [T in ControlType]: CompareFunction
  }
  export interface Control extends ControlBase {
    run<T extends ControlType>(type: T): boolean;
  }

}