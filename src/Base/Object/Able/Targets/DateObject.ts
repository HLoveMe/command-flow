import { ControlFlow } from "../../Control";
import { attribute, DefaultValue } from "../../util";
import { Value } from "../../../Types";

export class DateObject implements Value.DateAble, ControlFlow.Compare<Value.DateAble> {
  static attributes: Set<string> = new Set();
  compare: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Date())) static type: string;
  _value: any;
  constructor(value: any) {
    this._value = value;
  }
  @attribute()
  timestamp(): number {
    return this.valueOf().getTime();
  }
  @attribute()
  valueOf(): Date {
    return new Date(this._value);
  }
  equal(target: DateObject): Boolean {
    return this.timestamp() == target.timestamp();
  }
}