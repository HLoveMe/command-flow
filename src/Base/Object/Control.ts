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

  export enum ArrayEnum {
    Length = "length",
    Constructor = "constructor",
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
    Flat = "flat",
    FlatMap = "flatMap",
    Map = "map",
    Every = "every",
    Some = "some",
    Reduce = "reduce",
    ReduceRight = "reduceRight",
    ToLocaleString = "toLocaleString",
    ToString = "toString",
    At = "at",
  }

  export enum SetEnum {
    Has = "has",
    Add = "add",
    Delete = "delete",
    Clear = "clear",
    Entries = "entries",
    ForEach = "forEach",
    Size = "size",
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
    Size = "size",
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
    calc(target: U): U;
  }

  // Array
  export declare type ArrayFunction = () => any;
  declare type ArrayAble = {
    [T in ArrayEnum]: ArrayFunction;
  };
  export interface Collection<U extends BaseType> extends ArrayAble {
    collection(...args): any;
  }
}
