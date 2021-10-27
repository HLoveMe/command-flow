import { Value } from "../../../Types";
import { ControlFlow } from "../../Control";
import { attribute, DefaultValue } from "../../util";
import { ObjectTarget } from "./ObjectTarget";
export class StringObject
  extends ObjectTarget<string>
  implements Value.StringAble
{
  static attributes: Set<string> = new Set();
  static empty: StringObject = new StringObject("");
  
  @DefaultValue(Object.prototype.toString.call(new String()))
  static type: string;
  _value: string;
  constructor(value: string) {
    super(value);
    this._value = value;
  }
  @attribute()
  valueOf(): string {
    return this._value;
  }
}
