import { ControlFlow } from "../../Control";
import { ArrayUint, attribute, DefaultValue, Params } from "../../util";
import { Value } from "../../../index";
import { ObjectTarget } from "./ObjectTarget";
import { BaseType } from "../../../Types";

@ArrayUint
export class ArrayObject<T>
  extends ObjectTarget<Array<T>>
  implements Value.ArrayAble<T>, ControlFlow.Collection
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
  collectionArray: ControlFlow.CollectionArrayExec;
  // array function
  length: ControlFlow.ArrayFunction;
  concat: ControlFlow.ArrayFunction;
  copyWithin: ControlFlow.ArrayFunction;
  fill: ControlFlow.ArrayFunction;
  find: ControlFlow.ArrayFunction;
  findIndex: ControlFlow.ArrayFunction;
  lastIndexOf: ControlFlow.ArrayFunction;
  pop: ControlFlow.ArrayFunction;
  push: ControlFlow.ArrayFunction;
  reverse: ControlFlow.ArrayFunction;
  shift: ControlFlow.ArrayFunction;
  unshift: ControlFlow.ArrayFunction;
  slice: ControlFlow.ArrayFunction;
  sort: ControlFlow.ArrayFunction;
  splice: ControlFlow.ArrayFunction;
  includes: ControlFlow.ArrayFunction;
  indexOf: ControlFlow.ArrayFunction;
  join: ControlFlow.ArrayFunction;
  keys: ControlFlow.ArrayFunction;
  entries: ControlFlow.ArrayFunction;
  values: ControlFlow.ArrayFunction;
  forEach: ControlFlow.ArrayFunction;
  filter: ControlFlow.ArrayFunction;
  flat: ControlFlow.ArrayFunction;
  flatMap: ControlFlow.ArrayFunction;
  map: ControlFlow.ArrayFunction;
  every: ControlFlow.ArrayFunction;
  some: ControlFlow.ArrayFunction;
  reduce: ControlFlow.ArrayFunction;
  reduceRight: ControlFlow.ArrayFunction;
  toLocaleString: ControlFlow.ArrayFunction;
  toString: ControlFlow.ArrayFunction;
  at: ControlFlow.ArrayFunction;
}
