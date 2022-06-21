import { ControlFlow } from "../../Control";
import { CalcUnit, CompareUnit, NumberUint, onlyDeclaration } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";
import { BooleanObject } from "./BooleanObject";
import { StringObject } from "./StringObject";

@CalcUnit
@CompareUnit
@NumberUint
export class NumberObject
  extends ObjectTarget<number>
  implements
  Value.NumberAble,
  ControlFlow.Compare<Value.NumberAble>,
  ControlFlow.Calc<Value.NumberAble>,
  ControlFlow.ObjectNumber, ControlFlow.NumberFunction {
  static type: string;
  declare _value: number;
  constructor(value: number = 1) {
    super(value);
    this._value = value;
  }

  // @attribute()
  valueOf(): number {
    return this._value;
  }

  merge(target: NumberObject): NumberObject {
    return new NumberObject(this._value + target._value);
  }

  @onlyDeclaration
  compare(type: ControlFlow.CompareEnum, target: NumberObject): Value.BooleanAble {
    return new BooleanObject(false)
  }
  // Compare
  // compare: ControlFlow.CompareExec;
  more(target: Value.ValueAble<any>): Value.BooleanAble {
    return new BooleanObject(this._value > target._value);
  }
  equal(target: Value.ValueAble<any>): Value.BooleanAble {
    return new BooleanObject(this._value === target._value);
  }
  less(target: Value.ValueAble<any>): Value.BooleanAble {
    return new BooleanObject(this._value < target._value);
  }
  moreEqual(target: Value.ValueAble<any>): Value.BooleanAble {
    return new BooleanObject(this._value >= target._value);
  }
  lessEqual(target: Value.ValueAble<any>): Value.BooleanAble {
    return new BooleanObject(this._value <= target._value);
  }

  @onlyDeclaration
  calc(type: ControlFlow.CalcEnum, target: NumberObject): NumberObject {
    return new NumberObject(0);
  }

  plus(target: Value.NumberAble): NumberObject {
    return new NumberObject(this._value + target._value);
  }
  reduce(target: Value.NumberAble): NumberObject {
    return new NumberObject(this._value - target._value);
  }
  multi(target: Value.NumberAble): NumberObject {
    return new NumberObject(this._value * target._value);
  }
  divide(target: Value.NumberAble): NumberObject {
    return new NumberObject(
      target._value === 0 ? Infinity : this._value / target._value
    );
  }

  //
  @onlyDeclaration
  execNumber(key: ControlFlow.NumberEnum, ...args: any[]): any {
    (new Number()).toPrecision
    return {} as any
  }
  @onlyDeclaration
  toExponential(fractionDigits?: number): StringObject {
    return null as any
  }
  @onlyDeclaration
  toFixed(fractionDigits?: number): StringObject {
    return null as any
  }
  @onlyDeclaration
  toPrecision(precision?: number): StringObject {
    return null as any
  }
}
