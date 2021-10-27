import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, Params } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";

export class SetObject<T>
  extends ObjectTarget<Set<T>>
  implements Value.SetAble<T>, ControlFlow.Compare<Value.SetAble<T>>
{
  static attributes: Set<string> = new Set();
  static empty: SetObject<any> = new SetObject(new Set());
  compare: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Set())) static type: string;
  _value: Set<T>;
  constructor(value: Set<T>) {
    super(value);
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
}
