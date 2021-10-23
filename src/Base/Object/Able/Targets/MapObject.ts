import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, Params } from "../../util";
import { Value } from "../../../Types";

export class MapObject<T, U>
implements Value.MapAble<T, U>, ControlFlow.Compare<Value.MapAble<T, U>>
{
static attributes: Set<string> = new Set();
compare: ControlFlow.CompareExec;
@DefaultValue(Object.prototype.toString.call(new Map())) static type: string;
_value: Map<T, U>;
constructor(value: Map<T, U>) {
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
equal(target: MapObject<T, U>): Boolean {
  return this._value == target._value;
}
}
