
// import { DefaultValue } from "../../util";
import { Value } from "../../../Object";
import { StringObjectAble } from './StringObject'
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
  json(): StringObjectAble {
    const { StringObject } = require("./StringObject");
    try {
      return new StringObject(JSON.stringify(this._value));
    } catch (error) {
      return new StringObject("{}");
    }
  }
}
