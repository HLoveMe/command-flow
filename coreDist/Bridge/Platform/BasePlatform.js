"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformBridge = void 0;
const rxjs_1 = require("rxjs");
const ObjectAble_1 = require("../../Object/Able/ObjectAble");
const QRCode = require("qrcode-generator");
const axios_1 = require("axios");
const Hardware_1 = require("./Hardware");
class PlatformBridge extends Hardware_1.HardwareBase {
    createQrCode(context, option) {
        return new rxjs_1.Observable((sub) => {
            var _a;
            let width = (_a = option === null || option === void 0 ? void 0 : option.SideLength) !== null && _a !== void 0 ? _a : 200;
            let margin = 2;
            const qrcode = QRCode((option === null || option === void 0 ? void 0 : option.type) || 4, (option === null || option === void 0 ? void 0 : option.Level) || "H");
            qrcode.addData((context !== null && context !== void 0 ? context : ""));
            qrcode.make();
            const moduleCount = qrcode.getModuleCount();
            const cellSize = (width - margin * 2) / moduleCount;
            const base64 = qrcode.createDataURL(cellSize, margin);
            // const base64 = qrcode.createDataURL(cellSize, margin).replace('data:image/gif;base64', 'data:image/png;base64');
            sub.next(new ObjectAble_1.StringObject(base64));
            sub.complete();
            return {
                unsubscribe: () => sub.unsubscribe(),
            };
        });
    }
    loadRunInfo() {
        throw new Error("Method not implemented.");
    }
    runCommand(command, option) {
        return new rxjs_1.Observable((subscriber) => {
            let result = null;
            let error = null;
            let status = false;
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
                    result,
                    status,
                    error,
                    command
                });
                subscriber.complete();
            }
            return {
                unsubscribe: () => subscriber.unsubscribe()
            };
        });
    }
    open(url, option) {
        throw new Error("Method not implemented.");
    }
    loadFile(url, option) {
        throw new Error("Method not implemented.");
    }
    fetch(req) {
        return new rxjs_1.Observable((subscriber) => {
            axios_1.default.request(req)
                .then((response) => {
                let error = null;
                let data = null;
                const content = {};
                if (response.status !== 200) {
                    error = new Error(`${response.status} ${response.statusText}`);
                }
                else {
                    data = response.data;
                }
                content.data = data;
                content.error = error;
                content.response = response;
                subscriber.next(new ObjectAble_1.ObjectTarget(content));
                subscriber.complete();
            })
                .catch((error) => {
                subscriber.error(error);
            });
            return {
                unsubscribe: () => {
                    subscriber.unsubscribe();
                }
            };
        });
    }
}
exports.PlatformBridge = PlatformBridge;
//# sourceMappingURL=BasePlatform.js.map