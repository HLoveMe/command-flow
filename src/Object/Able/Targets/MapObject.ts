import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, MapUint, onlyDeclaration } from "../../util";
import { BaseType, Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";
import { decide } from "../../valueUtil";
import { NumberObject } from "./NumberObject";
@MapUint
export class MapObject<T, U>
  extends ObjectTarget<Map<T, U>>
  implements Value.MapAble<T, U>, ControlFlow.CollectionMap, ControlFlow.MapAbsoluteAble {
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
  collectionMap(key: ControlFlow.MapEnum, ...args: any[]): BaseType { return null }
  @onlyDeclaration
  get(key: string): BaseType { return null }
  @onlyDeclaration
  set(key: string, value: BaseType): BaseType { return null }
  @onlyDeclaration
  has(key: string): BaseType { return null }
  @onlyDeclaration
  delete(key: string): BaseType { return null }
  @onlyDeclaration
  clear(): BaseType { return null }
  @onlyDeclaration
  entries(): BaseType { return null }
  @onlyDeclaration
  forEach(callback: ControlFlow.MapFunction, thisArg?: any): BaseType { return null }
  @onlyDeclaration
  values(): BaseType { return null }
  @onlyDeclaration
  keys(): BaseType { return null }

  get size(): NumberObject {
    return decide(this._value.size) as NumberObject;
  }
}
