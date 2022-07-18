// import { attribute, DefaultValue } from '../../util';
import { Value } from "../../types";
import { ObjectTarget } from "./ObjectTarget";

export class NULLObject
  extends ObjectTarget<Value.NULL>
  implements Value.NUllAble {
  declare _value: Value.NULL;
  constructor(value: Value.NULL = null) {
    super(value);
    this._value = value;
  }
  // @attribute()
  valueOf(): Value.NULL {
    return this._value;
  }

  merge(target: Value.ObjectAble<Value.NULL>): any {
    return new NULLObject(null);
  }

  isTruly(): boolean {
    return !!this._value;
  }
  isNull(): boolean {
    return this._value === null;
  }
  isUndefined(): boolean {
    return this._value === undefined;
  }
}
