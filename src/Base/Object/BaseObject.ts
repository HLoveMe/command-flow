import {
  ArrayAble,
  attribute,
  MapAble,
  SetAble,
  Params,
  NumberAble,
  StringAble,
  ValueAble,
  ObjectAble,
  BooleanAble,
  DateAble,
  DataAble,
} from "./ObjectTypes";
import { ControlFlow } from "../Type";
import { BaseRunTime } from "../Util/EquipmentTools";

function DefaultValue(value: string) {
  return function (target: any, propertyName: string) {
    target[propertyName] = value;
    ObjectManager.types.add(value);
  };
}

export class ObjectManager {
  static types: Set<string> = new Set();
}

export class ObjectTarget<T>
  extends BaseRunTime
  implements ObjectAble<T>, ControlFlow.Compare
{
  static attributes: Set<string> = new Set();
  compare?: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call({})) static type: string;
  _value: any;
  constructor(value: any) {
    super();
    this._value = value;
  }
  equal(target: ObjectTarget<T>): Boolean {
    return this._value == target._value;
  }
  valueOf(): any {
    return this._value;
  }
}

export class ArrayObject<T>
  extends BaseRunTime
  implements ArrayAble<T>, ControlFlow.Compare
{
  static attributes: Set<string> = new Set();
  compare?: ControlFlow.CompareExec;
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
    return this[this._value.length - 1];
  }
  @attribute()
  valueOfIndex(@Params("index") index: number): T {
    return this[index];
  }
  valueOf(): Array<T> {
    return this._value;
  }
  equal(target: ArrayObject<T>): Boolean {
    return this._value == target._value;
  }
}

export class MapObject<T, U>
  extends BaseRunTime
  implements MapAble<T, U>, ControlFlow.Compare
{
  static attributes: Set<string> = new Set();
  compare?: ControlFlow.CompareExec;
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
}

export class SetObject<T>
  extends BaseRunTime
  implements SetAble<T>, ControlFlow.Compare
{
  static attributes: Set<string> = new Set();
  compare?: ControlFlow.CompareExec;
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
    return this._value == target._value;
  }
}

export class NumberObject
  extends BaseRunTime
  implements NumberAble, ControlFlow.Compare
{
  static attributes: Set<string> = new Set();
  compare?: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Number()))
  static type: string;
  _value: number;
  constructor(value: number) {
    super();
    this._value = value;
  }
  @attribute()
  valueOf(): number {
    return this._value;
  }
  equal(target: NumberObject): Boolean {
    return this._value == target._value;
  }
}

export class StringObject
  extends BaseRunTime
  implements StringAble, ControlFlow.Compare
{
  static attributes: Set<string> = new Set();
  compare?: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new String()))
  static type: string;
  _value: string;
  constructor(value: string) {
    super();
    this._value = value;
  }
  @attribute()
  valueOf(): string {
    return this._value;
  }
  equal(target: StringObject): Boolean {
    return this._value == target._value;
  }
}

export class BooleanObject
  extends BaseRunTime
  implements BooleanAble, ControlFlow.Compare
{
  static attributes: Set<string> = new Set();
  compare?: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Boolean(1)))
  static type: string;
  _value: any;
  constructor(value: any) {
    super();
    this._value = value;
  }
  @attribute()
  valueOf(): boolean {
    return Boolean(this._value);
  }
  equal(target: BooleanObject): Boolean {
    return this.valueOf() == target.valueOf();
  }
}

export class DateObject
  extends BaseRunTime
  implements DateAble, ControlFlow.Compare
{
  static attributes: Set<string> = new Set();
  compare?: ControlFlow.CompareExec;
  @DefaultValue(Object.prototype.toString.call(new Date())) static type: string;
  _value: any;
  constructor(value: any) {
    super();
    this._value = value;
  }
  @attribute()
  timestamp(): number {
    return this.valueOf().getTime();
  }
  @attribute()
  valueOf(): Date {
    return new Date(this._value);
  }
  equal(target: DateObject): Boolean {
    return this.timestamp() == target.timestamp();
  }
}

export class DataObj extends BaseRunTime implements DataAble {
  static attributes: Set<string> = new Set();
  _value: Buffer;
  constructor(value: Buffer) {
    super();
    this._value = value;
  }
  data(): Buffer {
    return this.valueOf();
  }

  @attribute()
  valueOf(): Buffer {
    return this._value;
  }

  equal(target: ValueAble<Buffer>): Boolean {
    return false;
  }
}

const keys = Object.keys(ControlFlow.ControlEnum);
Object.keys(module.exports).forEach(($1) => {
  if ($1 != "ObjectManager") {
    const Target = module.exports[$1];
    keys.forEach((key) => {
      !Target.prototype[key] &&
        (Target.prototype[key] = function (target: ValueAble<any>) {
          return this._value == target._value;
        });
    });
    !Target.prototype["compare"] &&
      (Target.prototype["compare"] = function compare<
        T extends ControlFlow.ControlEnum
      >(type: T, target: ValueAble<any>): boolean {
        const compareFunc = (this as any)[type];
        if (typeof compareFunc == "function") {
          return (compareFunc as ControlFlow.CompareFunction).bind(this)(
            target
          );
        }
        return false;
      });
  }
});
