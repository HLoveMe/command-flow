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
/**
 * 字符串生产QRcode base64
 */
var QRCodeWork = /** @class */ (function (_super) {
    __extends(QRCodeWork, _super);
    function QRCodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "OpenURLWork";
        return _this;
    }
    QRCodeWork.prototype.run = function (input, option) {
        var that = this;
        return new rxjs_1.Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = "";
            else {
                target = input.valueOf().toString();
            }
            var sub = that.context.platform
                .createQrCode(target)
                .subscribe({
                next: function (res) { return subscriber.next(res); },
                complete: function () { return subscriber.complete(); },
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
        return Equipment_1.isNode || Equipment_1.isWeb || Equipment_1.isRN;
    };
    return QRCodeWork;
}(Instruction_1.InstructionOTO));
exports.QRCodeWork = QRCodeWork;
//# sourceMappingURL=QRCodeWork.js.map