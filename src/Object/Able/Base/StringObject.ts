// import { ControlFlow } from '../Control';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { onlyDeclaration, Unit } from '../../util';
// import { NumberObjectAble, NumberObject } from './NumberObject';
// import { BooleanObject } from './BooleanObject'


// @Unit(ControlFlow.StringEnum)
// export class StringObject
//   extends ObjectTarget<string>
//   implements Value.StringAble, ControlFlow.ObjectString {
//   static type: string;
//   declare _value: string;
//   constructor(value: string = '') {
//     super(value);
//     this._value = value;
//   }

//   // @attribute()
//   valueOf(): string {
//     return this._value;
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.StringEnum, ...args: any[]) {
//     // throw new Error('Method not implemented.');
//     return null as any;
//   }

//   get length(): NumberObjectAble {
//     return new NumberObject(this._value.length);
//   }
//   @onlyDeclaration
//   anchor(name: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   big(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   blink(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   bold(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   charAt(pos: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   charCodeAt(index: number): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   codePointAt(pos: number): Value.Mixins<Value.NumberAble> {
//     return null as any;
//   }
//   @onlyDeclaration
//   concat(...args: string[]): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   endsWith(searchString: string, endPosition?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   fixed(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   fontcolor(color: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   fontsize(size: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   includes(searchString: string, position?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   indexOf(searchString: string, position?: number): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   italics(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   lastIndexOf(searchString: string, position?: number): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   link(url: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   localeCompare(that: string): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   match(regexp: RegExp): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   matchAll(regexp: RegExp): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   normalize(form?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   padEnd(targetLength: number, padString?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   padStart(targetLength: number, padString?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   repeat(count: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   replace(
//     searchValue: string | RegExp,
//     replaceValue: string | ((substring: string, ...args: any[]) => string)
//   ): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   replaceAll(
//     searchValue: string | RegExp,
//     replaceValue: string | ((substring: string, ...args: any[]) => string)
//   ): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   search(regexp: RegExp): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   slice(start: number, end?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   small(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   split(separator?: string | RegExp, limit?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   strike(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   sub(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   substr(start: number, length?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   substring(start: number, end?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLocaleLowerCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLocaleUpperCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLowerCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toUpperCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trim(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimLeft(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimRight(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toString(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   sup(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   startsWith(searchString: string, position?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimStart(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimEnd(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   at(index: number): StringObject {
//     return null as any;
//   }
// }


import { createExtendsConstruct } from '../../extend-util'
import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';
import { decide } from '../../valueUtil';
import { Value } from "../../../Object";
import { NumberObjectAble } from './NumberObject';

type StringExecInterface = ValueExec.ExecFunctionAble<String, 'length'>;
type BaseStringInterface = ValueExec.BlurExecInterface<StringExecInterface>
const StringWrapper = createExtendsConstruct<String>(String, ['length']);

class _StringObject extends StringWrapper {
  declare _value: string
  constructor(value: string) {
    super();
    this._value = value;
  }

  valueOf(): string {
    return this._value;
  }

  get length(): NumberObjectAble {
    return decide(this._value.length) as NumberObjectAble;
  }

}

interface _StringObjectAble
  extends Value.StringAble, BaseStringInterface { get length(): NumberObjectAble }
type CustomConstructor = { new <T>(source: string): _StringObjectAble } & ValueExtends.Constructor<any[]>;

type StringObjectAble = ValueExtends.WrapperReturnInterface<StringExecInterface> & Value.StringAble & { get length(): NumberObjectAble }
const StringObject = _StringObject as unknown as CustomConstructor;

export {
  StringObject,
  StringObjectAble
}
