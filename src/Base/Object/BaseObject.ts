
import { ArrayAble, attribute, MapAble, SetAble, Params, NumberAble, StringAble, ValueAble, ObjectAble, BooleanAble, DateAble } from "./ObjectTypes";
import { ControlFlow } from "../Type";

function DefaultValue(value: string) {
  return function (target: any, propertyName: string) {
    target[propertyName] = value;
    ObjectManager.types.add(value);
  }
}

export class ObjectManager {
  static types: Set<string> = new Set();
}

export class ObjectTarget  implements ObjectAble, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  compare?:ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call({})) static type: string;
  _value: any;
  constructor(value: any) {
    this._value = value;
  }
  equal(target: ObjectTarget): Boolean {
    return this._value == target._value;
  }
  valueOf(): any {
    return this._value;
  }
}

export class ArrayObject<T>  implements ArrayAble<T>, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  compare?:ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call([])) static type: string;
  _value: Array<T>;
  constructor(value: Array<T>) {
    this._value = value;
  }
  @attribute()
  len(): number {
    return this._value.length;
  }
  @attribute()
  first(): T {
    return this[0];
  }
  @attribute()
  last(): T {
    return this[this._value.length - 1]
  }
  @attribute()
  valueOfIndex(@Params("index") index: number): T {
    return this[index]
  }
  valueOf(): Array<T> {
    return this._value;
  }
  equal(target: ArrayObject<T>): Boolean {
    return this._value == target._value;
  }
}


export class MapObject<T, U> implements MapAble<T, U>, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  compare?:ControlFlow.CompareExec;
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

export class SetObject<T>  implements SetAble<T>, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  compare?:ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Set())) static type: string;
  _value: Set<T>;
  constructor(value: Set<T>) {
    this._value = value;
  }
  @attribute()
  len(): number {
    return this._value.size;
  }
  @attribute()
  has(@Params("value") value: T): boolean {
    return this._value.has(value);
  }
  valueOf(): Set<T> {
    throw this._value;
  }
  equal(target: SetObject<T>): Boolean {
    return this._value == target._value
  }
}

export class NumberObj  implements NumberAble, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  compare?:ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Number())) static type: string;
  _value: number;
  constructor(value: number) {
    this._value = value
  }
  @attribute()
  valueOf(): number {
    return this._value;
  }
  equal(target: NumberObj): Boolean {
    return this._value == target._value
  }
}

export class StringObj  implements StringAble, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  compare?:ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new String())) static type: string;
  _value: string;
  constructor(value: string) {
    this._value = value
  }
  @attribute()
  valueOf(): string {
    return this._value;
  }
  equal(target: StringObj): Boolean {
    return this._value == target._value
  }
}


export class BooleanObj  implements BooleanAble, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  compare?:ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Boolean(1))) static type: string;
  _value: any;
  constructor(value: any) {
    this._value = value
  }
  @attribute()
  valueOf(): boolean {
    return Boolean(this._value);
  }
  equal(target: BooleanObj): Boolean {
    return this.valueOf() == target.valueOf()
  }
}


export class DateObj implements DateAble, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  compare?:ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Date())) static type: string;
  _value: any;
  constructor(value: any) {
    this._value = value
  }
  timestamp(): number {
    return this.valueOf().getTime();
  }
  @attribute()
  valueOf(): Date {
    return new Date(this._value);
  }
  equal(target: DateObj): Boolean {
    return this._value == target._value
  }

}

const keys = Object.keys(ControlFlow.ControlEnum)
Object.keys(module.exports).forEach($1 => {
  if ($1 != "ObjectManager") {
    const Target = module.exports[$1];
    keys.forEach(key => {
      !Target.prototype[key] && (Target.prototype[key] = function (target: ValueAble) {
        return this._value == target._value;
      })
    })
    !Target.prototype["compare"] && (Target.prototype["compare"] = function compare<T extends ControlFlow.ControlEnum>(type: T, target: ValueAble): boolean {
      const compareFunc = (this as any)[type];
      if (typeof compareFunc == "function") {
        return (compareFunc as ControlFlow.CompareFunction).bind(this)(target)
      }
      return false;
    })
  }
})