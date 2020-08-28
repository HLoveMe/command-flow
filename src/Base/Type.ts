import { Readable } from "stream";
import { Observable, Subject, Subscription } from "rxjs";
import { ArrayAble, MapAble, SetAble, StringAble, NumberAble } from "./Object/ObjectTypes";

// ArrayAble<any> | MapAble<any, any> | SetAble<any>;
// export type BaseType = null | number | string | Object ;
export type BaseType = ArrayAble<any> | MapAble<any, any> | SetAble<any> | StringAble | NumberAble;

export type AbleJson = { [key: string]: BaseType } | BaseType[]

export type AbleType = BaseType | Readable | AbleJson

export type InOutData = Observable<AbleType>;

export type WorkUUID = string;

export type WorkConstantKey = string;

export type WorkConstant = Map<WorkConstantKey, AbleType>

export declare interface InOutputAble {
  value(): InOutData;
}
export type InOutputAbleOrNil = InOutputAble | null | undefined;



export declare interface Work {
  name: string;
  id: number;
  uuid: WorkUUID;
  input: Observable<InOutputAbleOrNil>;
  output: Subject<InOutputAbleOrNil>;
  pools: Subscription[];
  before?: Work;
  next?: Work;
  context?: ContextImpl;
  option?: any;
  run(input: InOutputAbleOrNil): void;
  prepare(input: InOutputAbleOrNil | Observable<InOutputAbleOrNil>, before: Work, next: Work): void;
  stop(): void;
  clear(): void;
  addVariable(name: string, value: BaseType): void;
}


export declare interface ContextImpl {
  runConstant: Map<WorkUUID, WorkConstant>;
  works: Work[];
  addWork(work: Work): void;
  run(): void;
  addVariable(from: Work, name: string, value: BaseType): void;
}