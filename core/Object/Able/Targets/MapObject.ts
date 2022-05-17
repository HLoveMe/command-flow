import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, MapUint, Params } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";
@MapUint
export class MapObject<T, U>
  extends ObjectTarget<Map<T, U>>
  implements Value.MapAble<T, U>, ControlFlow.CollectionMap
{
  static attributes: Set<string> = new Set();
  static empty: MapObject<any, any> = new MapObject(new Map());

  @DefaultValue(Object.prototype.toString.call(new Map())) static type: string;
  _value: Map<T, U>;
  constructor(value: Map<T, U>) {
    super(value);
    this._value = value;
  }
  @attribute()
  len(): number {
    return this._value.size;
  }

  valueOf(): Map<T, U> {
    throw this._value;
  }
  merge(target: MapObject<T, U>): MapObject<T, U> {
    const newMap = new Map<T, U>(this._value);
    target._value.forEach(($1, key) => newMap.set(key, $1));
    return new MapObject(newMap);
  }

  collectionMap: ControlFlow.CollectionMapExec;
  get: ControlFlow.MapFunction;
  set: ControlFlow.MapFunction;
  has: ControlFlow.MapFunction;
  delete: ControlFlow.MapFunction;
  clear: ControlFlow.MapFunction;
  entries: ControlFlow.MapFunction;
  forEach: ControlFlow.MapFunction;
  keys: ControlFlow.MapFunction;
  size: ControlFlow.MapFunction;
  values: ControlFlow.MapFunction;
}
