"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformBridge = void 0;
const rxjs_1 = require("rxjs");
const Object_1 = require("../../Object");
const QRCode = require("qrcode-generator");
const axios_1 = require("axios");
const Hardware_1 = require("./Hardware");
class PlatformBridge extends Hardware_1.HardwareBase {
    createQrCode(context, option) {
        return new rxjs_1.Observable((sub) => {
            let width = option?.SideLength ?? 200;
            let margin = 2;
            const qrCode = QRCode(option?.type || 4, option?.Level || "H");
            qrCode.addData((context ?? ""));
            qrCode.make();
            const moduleCount = qrCode.getModuleCount();
            const cellSize = (width - margin * 2) / moduleCount;
            const base64 = qrCode.createDataURL(cellSize, margin);
            // const base64 = qrcode.createDataURL(cellSize, margin).replace('data:image/gif;base64', 'data:image/png;base64');
            sub.next(new Object_1.StringObject(base64));
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
                result = eval(command?.toString());
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
                subscriber.next(new Object_1.ObjectTarget(content));
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
