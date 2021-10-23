import { Value } from "../../../Types";
import { ControlFlow } from "../../Control";
import { attribute, DefaultValue } from "../../util";
export class StringObject
  implements Value.StringAble, ControlFlow.Compare<Value.StringAble>
{
  static attributes: Set<string> = new Set();
  compare: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new String()))
  static type: string;
  _value: string;
  constructor(value: string) {
    this._value = value;
  }
  @attribute()
  valueOf(): string {
    return this._value;
  }
  equal(target: StringObject): Boolean {
    return this._value == target._value;
  }
}