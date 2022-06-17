import { Value } from '../../../Types';
import { ObjectTarget } from './ObjectTarget';

export class MixinsObject<
    T extends Value.ObjectAble<any> = Value.ObjectAble<any>
  >
  extends ObjectTarget<T>
  implements Value.Mixins
{
  constructor(value: T | Value.NULL) {
    super(value);
  }
  valueOf(): T {
    return this._value;
  }
  merge(target: Value.ObjectAble<T>): Value.ObjectAble<T> {
    return new MixinsObject(null);
  }
}
