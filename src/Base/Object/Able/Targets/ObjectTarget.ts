import { ControlFlow } from "../../Control";
import { DefaultValue } from "../../util";
import { ObjectAble } from "../Ables";

export class ObjectTarget<T>
  implements ObjectAble<T>, ControlFlow.Compare<ObjectAble<T>>
{
  static attributes: Set<string> = new Set();
  // compare?: ControlFlow.CompareExec;
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