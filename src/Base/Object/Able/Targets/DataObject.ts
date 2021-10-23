import { ControlFlow } from "../../Control";
import { attribute, CompareUnit } from "../../util";

import { Value } from "../../../Types";
@CompareUnit
export class DataObject implements ControlFlow.Compare<Value.DataAble>, Value.DataAble {
  static attributes: Set<string> = new Set();
  _value: Buffer;
  compare: ControlFlow.CompareExec;
  constructor(value: Buffer) {
    this._value = value;
  }

  data(): Buffer {
    return this.valueOf();
  }

  @attribute()
  valueOf(): Buffer {
    return this._value;
  }

  equal(target: Value.DataAble): Boolean {
    return false;
  }
}