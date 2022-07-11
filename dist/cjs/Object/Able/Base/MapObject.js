"use strict";
// import { ControlFlow } from '../Control';
// import { onlyDeclaration, Unit } from '../../util';
// import { BaseType } from '../../../Types';
// import { Value } from '../../../Object'
// import { ObjectTarget } from './ObjectTarget';
// import { decide } from '../../valueUtil';
// import { NumberObject } from './NumberObject';
// // @MapUint
// @Unit(ControlFlow.MapEnum)
// export class MapObject<T, U>
//   extends ObjectTarget<Map<T, U>>
//   implements Value.MapAble<T, U>, ControlFlow.CollectionMap<T, U>
// {
//   declare _value: Map<T, U>;
//   constructor(value: Map<T, U> = new Map()) {
//     super(value);
//     this._value = new Map(value);
//   }
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
exports.MapObject = void 0;
//   // @attribute()
//   len(): number {
//     return this._value.size;
//   }
//   valueOf(): Map<T, U> {
//     return this._value;
//   }
//   merge(target: MapObject<T, U>): MapObject<T, U> {
//     const newMap = new Map<T, U>(this._value);
//     target._value.forEach(($1, key) => newMap.set(key, $1));
//     return new MapObject(newMap);
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.MapEnum, ...args: any[]): U | void {
//     return null as any;
//   }
//   @onlyDeclaration
//   get(key: string): U | void {
//     return null as any;
//   }
//   @onlyDeclaration
//   set(key: string, value: BaseType): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   has(key: string): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   delete(key: string): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   clear(): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   entries(): Value.ObjectAble<IterableIterator<[T, U]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   forEach(
//     callback: (value: U, key: T, map: Map<T, U>) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): Value.ObjectAble<IterableIterator<U>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }
//   get size(): Value.NumberAble {
//     return decide(this._value.size) as NumberObject;
//   }
// }
var extend_util_1 = require("../../extend-util");
var valueUtil_1 = require("../../valueUtil");
var MapWrapper = (0, extend_util_1.createExtendsConstruct)(Map, ['size']);
var _MapObject = /** @class */ (function (_super) {
    __extends(_MapObject, _super);
    function _MapObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MapObject.prototype.valueOf = function () {
        return this._value;
    };
    _MapObject.prototype.len = function () {
        return this._value.size;
    };
    Object.defineProperty(_MapObject.prototype, "size", {
        get: function () {
            return (0, valueUtil_1.decide)(this._value.size);
        },
        enumerable: false,
        configurable: true
    });
    return _MapObject;
}(MapWrapper));
var MapObject = _MapObject;
exports.MapObject = MapObject;
