import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, onlyDeclaration, SetUint } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";
import { BaseType } from "../../..";
import { NumberObject } from "./NumberObject";
import { decide } from "../../valueUtil";

@SetUint
export class SetObject<T>
  extends ObjectTarget<Set<T>>
  implements Value.SetAble<T>, ControlFlow.CollectionSet {
  static attributes: Set<string> = new Set();
  static empty: SetObject<any> = new SetObject(new Set());

  @DefaultValue(Object.prototype.toString.call(new Set())) static type: string;
  _value: Set<T>;
  constructor(value: Set<T> | Array<T>) {
    const init = !!value ? (Array.isArray(value) ? new Set(value) : value) : new Set<T>();
    super(init);
    this._value = init;
  }
  @attribute()
  len(): number {
    return this._value.size;
  }

  valueOf(): Set<T> {
    return this._value;
  }

  merge(target: SetObject<T>): SetObject<T> {
    const newSet = new Set<T>();
    this._value.forEach(($1) => newSet.add($1));
    target.forEach(($1) => newSet.add($1));
    new Set().keys
    return new SetObject(newSet);
  }

  @onlyDeclaration
  collectionSet(key: ControlFlow.SetEnum, ...args: any[]): BaseType { return null };
  @onlyDeclaration
  has(value: T): BaseType { return null }
  @onlyDeclaration
  add(value: T): BaseType { return null }
  @onlyDeclaration
  delete(value: T): BaseType { return null }
  @onlyDeclaration
  clear(): BaseType { return null }

  @onlyDeclaration
  forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): BaseType { return null };

  @onlyDeclaration
  entries(): ObjectTarget<IterableIterator<[T, T]>> { return null };
  @onlyDeclaration
  values(): ObjectTarget<IterableIterator<T>> { return null };
  @onlyDeclaration
  keys(): ObjectTarget<IterableIterator<T>> { return null };

  get size(): NumberObject {
    return decide(this._value.size) as NumberObject;
  }
}
