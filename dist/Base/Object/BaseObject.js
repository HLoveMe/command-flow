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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateObj = exports.BooleanObj = exports.StringObj = exports.NumberObj = exports.SetObject = exports.MapObject = exports.ArrayObject = exports.ObjectTarget = exports.ObjectManager = void 0;
var ObjectTypes_1 = require("./ObjectTypes");
var Type_1 = require("../Type");
var Environment_1 = require("./Environment");
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
    ObjectTarget.attributes = new Set();
    __decorate([
        DefaultValue(Object.prototype.toString.call({})),
        __metadata("design:type", String)
    ], ObjectTarget, "type", void 0);
    return ObjectTarget;
}(Environment_1.BaseRunTime));
exports.ObjectTarget = ObjectTarget;
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
    ArrayObject.attributes = new Set();
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], ArrayObject.prototype, "len", null);
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "first", null);
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "last", null);
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __param(0, (0, ObjectTypes_1.Params)("index")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "valueOfIndex", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call([])),
        __metadata("design:type", String)
    ], ArrayObject, "type", void 0);
    return ArrayObject;
}(Environment_1.BaseRunTime));
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
    MapObject.attributes = new Set();
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], MapObject.prototype, "len", null);
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __param(0, (0, ObjectTypes_1.Params)("key")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], MapObject.prototype, "get", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Map())),
        __metadata("design:type", String)
    ], MapObject, "type", void 0);
    return MapObject;
}(Environment_1.BaseRunTime));
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
    SetObject.attributes = new Set();
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], SetObject.prototype, "len", null);
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __param(0, (0, ObjectTypes_1.Params)("value")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], SetObject.prototype, "has", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Set())),
        __metadata("design:type", String)
    ], SetObject, "type", void 0);
    return SetObject;
}(Environment_1.BaseRunTime));
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
    NumberObj.attributes = new Set();
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], NumberObj.prototype, "valueOf", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Number())),
        __metadata("design:type", String)
    ], NumberObj, "type", void 0);
    return NumberObj;
}(Environment_1.BaseRunTime));
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
    StringObj.attributes = new Set();
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], StringObj.prototype, "valueOf", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new String())),
        __metadata("design:type", String)
    ], StringObj, "type", void 0);
    return StringObj;
}(Environment_1.BaseRunTime));
exports.StringObj = StringObj;
var BooleanObj = /** @class */ (function (_super) {
    __extends(BooleanObj, _super);
    function BooleanObj(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    BooleanObj.prototype.valueOf = function () {
        return Boolean(this._value);
    };
    BooleanObj.prototype.equal = function (target) {
        return this.valueOf() == target.valueOf();
    };
    BooleanObj.attributes = new Set();
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], BooleanObj.prototype, "valueOf", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Boolean(1))),
        __metadata("design:type", String)
    ], BooleanObj, "type", void 0);
    return BooleanObj;
}(Environment_1.BaseRunTime));
exports.BooleanObj = BooleanObj;
var DateObj = /** @class */ (function (_super) {
    __extends(DateObj, _super);
    function DateObj(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    DateObj.prototype.timestamp = function () {
        return this.valueOf().getTime();
    };
    DateObj.prototype.valueOf = function () {
        return new Date(this._value);
    };
    DateObj.prototype.equal = function (target) {
        return this.timestamp() == target.timestamp();
    };
    DateObj.attributes = new Set();
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], DateObj.prototype, "timestamp", null);
    __decorate([
        (0, ObjectTypes_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Date)
    ], DateObj.prototype, "valueOf", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Date())),
        __metadata("design:type", String)
    ], DateObj, "type", void 0);
    return DateObj;
}(Environment_1.BaseRunTime));
exports.DateObj = DateObj;
var keys = Object.keys(Type_1.ControlFlow.ControlEnum);
Object.keys(module.exports).forEach(function ($1) {
    if ($1 != "ObjectManager") {
        var Target_1 = module.exports[$1];
        keys.forEach(function (key) {
            !Target_1.prototype[key] &&
                (Target_1.prototype[key] = function (target) {
                    return this._value == target._value;
                });
        });
        !Target_1.prototype["compare"] &&
            (Target_1.prototype["compare"] = function compare(type, target) {
                var compareFunc = this[type];
                if (typeof compareFunc == "function") {
                    return compareFunc.bind(this)(target);
                }
                return false;
            });
    }
});
//# sourceMappingURL=BaseObject.js.map