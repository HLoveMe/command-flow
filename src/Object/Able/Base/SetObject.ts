import { ControlFlow } from '../../Control';
import { onlyDeclaration, Unit } from '../../util';
import { Value } from '../../../Types';
import { ObjectTarget } from './ObjectTarget';
import { NumberObject } from './NumberObject';
import { decide } from '../../valueUtil';

@Unit(ControlFlow.SetEnum, 'collectionSet')
export class SetObject<T>
  extends ObjectTarget<Set<T>>
  implements Value.SetAble<T>, ControlFlow.CollectionSet<T>
{
  constructor(value?: Set<T> | Array<T>) {
    const init = !!value
      ? Array.isArray(value)
        ? new Set(value)
        : value
      : new Set<T>();
    super(init);
    this._value = init;
  }
  // @attribute()
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
    new Set().keys;
    return new SetObject(newSet);
  }

  @onlyDeclaration
  collectionSet(key: ControlFlow.SetEnum, ...args: any[]): any {
    return null as any;
  }
  @onlyDeclaration
  has(value: T): Value.BooleanAble {
    return null as any;
  }
  @onlyDeclaration
  add(value: T): this {
    return this;
  }
  @onlyDeclaration
  delete(value: T): Value.BooleanAble {
    return null as any;
  }
  @onlyDeclaration
  clear(): void {
    return null as any;
  }

  @onlyDeclaration
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any
  ): void {
    return null as any;
  }

  @onlyDeclaration
  entries(): Value.ObjectAble<IterableIterator<[T, T]>> {
    return null as any;
  }
  @onlyDeclaration
  values(): Value.ObjectAble<IterableIterator<T>> {
    return null as any;
  }
  @onlyDeclaration
  keys(): Value.ObjectAble<IterableIterator<T>> {
    return null as any;
  }

  get size(): Value.NumberAble {
    return decide(this._value.size) as NumberObject;
  }
}
