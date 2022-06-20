import { attribute, DefaultValue } from '../../util';
import { Value } from '../../../Types';
import { ObjectTarget } from './ObjectTarget';

export class OptionalObject
  extends ObjectTarget<Value.NULL>
  implements Value.NullAble {
  static attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call(new Date())) static type: string;
  _value: Value.NULL;
  constructor(value: Value.NULL = null) {
    super(value);
    this._value = value;
  }
  @attribute()
  valueOf(): Value.NULL {
    return this._value;
  }

  merge(target: Value.ObjectAble<Value.NULL>): Value.ObjectAble<Value.NULL> {
    return new OptionalObject(null);
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
