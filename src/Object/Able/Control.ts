import { Value } from '..';
export namespace ControlFlow {
  // 比较属性 compare
  export enum CompareEnum {
    More = 'more', //>
    Equal = 'equal', //==
    Less = 'less', //<
    MoreEqual = 'moreEqual', //>=
    LessEqual = 'lessEqual', //<=
  }
  // 计算属性
  export enum CalcEnum {
    Plus = 'plus', //+
    Reduce = 'reduce', // -
    Multi = 'multi', // *
    Divide = 'divide', // /
  }

  /**
   a = Object.keys(Object.getOwnPropertyDescriptors(String.prototype)).map($1=>`${$1}: ${$1}`).join('\n')
   b = a.split("\n")
   function titleCase(str) {
    newStr = str.slice(0,1).toUpperCase() +str.slice(1);
    return newStr;
  }
  c = b.map($1=>{return $1.replace(':','$=$')}).map($1=>{return "$$"+titleCase($1)})
 */

  // 比较 接口
  export declare type CompareExec = (
    type: CompareEnum,
    target: Value.NumberAble
  ) => Value.BooleanAble;

  export declare type CompareFunction = (
    target: Value.NumberAble
  ) => Value.BooleanAble;

  declare type CompareAble = {
    [T in CompareEnum]: CompareFunction;
  };
  export interface Compare<U extends Value.NumberAble> extends CompareAble {
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
}
