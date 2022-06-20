import { ControlFlow } from "../../Control";
// import { attribute, DefaultValue } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";

export class DateObject
  extends ObjectTarget<Date>
  implements Value.DateAble {
  declare _value: Date;
  constructor(value: Date = new Date()) {
    super(value);
    this._value = value;
  }
  // @attribute()
  timestamp(): number {
    return this.valueOf().getTime();
  }
  // @attribute()
  valueOf(): Date {
    return new Date(this._value);
  }
}
