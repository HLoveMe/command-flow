import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, SetUint } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";

@SetUint
export class SetObject<T>
  extends ObjectTarget<Set<T>>
  implements Value.SetAble<T>, ControlFlow.CollectionSet
{
  static attributes: Set<string> = new Set();
  static empty: SetObject<any> = new SetObject(new Set());

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

  valueOf(): Set<T> {
    return this._value;
  }

  merge(target: SetObject<T>): SetObject<T> {
    const newSet = new Set<T>();
    this._value.forEach(($1) => newSet.add($1));
    target.forEach(($1) => newSet.add($1));
    return new SetObject(newSet);
  }

  collectionSet: ControlFlow.CollectionSetExec;
  has: ControlFlow.SetFunction;
  add: ControlFlow.SetFunction;
  delete: ControlFlow.SetFunction;
  clear: ControlFlow.SetFunction;
  entries: ControlFlow.SetFunction;
  forEach: ControlFlow.SetFunction;
  size: ControlFlow.SetFunction;
  values: ControlFlow.SetFunction;
  keys: ControlFlow.SetFunction;
}
