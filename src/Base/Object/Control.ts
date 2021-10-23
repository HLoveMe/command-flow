// import { BooleanAble, NumberAble, ValueAble } from "./Able/Ables";

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
    Has = "has", //
    Push = "push", //
    Pop = "pop", //
    Index = "index", //
  }

  // 比较 接口
  export declare type CompareExec = (
    type: CompareEnum,
    target: Value.ValueAble<any>
  ) => Value.BooleanAble;

  export declare type CompareFunction = (
    target: Value.ValueAble<any>
  ) => Boolean;

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
}
