"use strict";
// import { ControlFlow } from '../Control';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { onlyDeclaration, Unit } from '../../util';
// import { NumberObjectAble, NumberObject } from './NumberObject';
// import { BooleanObject } from './BooleanObject'
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringObject = void 0;
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
var extend_util_1 = require("../../extend-util");
var valueUtil_1 = require("../../valueUtil");
var StringWrapper = (0, extend_util_1.createExtendsConstruct)(String, ['length']);
var _StringObject = /** @class */ (function (_super) {
    __extends(_StringObject, _super);
    function _StringObject(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    _StringObject.prototype.valueOf = function () {
        return this._value;
    };
    Object.defineProperty(_StringObject.prototype, "length", {
        get: function () {
            return (0, valueUtil_1.decide)(this._value.length);
        },
        enumerable: false,
        configurable: true
    });
    return _StringObject;
}(StringWrapper));
var StringObject = _StringObject;
exports.StringObject = StringObject;
