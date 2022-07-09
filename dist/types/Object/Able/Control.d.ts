import { Value } from '..';
export declare namespace ControlFlow {
    export enum CompareEnum {
        More = "more",
        Equal = "equal",
        Less = "less",
        MoreEqual = "moreEqual",
        LessEqual = "lessEqual"
    }
    export enum CalcEnum {
        Plus = "plus",
        Reduce = "reduce",
        Multi = "multi",
        Divide = "divide"
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
    export type CompareExec = (type: CompareEnum, target: Value.NumberAble) => Value.BooleanAble;
    export type CompareFunction = (target: Value.NumberAble) => Value.BooleanAble;
    type CompareAble = {
        [T in CompareEnum]: CompareFunction;
    };
    export interface Compare<U extends Value.NumberAble> extends CompareAble {
        compare<T extends CompareEnum>(type: T, target: U): Value.BooleanAble;
    }
    export type CalcFunction = (target: Value.NumberAble) => Value.NumberAble;
    type CalcAble = {
        [T in CalcEnum]: CalcFunction;
    };
    export interface Calc<U extends Value.NumberAble> extends CalcAble {
        calc(type: ControlFlow.CalcEnum, target: U): U;
    }
    export {};
}
//# sourceMappingURL=Control.d.ts.map