"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.createExtendsInstance = exports.createExtendsConstruct = void 0;
var util_1 = require("./util");
var Value = require("./Able");
var ExtendsMap;
/***
  创建新的包装对象

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const PromiseConstruct = createExtendsConstruct(Promise<number>)
  const instance: PromiseWrapper = Reflect.construct(PromiseConstruct, [(res, rej) => { res(111)}])
  instance.then(()=>{})

 */
function createExtendsConstruct(target, exclude) {
    if (exclude === void 0) { exclude = []; }
    if (!ExtendsMap)
        ExtendsMap = new Map();
    if (ExtendsMap.has(target))
        return ExtendsMap.get(target);
    var Enum = {};
    exclude = __spreadArray(__spreadArray([], exclude, true), ['constructor', 'valueOf'], false);
    Object.keys(Object.getOwnPropertyDescriptors(target.prototype)).forEach(function ($1) {
        if (!exclude.includes($1) && typeof $1 !== 'symbol') {
            Enum[$1] = $1;
        }
    });
    var KV = /** @class */ (function (_super) {
        __extends(KV, _super);
        function KV(value) {
            if (value === void 0) { value = {}; }
            var _this = _super.call(this) || this;
            _this._value = value !== null && value !== void 0 ? value : {};
            return _this;
        }
        KV = __decorate([
            (0, util_1.Unit)(Enum),
            __metadata("design:paramtypes", [Object])
        ], KV);
        return KV;
    }(Value.ObjectTarget));
    ExtendsMap.set(target, KV);
    return KV;
}
exports.createExtendsConstruct = createExtendsConstruct;
/**
 * @param target  Date
 * @param construct ['2021-06-23']
 * @param exclude
 * @returns
 *
 *
  简化 createExtendsConstruct

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const aa: PromiseWrapper = createExtendsInstance<Promise<number>>(Promise, [(res, rej) => { setTimeout(() => res(111), 2000) }])
  aa.then(res => { })

 */
function createExtendsInstance(target, construct, exclude) {
    if (exclude === void 0) { exclude = []; }
    var DateDome = createExtendsConstruct(target, exclude);
    return Reflect.construct(DateDome, construct);
}
exports.createExtendsInstance = createExtendsInstance;
