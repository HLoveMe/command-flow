
import { ArrayAble, attribute, MapAble, SetAble, Params, NumberAble, StringAble, ValueAble, ObjectAble } from "./ObjectTypes";
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

export class ObjectTarget extends Object implements ObjectAble, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call({})) static type: string;
  _value: any;
  constructor(value: any) {
    super();
    this._value = value;
  }
  equal(target: ObjectTarget): Boolean {
    return this._value == target._value;
  }
  valueOf(): any {
    return this._value;
  }
  compare<T extends ControlFlow.ControlEnum>(type: T, target: ValueAble): boolean {
    const compareFunc = (this as any)[type];
    if (typeof compareFunc == "function") {
      return (compareFunc as ControlFlow.CompareFunction).bind(this)(target)
    }
    return false;
  }
}
// new ObjectTarget({}).compare(ControlFlow.ControlEnum.less)
export class ArrayObject<T> extends Object implements ArrayAble<T>, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call([])) static type: string;
  _value: Array<T>;
  constructor(value: Array<T>) {
    super();
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
  compare<T extends ControlFlow.ControlEnum>(type: T, target: ValueAble): boolean {
    const compareFunc = (this as any)[type];
    if (typeof compareFunc == "function") {
      return (compareFunc as ControlFlow.CompareFunction).bind(this)(target)
    }
    return false;
  }
}


export class MapObject<T, U> extends Object implements MapAble<T, U>, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call(new Map())) static type: string;
  _value: Map<T, U>;
  constructor(value: Map<T, U>) {
    super();
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
  compare<T extends ControlFlow.ControlEnum>(type: T, target: ValueAble): boolean {
    const compareFunc = (this as any)[type];
    if (typeof compareFunc == "function") {
      return (compareFunc as ControlFlow.CompareFunction).bind(this)(target)
    }
    return false;
  }
}

export class SetObject<T> extends Object implements SetAble<T>, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  @DefaultValue(Object.prototype.toString.call(new Set())) static type: string;
  _value: Set<T>;
  constructor(value: Set<T>) {
    super();
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
  compare<T extends ControlFlow.ControlEnum>(type: T, target: ValueAble): boolean {
    const compareFunc = (this as any)[type];
    if (typeof compareFunc == "function") {
      return (compareFunc as ControlFlow.CompareFunction).bind(this)(target)
    }
    return false;
  }
}

export class NumberObj extends Number implements NumberAble, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  _value: number;
  constructor(value: number) {
    super();
    this._value = value
  }
  @attribute()
  valueOf(): number {
    return this._value;
  }
  equal(target: NumberObj): Boolean {
    return this._value == target._value
  }
  compare<T extends ControlFlow.ControlEnum>(type: T, target: ValueAble): boolean {
    const compareFunc = (this as any)[type];
    if (typeof compareFunc == "function") {
      return (compareFunc as ControlFlow.CompareFunction).bind(this)(target)
    }
    return false;
  }
}

export class StringObj extends String implements StringAble, ControlFlow.Compare {
  static attributes: Set<string> = new Set();
  _value: string;
  constructor(value: string) {
    super();
    this._value = value
  }
  @attribute()
  valueOf(): string {
    return this._value;
  }
  equal(target: StringObj): Boolean {
    return this._value == target._value
  }
  compare<T extends ControlFlow.ControlEnum>(type: T, target: ValueAble): boolean {
    const compareFunc = (this as any)[type];
    if (typeof compareFunc == "function") {
      return (compareFunc as ControlFlow.CompareFunction).bind(this)(target)
    }
    return false;
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
  }
})