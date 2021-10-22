"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCPlatformConfig = void 0;
var rxjs_1 = require("rxjs");
var BaseObject_1 = require("../../Object/BaseObject");
var QRCode = require("qrcode-generator");
var PCPlatformConfig = /** @class */ (function () {
    function PCPlatformConfig() {
    }
    PCPlatformConfig.prototype.createQrCode = function (context, option) {
        return new rxjs_1.Observable(function (sub) {
            var _a;
            var width = (_a = option === null || option === void 0 ? void 0 : option.SideLength) !== null && _a !== void 0 ? _a : 200;
            var margin = 2;
            var qrcode = QRCode((option === null || option === void 0 ? void 0 : option.type) || 4, (option === null || option === void 0 ? void 0 : option.Level) || "H");
            qrcode.addData((context !== null && context !== void 0 ? context : ""));
            qrcode.make();
            var moduleCount = qrcode.getModuleCount();
            var cellSize = (width - margin * 2) / moduleCount;
            var base64 = qrcode.createDataURL(cellSize, margin);
            // const base64 = qrcode.createDataURL(cellSize, margin).replace('data:image/gif;base64', 'data:image/png;base64');
            sub.next(new BaseObject_1.StringObject(base64));
            sub.complete();
            return {
                unsubscribe: function () { return sub.unsubscribe(); },
            };
        });
    };
    PCPlatformConfig.prototype.loadRunInfo = function () {
        throw new Error("Method not implemented.");
    };
    PCPlatformConfig.prototype.runCommand = function (command, option) {
        throw new Error("Method not implemented.");
    };
    PCPlatformConfig.prototype.open = function (url, option) {
        throw new Error("Method not implemented.");
    };
    PCPlatformConfig.prototype.loadFile = function (url, option) {
        throw new Error("Method not implemented.");
    };
    return PCPlatformConfig;
}());
exports.PCPlatformConfig = PCPlatformConfig;
//# sourceMappingURL=BasePlatform.js.map