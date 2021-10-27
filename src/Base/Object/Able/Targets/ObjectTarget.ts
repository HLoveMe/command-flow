import { ControlFlow } from "../../Control";
import { CompareUnit, DefaultValue } from "../../util";
import { Value } from "../../../Types";

@CompareUnit
export class ObjectTarget<T>
  implements Value.ObjectAble<T>, ControlFlow.Compare<Value.ObjectAble<T>>
{
  static attributes: Set<string> = new Set();
  static empty: ObjectTarget<Object> = new ObjectTarget({});
  compare: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call({})) static type: string;
  _value: T;
  constructor(value: T) {
    this._value = value;
  }
  valueOf(): T {
    return this._value;
  }

  merge(target: Value.ObjectAble<T>): Value.ObjectAble<T> {
    try {
      const result = Object.assign(this._value, target._value);
      return new ObjectTarget(result);
    } catch (error) {
      return new ObjectTarget(null);
    }
  }
  json(): Value.StringAble {
    const { StringObject } = require("./StringObject");
    try {
      return new StringObject(JSON.stringify(this._value));
    } catch (error) {
      return new StringObject("{}");
    }
  }

  more(target: Value.ValueAble<any>): Boolean {
    return false;
  }
  equal(target: Value.ValueAble<any>): Boolean {
    return false;
  }
  less(target: Value.ValueAble<any>): Boolean {
    return false;
  }
  moreEqual(target: Value.ValueAble<any>): Boolean {
    return false;
  }
  lessEqual(target: Value.ValueAble<any>): Boolean {
    return false;
  }
}
