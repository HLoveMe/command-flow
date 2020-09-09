"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectTypes_1 = require("./ObjectTypes");
var Type_1 = require("../Type");
function DefaultValue(value) {
    return function (target, propertyName) {
        target[propertyName] = value;
        ObjectManager.types.add(value);
    };
}
var ObjectManager = /** @class */ (function () {
    function ObjectManager() {
    }
    ObjectManager.types = new Set();
    return ObjectManager;
}());
exports.ObjectManager = ObjectManager;
var ObjectTarget = /** @class */ (function (_super) {
    __extends(ObjectTarget, _super);
    function ObjectTarget(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    ObjectTarget.prototype.equal = function (target) {
        return this._value == target._value;
    };
    ObjectTarget.prototype.valueOf = function () {
        return this._value;
    };
    ObjectTarget.prototype.compare = function (type, target) {
        var compareFunc = this[type];
        if (typeof compareFunc == "function") {
            return compareFunc.bind(this)(target);
        }
        return false;
    };
    ObjectTarget.attributes = new Set();
    __decorate([
        DefaultValue(Object.prototype.toString.call({})),
        __metadata("design:type", String)
    ], ObjectTarget, "type", void 0);
    return ObjectTarget;
}(Object));
exports.ObjectTarget = ObjectTarget;
// new ObjectTarget({}).compare(ControlFlow.ControlEnum.less)
var ArrayObject = /** @class */ (function (_super) {
    __extends(ArrayObject, _super);
    function ArrayObject(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    ArrayObject.prototype.len = function () {
        return this._value.length;
    };
    ArrayObject.prototype.first = function () {
        return this[0];
    };
    ArrayObject.prototype.last = function () {
        return this[this._value.length - 1];
    };
    ArrayObject.prototype.valueOfIndex = function (index) {
        return this[index];
    };
    ArrayObject.prototype.valueOf = function () {
        return this._value;
    };
    ArrayObject.prototype.equal = function (target) {
        return this._value == target._value;
    };
    ArrayObject.prototype.compare = function (type, target) {
        var compareFunc = this[type];
        if (typeof compareFunc == "function") {
            return compareFunc.bind(this)(target);
        }
        return false;
    };
    ArrayObject.attributes = new Set();
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], ArrayObject.prototype, "len", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "first", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "last", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __param(0, ObjectTypes_1.Params("index")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "valueOfIndex", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call([])),
        __metadata("design:type", String)
    ], ArrayObject, "type", void 0);
    return ArrayObject;
}(Object));
exports.ArrayObject = ArrayObject;
var MapObject = /** @class */ (function (_super) {
    __extends(MapObject, _super);
    function MapObject(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    MapObject.prototype.len = function () {
        return this._value.size;
    };
    MapObject.prototype.get = function (key) {
        return this.get(key);
    };
    MapObject.prototype.valueOf = function () {
        throw this._value;
    };
    MapObject.prototype.equal = function (target) {
        return this._value == target._value;
    };
    MapObject.prototype.compare = function (type, target) {
        var compareFunc = this[type];
        if (typeof compareFunc == "function") {
            return compareFunc.bind(this)(target);
        }
        return false;
    };
    MapObject.attributes = new Set();
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], MapObject.prototype, "len", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __param(0, ObjectTypes_1.Params("key")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], MapObject.prototype, "get", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Map())),
        __metadata("design:type", String)
    ], MapObject, "type", void 0);
    return MapObject;
}(Object));
exports.MapObject = MapObject;
var SetObject = /** @class */ (function (_super) {
    __extends(SetObject, _super);
    function SetObject(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    SetObject.prototype.len = function () {
        return this._value.size;
    };
    SetObject.prototype.has = function (value) {
        return this._value.has(value);
    };
    SetObject.prototype.valueOf = function () {
        throw this._value;
    };
    SetObject.prototype.equal = function (target) {
        return this._value == target._value;
    };
    SetObject.prototype.compare = function (type, target) {
        var compareFunc = this[type];
        if (typeof compareFunc == "function") {
            return compareFunc.bind(this)(target);
        }
        return false;
    };
    SetObject.attributes = new Set();
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], SetObject.prototype, "len", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __param(0, ObjectTypes_1.Params("value")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], SetObject.prototype, "has", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Set())),
        __metadata("design:type", String)
    ], SetObject, "type", void 0);
    return SetObject;
}(Object));
exports.SetObject = SetObject;
var NumberObj = /** @class */ (function (_super) {
    __extends(NumberObj, _super);
    function NumberObj(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    NumberObj.prototype.valueOf = function () {
        return this._value;
    };
    NumberObj.prototype.equal = function (target) {
        return this._value == target._value;
    };
    NumberObj.prototype.compare = function (type, target) {
        var compareFunc = this[type];
        if (typeof compareFunc == "function") {
            return compareFunc.bind(this)(target);
        }
        return false;
    };
    NumberObj.attributes = new Set();
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], NumberObj.prototype, "valueOf", null);
    return NumberObj;
}(Number));
exports.NumberObj = NumberObj;
var StringObj = /** @class */ (function (_super) {
    __extends(StringObj, _super);
    function StringObj(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    StringObj.prototype.valueOf = function () {
        return this._value;
    };
    StringObj.prototype.equal = function (target) {
        return this._value == target._value;
    };
    StringObj.prototype.compare = function (type, target) {
        var compareFunc = this[type];
        if (typeof compareFunc == "function") {
            return compareFunc.bind(this)(target);
        }
        return false;
    };
    StringObj.attributes = new Set();
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], StringObj.prototype, "valueOf", null);
    return StringObj;
}(String));
exports.StringObj = StringObj;
var keys = Object.keys(Type_1.ControlFlow.ControlEnum);
Object.keys(module.exports).forEach(function ($1) {
    if ($1 != "ObjectManager") {
        var Target_1 = module.exports[$1];
        keys.forEach(function (key) {
            !Target_1.prototype[key] && (Target_1.prototype[key] = function (target) {
                return this._value == target._value;
            });
        });
    }
});
//# sourceMappingURL=BaseObject.js.map