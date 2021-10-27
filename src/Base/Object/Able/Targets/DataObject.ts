
import { attribute } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";

export class DataObject
  extends ObjectTarget<ArrayBuffer>
  implements  Value.DataAble
{
  static attributes: Set<string> = new Set();
  static empty: DataObject = new DataObject(new ArrayBuffer(0));
  _value: ArrayBuffer;
  
  constructor(value: ArrayBuffer) {
    super(value);
    this._value = value;
  }

  data(): ArrayBuffer {
    return this.valueOf();
  }

  @attribute()
  valueOf(): ArrayBuffer {
    Buffer
    return this._value;
  }
}
