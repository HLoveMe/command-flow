import { Stream } from "stream";

export type BaseType = number | string ;

export type AbleJson = { [key: string]: BaseType } | BaseType[]

export type AbleType = BaseType | Stream | AbleJson | Promise<BaseType>

export type WorkUUID = string;

export type WorkConstantKey = string;

export type WorkConstant = Map<WorkConstantKey, AbleType>


