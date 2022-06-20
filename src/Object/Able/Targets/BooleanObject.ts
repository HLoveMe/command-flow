import { ControlFlow } from '../../Control';
import { Value } from '../../../Types';
import { ObjectTarget } from './ObjectTarget';

export class BooleanObject
  extends ObjectTarget<boolean>
  implements Value.BooleanAble
{
  static type: string;
  declare _value: boolean;
  constructor(value: boolean = false) {
    super(value);
    this._value = value;
  }
  
  valueOf(): boolean {
    return !!this._value;
  }
}
