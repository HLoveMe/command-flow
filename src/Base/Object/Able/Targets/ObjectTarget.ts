import { ControlFlow } from "../../Control";
import { DefaultValue } from "../../util";
import { Value } from "../../../Types";

export class ObjectTarget<T>
  implements Value.ObjectAble<T>, ControlFlow.Compare<Value.ObjectAble<T>>
{
  static attributes: Set<string> = new Set();
  compare: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call({})) static type: string;
  _value: T;
  constructor(value: T) {
    this._value = value;
  }
  equal(target: ObjectTarget<T>): Boolean {
    return this._value == target._value;
  }
  valueOf(): T {
    return this._value;
  }
}