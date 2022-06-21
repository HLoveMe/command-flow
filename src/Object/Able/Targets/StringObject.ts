import { ControlFlow } from '../../Control';
import { Value } from '../../../Types';
import { ObjectTarget } from './ObjectTarget';
import { onlyDeclaration, StringUint } from '../../util';
import { NumberObject } from './NumberObject';


@StringUint
export class StringObject
  extends ObjectTarget<string>
  implements Value.StringAble, ControlFlow.ObjectString {
  static type: string;
  declare _value: string;
  constructor(value: string = '') {
    super(value);
    this._value = value;
  }

  // @attribute()
  valueOf(): string {
    return this._value;
  }
  @onlyDeclaration
  execString(key: ControlFlow.StringEnum, ...args: any[]) {
    // throw new Error('Method not implemented.');
    return null as any;
  }
  
  get length(): Value.NumberAble {
    return new NumberObject(this._value.length);
  }
  @onlyDeclaration
  anchor(name: string): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  big(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  blink(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  bold(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  charAt(pos: number): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  charCodeAt(index: number): Value.NumberAble {
    return null as any;
  } 
  @onlyDeclaration
  codePointAt(pos: number): Value.Mixins<Value.NumberAble> {
    return null as any;
  } 
  @onlyDeclaration
  concat(...args: string[]): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  endsWith(searchString: string, endPosition?: number): Value.BooleanAble {
    return null as any;
  } 
  @onlyDeclaration
  fixed(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  fontcolor(color: string): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  fontsize(size: number): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  includes(searchString: string, position?: number): Value.BooleanAble {
    return null as any;
  } 
  @onlyDeclaration
  indexOf(searchString: string, position?: number): Value.NumberAble {
    return null as any;
  } 
  @onlyDeclaration
  italics(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  lastIndexOf(searchString: string, position?: number): Value.NumberAble {
    return null as any;
  } 
  @onlyDeclaration
  link(url: string): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  localeCompare(that: string): Value.NumberAble {
    return null as any;
  } 
  @onlyDeclaration
  match(regexp: RegExp): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  matchAll(regexp: RegExp): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  normalize(form: string): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  padEnd(targetLength: number, padString?: string): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  padStart(targetLength: number, padString?: string): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  repeat(count: number): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  replace(
    searchValue: string | RegExp,
    replaceValue: string | ((substring: string, ...args: any[]) => string)
  ): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  replaceAll(
    searchValue: string | RegExp,
    replaceValue: string | ((substring: string, ...args: any[]) => string)
  ): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  search(regexp: RegExp): Value.NumberAble {
    return null as any;
  } 
  @onlyDeclaration
  slice(start: number, end?: number): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  small(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  split(separator?: string | RegExp, limit?: number): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  strike(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  sub(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  substr(start: number, length?: number): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  substring(start: number, end?: number): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  toLocaleLowerCase(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  toLocaleUpperCase(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  toLowerCase(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  toUpperCase(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  trim(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  trimLeft(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  trimRight(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  toString(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  sup(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  startsWith(searchString: string, position?: number): Value.BooleanAble {
    return null as any;
  } 
  @onlyDeclaration
  trimStart(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  trimEnd(): Value.StringAble {
    return null as any;
  } 
  @onlyDeclaration
  at(index: number): Value.StringAble {
    return null as any;
  }
}
