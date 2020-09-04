import { Readable } from "stream";
import { Observable, Subject, Subscription } from "rxjs";
import { ArrayAble, MapAble, SetAble, StringAble, NumberAble } from "./Object/ObjectTypes";

// ArrayAble<any> | MapAble<any, any> | SetAble<any>;
// export type BaseType = null | number | string | Object ;
export type BaseType = ArrayAble<any> | MapAble<any, any> | SetAble<any> | StringAble | NumberAble;

// export type AbleType = BaseType | Readable 

export type InOutData = Observable<BaseType>;

export type WorkUUID = string;

export type WorkConstantKey = string;

export type WorkConstant = Map<WorkConstantKey, BaseType>

export declare interface InOutputAble {
  value(): InOutData;
}
export type InOutputAbleOrNil = InOutputAble | null | undefined;

type WorkFunction = (input: InOutputAbleOrNil) => void;

type WorkTypes = "rn_run" | "web_run" | "node_run";

export type WorkOperation = {
  [P in WorkTypes]?: WorkFunction
}
export declare interface Work extends WorkOperation {
  name: string;
  id: number;
  uuid: WorkUUID;
  input: Subject<InOutputAbleOrNil>;
  output: Subject<InOutputAbleOrNil>;
  pools: Subscription[];
  before?: Work;
  next?: Work;
  context?: ContextImpl;
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


export declare interface ContextImpl {
  runConstant: Map<WorkUUID, WorkConstant>;
  works: Work[];
  msgChannel: Subject<InOutputAbleOrNil>;
  pools: Subscription[];
  addWork(work: Work): void;
  addWorks(...works: Work[]): void;
  run(): void;
  addVariable(from: Work, name: string, value: BaseType): void;
  clear(): void;
}
