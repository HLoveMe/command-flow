import { ControlFlow } from '../../Control';
import { onlyDeclaration, Unit } from '../../util';
import { BaseType } from '../../../Types';
import { Value } from '../../../Object'
import { ObjectTarget } from './ObjectTarget';
import { decide } from '../../valueUtil';
import { NumberObject } from './NumberObject';
// @MapUint
@Unit(ControlFlow.MapEnum, 'collectionMap')
export class MapObject<T, U>
  extends ObjectTarget<Map<T, U>>
  implements Value.MapAble<T, U>, ControlFlow.CollectionMap<T, U>
{
  declare _value: Map<T, U>;
  constructor(value: Map<T, U> = new Map()) {
    super(value);
    this._value = new Map(value);
  }

  // @attribute()
  len(): number {
    return this._value.size;
  }

  valueOf(): Map<T, U> {
    return this._value;
  }
  merge(target: MapObject<T, U>): MapObject<T, U> {
    const newMap = new Map<T, U>(this._value);
    target._value.forEach(($1, key) => newMap.set(key, $1));
    return new MapObject(newMap);
  }
  @onlyDeclaration
  collectionMap(key: ControlFlow.MapEnum, ...args: any[]): U | void {
    return null as any;
  }
  @onlyDeclaration
  get(key: string): U | void {
    return null as any;
  }
  @onlyDeclaration
  set(key: string, value: BaseType): void {
    return null as any;
  }
  @onlyDeclaration
  has(key: string): Value.BooleanAble {
    return null as any;
  }
  @onlyDeclaration
  delete(key: string): Value.BooleanAble {
    return null as any;
  }
  @onlyDeclaration
  clear(): void {
    return null as any;
  }
  @onlyDeclaration
  entries(): Value.ObjectAble<IterableIterator<[T, U]>> {
    return null as any;
  }
  @onlyDeclaration
  forEach(
    callback: (value: U, key: T, map: Map<T, U>) => void,
    thisArg?: any
  ): void {
    return null as any;
  }
  @onlyDeclaration
  values(): Value.ObjectAble<IterableIterator<U>> {
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
