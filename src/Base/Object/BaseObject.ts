import { ArrayAble, attribute, MapAble, SetAble, Params } from "./ObjectTypes";
function DefaultValue(value: string) {
  return function (target: any, propertyName: string) {
    target[propertyName] = value;
    BaseObject.types.add(value);
  }
}

class BaseObject {
  static types: Set<string> = new Set();
}


export class ArrayObject<T> extends Array<T> implements ArrayAble<T> {
  attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call([])) static type: string;
  @attribute()
  len(): number {
    return this.length;
  }
  @attribute()
  first(): T {
    return this[0];
  }
  @attribute()
  last(): T {
    return this[this.length - 1]
  }
  @attribute()
  valueOf(@Params("index") index: number): T {
    return this[index]
  }
}


export class MapObject<T, U> extends Map<T, U> implements MapAble<T, U> {
  attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call(new Map())) static type: string;
  @attribute()
  len(): number {
    return this.size;
  }
  @attribute()
  get(@Params("key") key: T): U {
    return this.get(key);
  }
}

export class SetObject<T> extends Set<T> implements SetAble {
  attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call(new Set())) static type: string;
  @attribute()
  len(): number {
    return this.size;
  }
  @attribute()
  has(@Params("value") value: T): boolean {
    return super.has(value);
  }
}