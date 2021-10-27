import { ControlFlow } from "../../Control";
import { attribute, DefaultValue } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";

export class BooleanObject
  extends ObjectTarget<Boolean>
  implements Value.BooleanAble, ControlFlow.Compare<Value.BooleanAble>
{
  static attributes: Set<string> = new Set();
  static empty: BooleanObject = new BooleanObject(false);
  compare: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Boolean(1)))
  static type: string;
  _value: Boolean;
  constructor(value: Boolean) {
    super(value);
    this._value = value;
  }
  @attribute()
  valueOf(): boolean {
    return Boolean(this._value);
  }
}
