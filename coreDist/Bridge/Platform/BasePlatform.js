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
import { Observable } from "rxjs";
import { StringObject, ObjectTarget } from "../../Object/Able/ObjectAble";
import * as QRCode from "qrcode-generator";
import Axios from "axios";
import { HardwareBase } from "./Hardware";
var PlatformBridge = /** @class */ (function (_super) {
    __extends(PlatformBridge, _super);
    function PlatformBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlatformBridge.prototype.createQrCode = function (context, option) {
        return new Observable(function (sub) {
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
            sub.next(new StringObject(base64));
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
        return new Observable(function (subscriber) {
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
    PlatformBridge.prototype.fetch = function (req) {
        return new Observable(function (subscriber) {
            Axios.request(req)
                .then(function (response) {
                var error = null;
                var data = null;
                var content = {};
                if (response.status !== 200) {
                    error = new Error(response.status + " " + response.statusText);
                }
                else {
                    data = response.data;
                }
                content.data = data;
                content.error = error;
                content.response = response;
                subscriber.next(new ObjectTarget(content));
                subscriber.complete();
            })
                .catch(function (error) {
                subscriber.error(error);
            });
            return {
                unsubscribe: function () {
                    subscriber.unsubscribe();
                }
            };
        });
    };
    return PlatformBridge;
}(HardwareBase));
export { PlatformBridge };
//# sourceMappingURL=BasePlatform.js.map