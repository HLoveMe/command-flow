// import { ControlFlow } from '../Control';
// import { onlyDeclaration, Unit } from '../../util';
// import { BaseType } from '../../../Types';
// import { Value } from '../../../Object'
// import { ObjectTarget } from './ObjectTarget';
// import { decide } from '../../valueUtil';
// import { NumberObject } from './NumberObject';
// // @MapUint
// @Unit(ControlFlow.MapEnum)
// export class MapObject<T, U>
//   extends ObjectTarget<Map<T, U>>
//   implements Value.MapAble<T, U>, ControlFlow.CollectionMap<T, U>
// {
//   declare _value: Map<T, U>;
//   constructor(value: Map<T, U> = new Map()) {
//     super(value);
//     this._value = new Map(value);
//   }

//   // @attribute()
//   len(): number {
//     return this._value.size;
//   }

//   valueOf(): Map<T, U> {
//     return this._value;
//   }
//   merge(target: MapObject<T, U>): MapObject<T, U> {
//     const newMap = new Map<T, U>(this._value);
//     target._value.forEach(($1, key) => newMap.set(key, $1));
//     return new MapObject(newMap);
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.MapEnum, ...args: any[]): U | void {
//     return null as any;
//   }
//   @onlyDeclaration
//   get(key: string): U | void {
//     return null as any;
//   }
//   @onlyDeclaration
//   set(key: string, value: BaseType): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   has(key: string): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   delete(key: string): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   clear(): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   entries(): Value.ObjectAble<IterableIterator<[T, U]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   forEach(
//     callback: (value: U, key: T, map: Map<T, U>) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): Value.ObjectAble<IterableIterator<U>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }

//   get size(): Value.NumberAble {
//     return decide(this._value.size) as NumberObject;
//   }
// }

import { createExtendsConstruct } from '../../extend-util'
import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';
import { decide } from '../../valueUtil';
import { Value } from "../../../Object";
import { NumberObject, NumberObjectAble } from './NumberObject';

type MapExecInterface<K, V> = ValueExec.ExecFunctionAble<Map<K, V>, 'size'>;
type BaseMapInterface<K, V> = ValueExec.BlurExecInterface<MapExecInterface<K, V>>
const MapWrapper = createExtendsConstruct<Map<any, any>>(Map, ['size']);

class _MapObject<K, V> extends MapWrapper {
  declare _value: Map<K, V>
  valueOf(): Map<K, V> {
    return this._value;
  }
  len(): number {
    return this._value.size;
  }
  get size(): NumberObjectAble {
    return decide(this._value.size) as NumberObjectAble;
  }
}

interface _MapObjectAble<K, V>
  extends Value.MapAble<K, V>, BaseMapInterface<K, V> { get size(): NumberObjectAble }
type CustomConstructor = { new <K, V>(map: Map<K, V>): _MapObjectAble<K, V> } & ValueExtends.Constructor<Map<any,any>>;


type MapObjectAble<K, V> = ValueExtends.WrapperReturnInterface<MapExecInterface<K, V>> & Value.MapAble<K, V> & { get size(): NumberObjectAble }
const MapObject = _MapObject as unknown as CustomConstructor;

export {
  MapObject,
  MapObjectAble
}