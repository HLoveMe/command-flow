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
exports.PCWebConfig = void 0;
var rxjs_1 = require("rxjs");
var BaseObject_1 = require("../../../Object/BaseObject");
var BasePlatform_1 = require("../BasePlatform");
var PCWebConfig = /** @class */ (function (_super) {
    __extends(PCWebConfig, _super);
    function PCWebConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PCWebConfig.prototype.open = function (url) {
        var result = window.open(url, "__blank");
        return (0, rxjs_1.of)(new BaseObject_1.BooleanObject(result !== null));
    };
    PCWebConfig.prototype.loadFile = function (url, option) {
        return new rxjs_1.Observable(function (subscriber) {
            var input = document.createElement("input");
            input.type = "file";
            input.id = "_temp_input_select";
            input.accept = (option === null || option === void 0 ? void 0 : option.type) || "*";
            input.style.display = "none";
            document.body.append(input);
            input.addEventListener("change", function (_) {
                var reader = new FileReader();
                reader.onprogress = function (info) {
                    var total = info.total, loaded = info.loaded;
                    var data = Buffer.from(reader.result);
                    subscriber.next(new BaseObject_1.ObjectTarget({
                        total: total,
                        loaded: loaded,
                        data: data,
                    }));
                };
                reader.onload = function (info) {
                    var data = Buffer.from(reader.result);
                    var total = info.total, loaded = info.loaded;
                    subscriber.next(new BaseObject_1.ObjectTarget({ total: total, loaded: loaded, data: data }));
                    subscriber.complete();
                };
                reader.readAsArrayBuffer(input.files[0]);
            });
            input.click();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return PCWebConfig;
}(BasePlatform_1.PCPlatformConfig));
exports.PCWebConfig = PCWebConfig;
//# sourceMappingURL=PC.js.map