import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";
export class StringObject
  extends ObjectTarget<string>
  implements Value.StringAble {
  static type: string;
  declare _value: string;
  constructor(value: string = '') {
    super(value);
    this._value = value;
  }
  // @attribute()
  valueOf(): string {
    return this._value;
  }
}
