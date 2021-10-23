import { BooleanAble, NumberAble, ValueAble } from "./Able/Ables";

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
    Power = "power",
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
    target: ValueAble<any>
  ) => BooleanAble;

  export declare type CompareFunction = (target: ValueAble<any>) => Boolean;

  declare type CompareAble = {
    [T in CompareEnum]?: CompareFunction;
  };
  export interface Compare<U extends ValueAble<any>> extends CompareAble {
    compare?<T extends CompareEnum>(type: T, target: U): BooleanAble;
  }

  // 计算接口
  export declare type CalcFunction = (target: NumberAble) => NumberAble;

  declare type CalcAble = {
    [T in CalcEnum]: CalcFunction;
  };
  export interface Calc<U extends NumberAble> extends CalcAble {
    calc?<T extends NumberAble>(target: U): U;
  }
}
