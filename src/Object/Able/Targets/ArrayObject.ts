import { ControlFlow } from '../../Control';
import {
  ArrayUint,
  attribute,
  DefaultValue,
  onlyDeclaration,
  Params,
} from '../../util';
import { Value } from '../../../index';
import { ObjectTarget } from './ObjectTarget';
import { BaseType } from '../../../Types';
import { NumberObject } from './NumberObject';
import { decide } from '../../valueUtil';

@ArrayUint
export class ArrayObject<T>
  extends ObjectTarget<Array<T>>
  implements Value.ArrayAble<T>, ControlFlow.CollectionArray
{
  static attributes: Set<string> = new Set();
  static empty: ArrayObject<Object> = new ArrayObject([]);

  @DefaultValue(Object.prototype.toString.call([])) static type: string;
  declare _value: Array<T>;

  constructor(...values: Array<Array<T> | number>) {
    const first = values[0];
    const firstIsArray = first instanceof Array;
    var init: any = null;
    if (firstIsArray && values.length === 1) {
      init = first;
    } else {
      init = new Array(...values);
    }
    super(init);
    this._value = init;
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
  valueOfIndex(@Params('index') index: number): T {
    return this[index];
  }
  valueOf(): Array<T> {
    return this._value;
  }

  merge(target: ArrayObject<T>): ArrayObject<T> {
    return new ArrayObject([...this._value, ...target._value]);
  }

  @onlyDeclaration
  collectionArray(key: ControlFlow.ArrayEnum, ...args: any[]): BaseType {
    return null;
  }
  // array function
  @onlyDeclaration
  concat(...items: (T | ArrayObject<T>)[]): BaseType {
    return null;
  }
  @onlyDeclaration
  copyWithin(target: number, start: number, end?: number): BaseType {
    return null;
  }
  @onlyDeclaration
  fill(value: number, start?: number, end?: number): BaseType {
    return null;
  }
  @onlyDeclaration
  find(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): BaseType {
    return null;
  }

  @onlyDeclaration
  findIndex(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): BaseType {
    return null;
  }
  @onlyDeclaration
  lastIndexOf(searchElement: number, fromIndex?: number): BaseType {
    return null;
  }
  @onlyDeclaration
  pop(): BaseType {
    return null;
  }
  @onlyDeclaration
  push(...items: T[]): BaseType {
    return null;
  }
  @onlyDeclaration
  reverse(): BaseType {
    return null;
  }
  @onlyDeclaration
  shift(): BaseType {
    return null;
  }
  @onlyDeclaration
  unshift(...items: T[]): BaseType {
    return null;
  }
  @onlyDeclaration
  slice(start?: number, end?: number): BaseType {
    return null;
  }
  @onlyDeclaration
  sort(compareFn?: (a: number, b: number) => number): BaseType {
    return null;
  }
  @onlyDeclaration
  splice(start: number, deleteCount?: number, ...items: any[]): BaseType {
    return null;
  }
  @onlyDeclaration
  includes(searchElement: T, fromIndex?: number): BaseType {
    return null;
  }
  @onlyDeclaration
  indexOf(searchElement: T, fromIndex?: number): BaseType {
    return null;
  }
  @onlyDeclaration
  join(separator?: string): BaseType {
    return null;
  }

  @onlyDeclaration
  entries(): ObjectTarget<IterableIterator<[T, T]>> {
    return null as any;
  }
  @onlyDeclaration
  values(): ObjectTarget<IterableIterator<T>> {
    return null as any;
  }
  @onlyDeclaration
  keys(): ObjectTarget<IterableIterator<T>> {
    return null as any;
  }

  @onlyDeclaration
  forEach(
    callbackfn: (value: T, index: number, array: readonly T[]) => void,
    thisArg?: any
  ): BaseType {
    return null;
  }
  @onlyDeclaration
  filter<S extends T>(
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
    thisArg?: any
  ): BaseType {
    return null;
  }

  @onlyDeclaration
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): BaseType {
    return null;
  }
  @onlyDeclaration
  every<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): BaseType {
    return null;
  }
  @onlyDeclaration
  some(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): BaseType {
    return null;
  }

  @onlyDeclaration
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue?: T
  ): BaseType {
    return null;
  }
  @onlyDeclaration
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue?: T
  ): BaseType {
    return null;
  }
  @onlyDeclaration
  toLocaleString(): BaseType {
    return null;
  }

  get length(): NumberObject {
    return decide(this._value.length) as NumberObject;
  }
}
