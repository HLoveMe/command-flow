import { ControlFlow } from '../Control';
// import { attribute, DefaultValue } from "../../util";
import { Value } from '../../../Object';
import { ObjectTarget } from './ObjectTarget';
import { StringObject } from './StringObject';
import { NumberObject } from './NumberObject';
import { Unit, onlyDeclaration } from '../../util';

@Unit(ControlFlow.DateEnum)
export class DateObject extends ObjectTarget<Date>
  implements Value.DateAble, ControlFlow.DateFunction, ControlFlow.ObjectDate {
  declare _value: Date;
  constructor(value: Date = new Date()) {
    super(value);
    this._value = value;
  }

  // @attribute()
  timestamp(): number {
    return this.valueOf().getTime();
  }
  // @attribute()
  valueOf(): Date {
    return new Date(this._value);
  }
  @onlyDeclaration
  execFunction(key: ControlFlow.DateEnum, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
  @onlyDeclaration
  toDateString(): StringObject {
    return null as any
  }
  @onlyDeclaration
  toTimeString(): StringObject {
    return null as any;
  }
  @onlyDeclaration
  toLocaleString(): StringObject {
    return null as any
  }
  @onlyDeclaration
  toLocaleDateString(): StringObject {
    return null as any
  }
  @onlyDeclaration
  toLocaleTimeString(): StringObject {
    return null as any
  }
  @onlyDeclaration
  getTime(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getFullYear(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getUTCFullYear(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getMonth(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getUTCMonth(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getDate(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getUTCDate(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getDay(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getUTCDay(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getHours(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getUTCHours(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getMinutes(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getUTCMinutes(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getSeconds(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getUTCSeconds(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getMilliseconds(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getUTCMilliseconds(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  getTimezoneOffset(): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setTime(time: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setMilliseconds(ms: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setUTCMilliseconds(ms: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setSeconds(sec: number, ms?: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setUTCSeconds(sec: number, ms?: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setMinutes(min: number, sec?: number, ms?: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setUTCMinutes(min: number, sec?: number, ms?: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setHours(
    hours: number,
    min?: number,
    sec?: number,
    ms?: number
  ): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setUTCHours(
    hours: number,
    min?: number,
    sec?: number,
    ms?: number
  ): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setDate(date: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setUTCDate(date: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setMonth(month: number, date?: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setUTCMonth(month: number, date?: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setFullYear(year: number, month?: number, date?: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  setUTCFullYear(year: number, month?: number, date?: number): NumberObject {
    return null as any
  }
  @onlyDeclaration
  toUTCString(): StringObject {
    return null as any
  }
  @onlyDeclaration
  toISOString(): StringObject {
    return null as any
  }
  @onlyDeclaration
  toJSON(key?: any): StringObject {
    return null as any
  }
}
