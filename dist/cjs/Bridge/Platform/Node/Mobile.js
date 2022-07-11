"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNodejsBridge = void 0;
const rxjs_1 = require("rxjs");
const Object_1 = require("../../../Object");
const BasePlatform_1 = require("../BasePlatform");
class MobileNodejsBridge extends BasePlatform_1.PlatformBridge {
    open(url) {
        return (0, rxjs_1.of)(new Object_1.BooleanObject(false));
    }
    loadFile(url, option) {
        return (0, rxjs_1.of)(new Object_1.ObjectTarget({
            total: 0,
            loaded: 0,
            data: new ArrayBuffer(0),
            finish: true,
            file: undefined,
        }));
    }
}
exports.MobileNodejsBridge = MobileNodejsBridge;
