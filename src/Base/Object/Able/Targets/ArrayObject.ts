import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, Params } from "../../util";
import { ArrayAble } from "../Ables";

export class ArrayObject<T>
  implements ArrayAble<T>, ControlFlow.Compare<ArrayAble<T>>
{
  static attributes: Set<string> = new Set();
  // compare?: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call([])) static type: string;
  _value: Array<T>;
  constructor(value: Array<T>) {
    this._value = value;
  }
  @attribute()
  len(): number {
    return this._value.length;
  }
  @attribute()
  first(): T {
    return this[0];
  }
  @attribute()
  last(): T {
    return this[this._value.length - 1];
  }
  @attribute()
  valueOfIndex(@Params("index") index: number): T {
    return this[index];
  }
  valueOf(): Array<T> {
    return this._value;
  }
  equal(target: ArrayObject<T>): Boolean {
    return this._value == target._value;
  }
}