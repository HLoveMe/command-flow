import { ControlFlow } from "../../Control";
import { attribute, DefaultValue } from "../../util";
import { Value } from "../../../Types";

export class BooleanObject
  implements Value.BooleanAble, ControlFlow.Compare<Value.BooleanAble>
{
  static attributes: Set<string> = new Set();
  compare: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Boolean(1)))
  static type: string;
  _value: any;
  constructor(value: any) {
    this._value = value;
  }
  @attribute()
  valueOf(): boolean {
    return Boolean(this._value);
  }
  equal(target: BooleanObject): Boolean {
    return this.valueOf() == target.valueOf();
  }
}
