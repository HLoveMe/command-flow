
import { Unit } from '../../util'
import * as Value from "..";

type KeyExclude<T, E extends string | number | symbol> = keyof Omit<T, E>;
type ValueInclude<T, E> = {
  [K in keyof T]: T[K] extends E ? K : never
}[keyof T];
type ValidKey<T, K extends string | number | symbol, E> = Extract<KeyExclude<T, K>, ValueInclude<T, E>>;
type GetReturnWrapper<T> = T extends null | undefined
  ? Value.OptionalObject
  : T extends number ? Value.NumberObject
  : T extends string ? Value.StringObject
  : T extends boolean ? Value.BooleanObject
  : T extends Array<infer U> ? Value.ArrayObject<U>
  : T extends Map<infer K, infer U> ? Value.MapObject<K, U>
  : T extends Set<infer U> ? Value.SetObject<U>
  : T extends Date ? Value.DateObject
  : T extends ArrayBuffer ? Value.DataObject
  : Value.ObjectTarget<T>

type GetInterface<T, U extends string | number | symbol, E> = Pick<T, ValidKey<T, U, E>>

type ResetFunctionType<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer R ? (...args: P) => GetReturnWrapper<R> : T;

type CreateNewInterface<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? ResetFunctionType<T[K]> : T[K]
}

export type ExtendsType<T> = CreateNewInterface<GetInterface<T, 'constructor' | 'valueOf', (...args: any[]) => any>>;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ExtendsMap = new Map<any, Function>();

export function createExtendsConstruct<T extends any>(target: T, exclude: string[] = []): Function {
  if (ExtendsMap.has(target)) return ExtendsMap.get(target) as unknown as Function
  const Enum = {};
  const tempTarget = Reflect.construct(target as Function, [])
  exclude = [...exclude, 'constructor', 'valueOf'];
  Object.keys(tempTarget).forEach($1 => {
    if (!exclude.includes($1) && typeof $1 !== 'symbol') {
      Enum[$1] = $1;
    }
  })
  const result: RegExpExecArray | null = /\[object (\w+)\]/g.exec(Object.prototype.toString.call(tempTarget));
  if (!!result === false) return Function;
  @Unit(Enum, `exec${result[1]}`)
  class KV extends Value.ObjectTarget<T> {
    declare _value: T;
  }
  ExtendsMap.set(target, KV);
  return KV
}

/**
  type DateType = ExtendsType<Date>
  const DateDome = createExtendsConstruct(Date)
  const aaa: DateType = Reflect.construct(DateDome, [new Date()])

 * @param target  Date
 * @param construct ['2021-06-23']
 * @param exclude 
 * @returns 
 */
export function createExtendsInstance<T>(target: Function, construct: any[], exclude: string[] = []): ExtendsType<T> {
  type DateType = ExtendsType<T>
  const DateDome = createExtendsConstruct(target)
  return Reflect.construct(DateDome, construct) as DateType
}





// type DateAble = CreateNewInterface<GetInterface<Date, 'getVarDate' | 'constructor' | 'valueOf', (...args: any[]) => any>>

// class A extends Value.ObjectTarget<any> implements DateAble {
//   [Symbol.toPrimitive](hint: string): Value.StringObject | Value.NumberObject {
//     return decide(this._value[Symbol.toPrimitive](hint))
//   }

//   // [Symbol.toPrimitive](hint: string): string | number {
//   //   return null as any;
//   // }
//   toString(): Value.StringObject {
//     return null as any;
//   }
//   toDateString(): Value.StringObject {
//     return null as any;
//   }
//   toTimeString(): Value.StringObject {
//     return null as any;
//   }
//   toLocaleString(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): Value.StringObject {
//     return null as any
//   }
//   toLocaleDateString(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): Value.StringObject {
//     return null as any
//   }
//   toLocaleTimeString(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): Value.StringObject {
//     return null as any;
//   }
//   getTime(): Value.NumberObject {
//     return null as any;
//   }
//   getFullYear(): Value.NumberObject {
//     return null as any;
//   }
//   getUTCFullYear(): Value.NumberObject {
//     return null as any;
//   }
//   getMonth(): Value.NumberObject {
//     return null as any;
//   }
//   getUTCMonth(): Value.NumberObject {
//     return null as any;
//   }
//   getDate(): Value.NumberObject {
//     return null as any;
//   }
//   getUTCDate(): Value.NumberObject {
//     return null as any;
//   }
//   getDay(): Value.NumberObject {
//     return null as any;
//   }
//   getUTCDay(): Value.NumberObject {
//     return null as any;
//   }
//   getHours(): Value.NumberObject {
//     return null as any;
//   }
//   getUTCHours(): Value.NumberObject {
//     return null as any;
//   }
//   getMinutes(): Value.NumberObject {
//     return null as any;
//   }
//   getUTCMinutes(): Value.NumberObject {
//     return null as any;
//   }
//   getSeconds(): Value.NumberObject {
//     return null as any;
//   }
//   getUTCSeconds(): Value.NumberObject {
//     return null as any;
//   }
//   getMilliseconds(): Value.NumberObject {
//     return null as any;
//   }
//   getUTCMilliseconds(): Value.NumberObject {
//     return null as any;
//   }
//   getTimezoneOffset(): Value.NumberObject {
//     return null as any;
//   }
//   setTime(time: number): Value.NumberObject {
//     return null as any;
//   }
//   setMilliseconds(ms: number): Value.NumberObject {
//     return null as any;
//   }
//   setUTCMilliseconds(ms: number): Value.NumberObject {
//     return null as any;
//   }
//   setSeconds(sec: number, ms?: number): Value.NumberObject {
//     return null as any;
//   }
//   setUTCSeconds(sec: number, ms?: number): Value.NumberObject {
//     return null as any;
//   }
//   setMinutes(min: number, sec?: number, ms?: number): Value.NumberObject {
//     return null as any;
//   }
//   setUTCMinutes(min: number, sec?: number, ms?: number): Value.NumberObject {
//     return null as any;
//   }
//   setHours(hours: number, min?: number, sec?: number, ms?: number): Value.NumberObject {
//     return null as any;
//   }
//   setUTCHours(hours: number, min?: number, sec?: number, ms?: number): Value.NumberObject {
//     return null as any;
//   }
//   setDate(date: number): Value.NumberObject {
//     return null as any;
//   }
//   setUTCDate(date: number): Value.NumberObject {
//     return null as any;
//   }
//   setMonth(month: number, date?: number): Value.NumberObject {
//     return null as any;
//   }
//   setUTCMonth(month: number, date?: number): Value.NumberObject {
//     return null as any;
//   }
//   setFullYear(year: number, month?: number, date?: number): Value.NumberObject {
//     return null as any;
//   }
//   setUTCFullYear(year: number, month?: number, date?: number): Value.NumberObject {
//     return null as any;
//   }
//   toUTCString(): Value.StringObject {
//     return null as any;
//   }
//   toISOString(): Value.StringObject {
//     return null as any;
//   }
//   toJSON(key?: any): Value.StringObject {
//     new Date().getVarDate
//     return null as any;
//   }
// }




