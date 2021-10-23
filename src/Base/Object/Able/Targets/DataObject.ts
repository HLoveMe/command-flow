import { ControlFlow } from "../../Control";
import { attribute } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";


export class DataObject extends ObjectTarget<Buffer> implements ControlFlow.Compare<Value.DataAble>, Value.DataAble {
  static attributes: Set<string> = new Set();
  _value: Buffer;
  compare: ControlFlow.CompareExec;
  constructor(value: Buffer) {
    super(value)
    this._value = value;
  }

  data(): Buffer {
    return this.valueOf();
  }

  @attribute()
  valueOf(): Buffer {
    return this._value;
  }
}