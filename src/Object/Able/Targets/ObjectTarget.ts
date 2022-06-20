
// import { DefaultValue } from "../../util";
import { Value } from "../../../Types";
export class ObjectTarget<T>
  implements Value.ObjectAble<T>
{
  get [Symbol.toStringTag]() {
    return 'flow-object';
  }
  declare _value: T;
  constructor(value: T = {} as any) {
    this._value = value;
  }
  valueOf(): T {
    return this._value;
  }

  merge(target: Value.ObjectAble<T>): Value.ObjectAble<T> {
    try {
      const result = Object.assign(this._value, target._value);
      return new ObjectTarget(result);
    } catch (error) {
      return new ObjectTarget({} as any);
    }
  }
  json(): Value.StringAble {
    const { StringObject } = require("./StringObject");
    try {
      return new StringObject(JSON.stringify(this._value));
    } catch (error) {
      return new StringObject("{}");
    }
  }
}
