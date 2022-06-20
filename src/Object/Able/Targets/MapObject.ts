import { ControlFlow } from '../../Control';
import { attribute, DefaultValue, MapUint, onlyDeclaration } from '../../util';
import { BaseType, Value } from '../../../Types';
import { ObjectTarget } from './ObjectTarget';
import { decide } from '../../valueUtil';
import { NumberObject } from './NumberObject';
@MapUint
export class MapObject<T, U>
  extends ObjectTarget<Map<T, U>>
  implements Value.MapAble<T, U>, ControlFlow.CollectionMap<T, U>
{
  static attributes: Set<string> = new Set();
  static empty: MapObject<any, any> = new MapObject(new Map());

  @DefaultValue(Object.prototype.toString.call(new Map())) static type: string;
  _value: Map<T, U>;
  constructor(value: Map<T, U> = new Map()) {
    super(value);
    this._value = new Map(value);
  }

  @attribute()
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
    return null;
  }
  @onlyDeclaration
  set(key: string, value: BaseType): void {
    return null;
  }
  @onlyDeclaration
  has(key: string): Value.BooleanAble {
    return null;
  }
  @onlyDeclaration
  delete(key: string): Value.BooleanAble {
    return null;
  }
  @onlyDeclaration
  clear(): void {
    return null;
  }
  @onlyDeclaration
  entries(): Value.ObjectAble<IterableIterator<[T, U]>> {
    return null;
  }
  @onlyDeclaration
  forEach(
    callback: (value: U, key: T, map: Map<T, U>) => void,
    thisArg?: any
  ): void {
    return null;
  }
  @onlyDeclaration
  values(): Value.ObjectAble<IterableIterator<U>> {
    return null;
  }
  @onlyDeclaration
  keys(): Value.ObjectAble<IterableIterator<T>> {
    return null;
  }

  get size(): Value.NumberAble {
    return decide(this._value.size) as NumberObject;
  }
}
