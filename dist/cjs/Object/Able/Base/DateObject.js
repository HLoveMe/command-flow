"use strict";
// import { ControlFlow } from '../Control';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { StringObject } from './StringObject';
// import { NumberObject } from './NumberObject';
// import { Unit, onlyDeclaration } from '../../util';
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
exports.DateObject = void 0;
// @Unit(ControlFlow.DateEnum)
// export class DateObject extends ObjectTarget<Date>
//   implements Value.DateAble, ControlFlow.DateFunction, ControlFlow.ObjectDate {
//   declare _value: Date;
//   constructor(value: Date = new Date()) {
//     super(value);
//     this._value = value;
//   }
//   // @attribute()
//   timestamp(): number {
//     return this.valueOf().getTime();
//   }
//   // @attribute()
//   valueOf(): Date {
//     return new Date(this._value);
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.DateEnum, ...args: any[]) {
//     throw new Error('Method not implemented.');
//   }
//   @onlyDeclaration
//   toDateString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toTimeString(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLocaleString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toLocaleDateString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toLocaleTimeString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getTime(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getFullYear(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCFullYear(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getMonth(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCMonth(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getDate(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCDate(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getDay(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCDay(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getHours(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCHours(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getMinutes(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCMinutes(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getSeconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCSeconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getMilliseconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCMilliseconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getTimezoneOffset(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setTime(time: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setMilliseconds(ms: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCMilliseconds(ms: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setSeconds(sec: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCSeconds(sec: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setMinutes(min: number, sec?: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCMinutes(min: number, sec?: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setHours(
//     hours: number,
//     min?: number,
//     sec?: number,
//     ms?: number
//   ): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCHours(
//     hours: number,
//     min?: number,
//     sec?: number,
//     ms?: number
//   ): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setDate(date: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCDate(date: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setMonth(month: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCMonth(month: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setFullYear(year: number, month?: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCFullYear(year: number, month?: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toUTCString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toISOString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toJSON(key?: any): StringObject {
//     return null as any
//   }
// }
var extend_util_1 = require("../../extend-util");
var valueUtil_1 = require("../../valueUtil");
var DateWrapper = (0, extend_util_1.createExtendsConstruct)(Date);
var _DateObject = /** @class */ (function (_super) {
    __extends(_DateObject, _super);
    function _DateObject(value) {
        if (value === void 0) { value = new Date(); }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    _DateObject.prototype.valueOf = function () {
        return this._value;
    };
    _DateObject.prototype.toLocaleString = function () {
        return (0, valueUtil_1.decide)(this._value.toLocaleDateString());
    };
    _DateObject.prototype.timestamp = function () {
        return (0, valueUtil_1.decide)(this._value.getDate());
    };
    return _DateObject;
}(DateWrapper));
var DateObject = _DateObject;
exports.DateObject = DateObject;
