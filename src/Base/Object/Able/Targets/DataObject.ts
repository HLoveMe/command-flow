import { ControlFlow } from "../../Control";
import { attribute } from "../../util";
import { DataAble, ValueAble } from "../Ables";

export class DataObject implements DataAble, ControlFlow.Compare<DataAble> {
  static attributes: Set<string> = new Set();
  _value: Buffer;
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

  equal(target: DataAble): Boolean {
    return false;
  }
}
