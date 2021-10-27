import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, Params } from "../../util";
import { Value } from "../../../Types";
import { ObjectTarget } from "./ObjectTarget";

export class MapObject<T, U>
  extends ObjectTarget<Map<T, U>>
  implements Value.MapAble<T, U>, ControlFlow.Compare<Value.MapAble<T, U>>
{
  static attributes: Set<string> = new Set();
  static empty: MapObject<any, any> = new MapObject(new Map());
  compare: ControlFlow.CompareExec;
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
  @attribute()
  get(@Params("key") key: T): U {
    return this.get(key);
  }
  valueOf(): Map<T, U> {
    throw this._value;
  }
}
