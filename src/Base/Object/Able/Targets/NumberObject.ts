import { ControlFlow } from "../../Control";
import { attribute, CalcUnit, CompareUnit, DefaultValue } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";
import { BooleanObject } from "./BooleanObject";

@CalcUnit
@CompareUnit
export class NumberObject
  extends ObjectTarget<number>
  implements
    Value.NumberAble,
    ControlFlow.Compare<Value.NumberAble>,
    ControlFlow.Calc<Value.NumberAble>
{
  static attributes: Set<string> = new Set();
  static empty: NumberObject = new NumberObject(0);
  compare: ControlFlow.CompareExec;
  calc: ControlFlow.CalcFunction;
  @DefaultValue(Object.prototype.toString.call(new Number()))
  static type: string;
  _value: number;
  constructor(value: number) {
    super(value);
    this._value = value;
  }
  @attribute()
  valueOf(): number {
    return this._value;
  }
  // Compare
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
  // Calc
  plus(target: NumberObject): NumberObject {
    return new NumberObject(this._value + target._value);
  }
  reduce(target: NumberObject): NumberObject {
    return new NumberObject(this._value - target._value);
  }
  multi(target: NumberObject): NumberObject {
    return new NumberObject(this._value * target._value);
  }
  divide(target: NumberObject): NumberObject {
    return new NumberObject(
      target._value === 0 ? Infinity : this._value / target._value
    );
  }
}
