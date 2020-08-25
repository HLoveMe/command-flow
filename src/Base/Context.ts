import { Input } from "./Input";
import { WorkConstant, WorkUUID } from "./Type";

export declare interface Context {
  runConstant: Map<WorkUUID, WorkConstant>;
}