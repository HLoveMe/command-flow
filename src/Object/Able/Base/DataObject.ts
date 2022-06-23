
import { Value } from "../../../Object";
import { ObjectTarget } from "./ObjectTarget";

export class DataObject
  extends ObjectTarget<ArrayBuffer>
  implements Value.DataAble {
  declare _value: ArrayBuffer;

  constructor(value: ArrayBuffer = new ArrayBuffer(0)) {
    super(value);
    this._value = value;
  }

  data(): ArrayBuffer {
    return this.valueOf();
  }

  // @attribute()
  valueOf(): ArrayBuffer {
    return this._value;
  }
}
