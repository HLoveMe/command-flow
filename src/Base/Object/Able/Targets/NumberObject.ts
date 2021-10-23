import { ControlFlow } from "../../Control";
import { attribute, DefaultValue } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";

export class NumberObject
  extends ObjectTarget<number>
  implements Value.NumberAble, ControlFlow.Compare<Value.NumberAble>
{
  static attributes: Set<string> = new Set();
  compare: ControlFlow.CompareExec;
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
}
