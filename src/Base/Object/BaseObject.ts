import { ArrayAble, attribute, MapAble, SetAble } from "./ObjectTypes";
export function DefaultValue(value: string) {
  return function (target: any, propertyName: string) {
    target[propertyName] = value;
    BaseObject.types.add(value);
  }
}

class BaseObject {
  static types: Set<string> = new Set();
}


export class ArrayObject<T> extends Array<T> implements ArrayAble {
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
}


export class MapObject<T, U> extends Map<T, U> implements MapAble {
  attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call(new Map())) static type: string;
  @attribute()
  len(): number {
    return this.size;
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
  has(tar: T): boolean {
    return super.has(tar);
  }
}