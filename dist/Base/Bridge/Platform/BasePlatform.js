"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformBridge = void 0;
var rxjs_1 = require("rxjs");
var ObjectAble_1 = require("../../Object/Able/ObjectAble");
var QRCode = require("qrcode-generator");
var PlatformBridge = /** @class */ (function () {
    function PlatformBridge() {
    }
    PlatformBridge.prototype.createQrCode = function (context, option) {
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
            sub.next(new ObjectAble_1.StringObject(base64));
            sub.complete();
            return {
                unsubscribe: function () { return sub.unsubscribe(); },
            };
        });
    };
    PlatformBridge.prototype.loadRunInfo = function () {
        throw new Error("Method not implemented.");
    };
    PlatformBridge.prototype.runCommand = function (command, option) {
        return new rxjs_1.Observable(function (subscriber) {
            var result = null;
            var error = null;
            var status = false;
            try {
                result = eval(command === null || command === void 0 ? void 0 : command.toString());
                status = true;
            }
            catch (_error) {
                error = _error;
                status = false;
            }
            finally {
                subscriber.next({
                    result: result,
                    status: status,
                    error: error,
                    command: command
                });
                subscriber.complete();
            }
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); }
            };
        });
    };
    PlatformBridge.prototype.open = function (url, option) {
        throw new Error("Method not implemented.");
    };
    PlatformBridge.prototype.loadFile = function (url, option) {
        throw new Error("Method not implemented.");
    };
    return PlatformBridge;
}());
exports.PlatformBridge = PlatformBridge;
//# sourceMappingURL=BasePlatform.js.map