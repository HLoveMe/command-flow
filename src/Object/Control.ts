// import { BooleanAble, NumberAble, ValueAble } from "./Able/Ables";

import { BaseType } from "..";
import { Value } from "../Types";
export namespace ControlFlow {
  // 比较属性 compare
  export enum CompareEnum {
    More = "more", //>
    Equal = "equal", //==
    Less = "less", //<
    MoreEqual = "moreEqual", //>=
    LessEqual = "lessEqual", //<=
  }
  // 计算属性
  export enum CalcEnum {
    Plus = "plus", //+
    Reduce = "reduce", // -
    Multi = "multi", // *
    Divide = "divide", // /
  }
  //集合属性
  export enum CollectionEnum {
    Contain = "contain", //是否包含
    Add = "add", //增加
    ValueFor = "valueFor", // 取值
    Keys = "keys", // 所有keys
    Values = "values", // 所有values
  }
  //Object.keys(Object.getOwnPropertyDescriptors(Array.prototype)).map($1=>`${$1}: ControlFlow.ArrayFunction`).join('\n')
  export enum ArrayEnum {
    Concat = "concat",
    CopyWithin = "copyWithin",
    Fill = "fill",
    Find = "find",
    FindIndex = "findIndex",
    LastIndexOf = "lastIndexOf",
    Pop = "pop",
    Push = "push",
    Reverse = "reverse",
    Shift = "shift",
    Unshift = "unshift",
    Slice = "slice",
    Sort = "sort",
    Splice = "splice",
    Includes = "includes",
    IndexOf = "indexOf",
    Join = "join",
    Keys = "keys",
    Entries = "entries",
    Values = "values",
    ForEach = "forEach",
    Filter = "filter",
    Map = "map",
    Every = "every",
    Some = "some",
    Reduce = "reduce",
    ReduceRight = "reduceRight",
  }

  export enum SetEnum {
    Has = "has",
    Add = "add",
    Delete = "delete",
    Clear = "clear",
    Entries = "entries",
    ForEach = "forEach",
    Values = "values",
    Keys = "keys",
  }

  export enum MapEnum {
    Get = "get",
    Set = "set",
    Has = "has",
    Delete = "delete",
    Clear = "clear",
    Entries = "entries",
    ForEach = "forEach",
    Keys = "keys",
    Values = "values",
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
  export interface Compare<U extends Value.ValueAble<any>> extends CompareAble {
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
    calc(type: ControlFlow.CalcEnum, target: U): U;
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
