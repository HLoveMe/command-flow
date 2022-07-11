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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64EnCodeWork = exports.Base64DecodeWork = void 0;
var js_base64_1 = require("js-base64");
var Instruction_1 = require("../Instruction");
var rxjs_1 = require("rxjs");
var Equipment_1 = require("../../Util/Equipment");
var channel_value_util_1 = require("../../Util/channel-value-util");
//编码
var Base64EnCodeWork = /** @class */ (function (_super) {
    __extends(Base64EnCodeWork, _super);
    function Base64EnCodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Base64EnCodeWork";
        return _this;
    }
    Base64EnCodeWork.prototype.run = function (input) {
        return new rxjs_1.Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0, channel_value_util_1.unpackValue)(input);
            }
            subscriber.next((0, channel_value_util_1.wrapperValue)(input, js_base64_1.Base64.encode(target)));
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    Base64EnCodeWork.isAble = function () {
        return Equipment_1.isJS;
    };
    return Base64EnCodeWork;
}(Instruction_1.InstructionMTM));
exports.Base64EnCodeWork = Base64EnCodeWork;
//解码
var Base64DecodeWork = /** @class */ (function (_super) {
    __extends(Base64DecodeWork, _super);
    function Base64DecodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Base64DecodeWork";
        return _this;
    }
    Base64DecodeWork.prototype.run = function (input) {
        return new rxjs_1.Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0, channel_value_util_1.unpackValue)(input);
            }
            subscriber.next((0, channel_value_util_1.wrapperValue)(input, js_base64_1.Base64.decode(target)));
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    Base64DecodeWork.isAble = function () {
        return Equipment_1.isJS;
    };
    return Base64DecodeWork;
}(Instruction_1.InstructionMTM));
exports.Base64DecodeWork = Base64DecodeWork;
