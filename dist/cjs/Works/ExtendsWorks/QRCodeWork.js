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
exports.QRCodeWork = void 0;
var Instruction_1 = require("../Instruction");
var rxjs_1 = require("rxjs");
var Equipment_1 = require("../../Util/Equipment");
var channel_value_util_1 = require("../../Util/channel-value-util");
/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
var QRCodeWork = /** @class */ (function (_super) {
    __extends(QRCodeWork, _super);
    function QRCodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "QRCodeWork";
        return _this;
    }
    QRCodeWork.prototype.run = function (input, option) {
        var that = this;
        return new rxjs_1.Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = "";
            else {
                target = (0, channel_value_util_1.unpackValue)(input);
            }
            var sub = that.context.platform
                .createQrCode(target, option)
                .subscribe({
                next: function (res) { return subscriber.next((0, channel_value_util_1.wrapperValue)(input, res._value)); },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); },
            });
            return {
                unsubscribe: function () {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    };
    QRCodeWork.isAble = function () {
        return Equipment_1.isJS;
        // return isNode || isWeb || isRN
    };
    return QRCodeWork;
}(Instruction_1.InstructionOTO));
exports.QRCodeWork = QRCodeWork;
