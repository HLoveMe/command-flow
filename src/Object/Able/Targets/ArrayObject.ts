import { ControlFlow } from '../../Control';
import {
  onlyDeclaration, Unit
} from '../../util';
import { Value } from '../../../index';
import { ObjectTarget } from './ObjectTarget';
import { NumberObject } from './NumberObject';
import { StringObject } from './StringObject';
import { BooleanObject } from './BooleanObject';
import { decide } from '../../valueUtil';

@Unit(ControlFlow.ArrayEnum, 'collectionArray')
export class ArrayObject<T>
  extends ObjectTarget<Array<T>>
  implements Value.ArrayAble<T>, ControlFlow.CollectionArray<T>
{
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

  len(): number {
    return this._value.length;
  }
  first(): T {
    return this[0];
  }

  last(): T {
    return this[this._value.length - 1];
  }
  // @attribute()@Params('index')
  valueOfIndex(index: number): T {
    return this[index];
  }
  valueOf(): Array<T> {
    return this._value;
  }

  merge(target: ArrayObject<T>): ArrayObject<T> {
    return new ArrayObject([...this._value, ...target._value]);
  }

  @onlyDeclaration
  collectionArray(key: ControlFlow.ArrayEnum, ...args: any[]): any {
    return null as any;
  }
  // array function
  @onlyDeclaration
  concat(...items: (T | ArrayObject<T>)[]): ArrayObject<T> {
    return null as any;
  }
  @onlyDeclaration
  copyWithin(target: number, start: number, end?: number): ArrayObject<T> {
    return null as any;
  }
  @onlyDeclaration
  fill(value: number, start?: number, end?: number): this {
    return null as any;
  }
  @onlyDeclaration
  find(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): Value.Mixins<Value.ObjectAble<T>> {
    return null as any;
  }

  @onlyDeclaration
  findIndex(
    predicate: (value: number, index: number, obj: Uint8Array) => boolean,
    thisArg?: any
  ): NumberObject {
    return null as any;
  }
  @onlyDeclaration
  lastIndexOf(searchElement: number, fromIndex?: number): NumberObject {
    return null as any;
  }
  @onlyDeclaration
  pop(): ObjectTarget<T> {
    return null as any;
  }
  @onlyDeclaration
  push(...items: T[]): NumberObject {
    return null as any;
  }
  @onlyDeclaration
  reverse(): ArrayObject<T> {
    return null as any;
  }
  @onlyDeclaration
  shift(): Value.Mixins {
    return null as any;
  }
  @onlyDeclaration
  unshift(...items: T[]): NumberObject {
    return null as any;
  }
  @onlyDeclaration
  slice(start?: number, end?: number): ArrayObject<T> {
    return null as any;
  }
  @onlyDeclaration
  sort(compareFn?: (a: number, b: number) => number): this {
    return null as any;
  }
  @onlyDeclaration
  splice(start: number, deleteCount?: number, ...items: any[]): ArrayObject<T> {
    return null as any;
  }
  @onlyDeclaration
  includes(searchElement: T, fromIndex?: number): BooleanObject {
    return null as any;
  }
  @onlyDeclaration
  indexOf(searchElement: T, fromIndex?: number): NumberObject {
    return null as any;
  }
  @onlyDeclaration
  join(separator?: string): StringObject {
    return null as any;
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
  ): void {
    return null as any;
  }
  @onlyDeclaration
  filter<S extends T>(
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
    thisArg?: any
  ): ArrayObject<T> {
    return null as any;
  }

  @onlyDeclaration
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): ArrayObject<U> {
    return null as any;
  }
  @onlyDeclaration
  every<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): BooleanObject {
    return null as any;
  }
  @onlyDeclaration
  some(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): BooleanObject {
    return null as any;
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
  ): ArrayObject<T> {
    return null as any;
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
  ): ArrayObject<T> {
    return null as any;
  }

  get length(): NumberObject {
    return decide(this._value.length) as NumberObject;
  }
}
