import { ControlFlow } from "../../Control";
import { ArrayUint, attribute, DefaultValue, Params } from "../../util";
import { Value } from "../../../index";
import { ObjectTarget } from "./ObjectTarget";
import { BaseType } from "../../../Types";


@ArrayUint
export class ArrayObject<T>
  extends ObjectTarget<Array<T>>
  implements Value.ArrayAble<T> , ControlFlow.Collection
{
  static attributes: Set<string> = new Set();
  static empty: ArrayObject<Object> = new ArrayObject([]);

  @DefaultValue(Object.prototype.toString.call([])) static type: string;
  _value: Array<T>;

  constructor(value: Array<T>) {
    super(value);
    this._value = value;
  }
  
  @attribute()
  len(): number {
    return this._value.length;
  }
  @attribute()
  first(): T {
    return this[0];
  }
  @attribute()
  last(): T {
    return this[this._value.length - 1];
  }
  @attribute()
  valueOfIndex(@Params("index") index: number): T {
    return this[index];
  }
  valueOf(): Array<T> {
    return this._value;
  }

  //collection
  collection(): BaseType {
    return null
  }

  find():BaseType{
    return null
  }

  aa():BaseType{return null}
}
