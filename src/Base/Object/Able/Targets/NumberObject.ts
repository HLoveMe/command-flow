import { ControlFlow } from "../../Control";
import { attribute, DefaultValue } from "../../util";
import { NumberAble } from "../Ables";

export class NumberObject
  implements NumberAble, ControlFlow.Compare<NumberAble>
{
  static attributes: Set<string> = new Set();
  // compare?: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Number()))
  static type: string;
  _value: number;
  constructor(value: number) {
    this._value = value;
  }
  @attribute()
  valueOf(): number {
    return this._value;
  }
  equal(target: NumberObject): Boolean {
    return this._value == target._value;
  }
}