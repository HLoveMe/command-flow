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
  valueOf(): T {
    return this._value;
  }
  more: ControlFlow.CompareFunction;
  equal: ControlFlow.CompareFunction;
  less: ControlFlow.CompareFunction;
  moreEqual: ControlFlow.CompareFunction;
  lessEqual: ControlFlow.CompareFunction;
}