import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, Params } from "../../util";
import { SetAble } from "../Ables";

export class SetObject<T>
  implements SetAble<T>, ControlFlow.Compare<SetAble<T>>
{
  static attributes: Set<string> = new Set();
  // compare?: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Set())) static type: string;
  _value: Set<T>;
  constructor(value: Set<T>) {
    this._value = value;
  }
  @attribute()
  len(): number {
    return this._value.size;
  }
  @attribute()
  has(@Params("value") value: T): boolean {
    return this._value.has(value);
  }
  valueOf(): Set<T> {
    throw this._value;
  }
  equal(target: SetObject<T>): Boolean {
    return this._value == target._value;
  }
}