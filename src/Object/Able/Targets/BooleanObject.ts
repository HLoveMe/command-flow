import { ControlFlow } from '../../Control';
import { attribute, DefaultValue } from '../../util';
import { Value } from '../../../Types';
import { ObjectTarget } from './ObjectTarget';

export class BooleanObject
  extends ObjectTarget<boolean>
  implements Value.BooleanAble
{
  static attributes: Set<string> = new Set();
  static empty: BooleanObject = new BooleanObject(false);

  @DefaultValue(Object.prototype.toString.call(new Boolean(1)))
  static type: string;
  declare _value: boolean;
  constructor(value: boolean = false) {
    super(value);
    this._value = value;
  }
  @attribute()
  valueOf(): boolean {
    return !!this._value;
  }
}
