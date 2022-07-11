"use strict";
// import { ControlFlow } from '../Control';
// import {
//   onlyDeclaration, Unit
// } from '../../util';
// import { ObjectTarget } from './ObjectTarget';
// import { NumberObject } from './NumberObject';
// import { StringObject } from './StringObject';
// import { BooleanObject } from './BooleanObject';
// import { decide } from '../../valueUtil';
// import { Value } from "../../../Object";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayObject = void 0;
// @Unit(ControlFlow.ArrayEnum, 'execArray')
// export class ArrayObject<T>
//   extends ObjectTarget<Array<T>>
//   implements Value.ArrayAble<T>, ControlFlow.CollectionArray<T>
// {
//   declare _value: Array<T>;
//   constructor(...values: Array<Array<T> | number>) {
//     const first = values[0];
//     const firstIsArray = first instanceof Array;
//     var init: any = null;
//     if (firstIsArray && values.length === 1) {
//       init = first;
//     } else {
//       init = new Array(...values);
//     }
//     super(init);
//     this._value = init;
//   }
//   len(): number {
//     return this._value.length;
//   }
//   first(): T {
//     return this[0];
//   }
//   last(): T {
//     return this[this._value.length - 1];
//   }
//   // @attribute()@Params('index')
//   valueOfIndex(index: number): T {
//     return this[index];
//   }
//   valueOf(): Array<T> {
//     return this._value;
//   }
//   merge(target: ArrayObject<T>): ArrayObject<T> {
//     return new ArrayObject([...this._value, ...target._value]);
//   }
//   @onlyDeclaration
//   execArray(key: ControlFlow.ArrayEnum, ...args: any[]): any {
//     return null as any;
//   }
//   // array function
//   @onlyDeclaration
//   concat(...items: (T | ArrayObject<T>)[]): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   copyWithin(target: number, start: number, end?: number): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   fill(value: number, start?: number, end?: number): this {
//     return null as any;
//   }
//   @onlyDeclaration
//   find(
//     predicate: (value: number, index: number, obj: Uint8Array) => boolean,
//     thisArg?: any
//   ): Value.Mixins<Value.ObjectAble<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   findIndex(
//     predicate: (value: number, index: number, obj: Uint8Array) => boolean,
//     thisArg?: any
//   ): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   lastIndexOf(searchElement: number, fromIndex?: number): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   pop(): ObjectTarget<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   push(...items: T[]): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   reverse(): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   shift(): Value.Mixins {
//     return null as any;
//   }
//   @onlyDeclaration
//   unshift(...items: T[]): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   slice(start?: number, end?: number): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   sort(compareFn?: (a: number, b: number) => number): this {
//     return null as any;
//   }
//   @onlyDeclaration
//   splice(start: number, deleteCount?: number, ...items: any[]): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   includes(searchElement: T, fromIndex?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   indexOf(searchElement: T, fromIndex?: number): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   join(separator?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   entries(): ObjectTarget<IterableIterator<[T, T]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): ObjectTarget<IterableIterator<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): ObjectTarget<IterableIterator<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   forEach(
//     callbackfn: (value: T, index: number, array: readonly T[]) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   filter<S extends T>(
//     predicate: (value: T, index: number, array: readonly T[]) => value is S,
//     thisArg?: any
//   ): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   map<U>(
//     callbackfn: (value: T, index: number, array: T[]) => U,
//     thisArg?: any
//   ): ArrayObject<U> {
//     return null as any;
//   }
//   @onlyDeclaration
//   every<S extends T>(
//     predicate: (value: T, index: number, array: T[]) => value is S,
//     thisArg?: any
//   ): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   some(
//     predicate: (value: T, index: number, array: T[]) => unknown,
//     thisArg?: any
//   ): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   reduce(
//     callbackfn: (
//       previousValue: T,
//       currentValue: T,
//       currentIndex: number,
//       array: T[]
//     ) => T,
//     initialValue?: T
//   ): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   reduceRight(
//     callbackfn: (
//       previousValue: T,
//       currentValue: T,
//       currentIndex: number,
//       array: T[]
//     ) => T,
//     initialValue?: T
//   ): ArrayObject<T> {
//     return null as any;
//   }
//   get length(): NumberObject {
//     return decide(this._value.length) as NumberObject;
//   }
// }
var extend_util_1 = require("../../extend-util");
var valueUtil_1 = require("../../valueUtil");
var ArrayWrapper = (0, extend_util_1.createExtendsConstruct)(Array, ['length']);
var _ArrayObject = /** @class */ (function (_super) {
    __extends(_ArrayObject, _super);
    function _ArrayObject() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var _this = this;
        var first = values[0];
        var firstIsArray = first instanceof Array;
        var init = null;
        if (firstIsArray && values.length === 1) {
            init = first;
        }
        else {
            init = new (Array.bind.apply(Array, __spreadArray([void 0], values, false)))();
        }
        _this = _super.call(this, init) || this;
        _this._value = init;
        return _this;
    }
    _ArrayObject.prototype.len = function () {
        return this._value.length;
    };
    _ArrayObject.prototype.first = function () {
        return this._value[0];
    };
    _ArrayObject.prototype.last = function () {
        return this._value[this._value.length - 1];
    };
    _ArrayObject.prototype.valueOfIndex = function (index) {
        return this._value[index];
    };
    _ArrayObject.prototype.valueOf = function () {
        return this._value;
    };
    Object.defineProperty(_ArrayObject.prototype, "length", {
        get: function () {
            return (0, valueUtil_1.decide)(this._value.length);
        },
        enumerable: false,
        configurable: true
    });
    return _ArrayObject;
}(ArrayWrapper));
var ArrayObject = _ArrayObject;
exports.ArrayObject = ArrayObject;
