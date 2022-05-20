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
import { Observable, of } from "rxjs";
import { BooleanObject, ObjectTarget, } from "../../../Object/Able/ObjectAble";
import { PlatformBridge } from "../BasePlatform";
var WebBridge = /** @class */ (function (_super) {
    __extends(WebBridge, _super);
    function WebBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebBridge.prototype.open = function (url) {
        var result = window.open(url, "__blank");
        return of(new BooleanObject(result !== null));
    };
    /**
     * 打开文件路径
     * @param url
     * @param option
     * @returns
     */
    WebBridge.prototype.loadFile = function (url, option) {
        return new Observable(function (subscriber) {
            var input = document.createElement("input");
            //input.value = url.toString();
            input.type = "file";
            input.id = "_temp_input_select";
            input.accept = (option === null || option === void 0 ? void 0 : option.type) || "*";
            input.style.display = "none";
            document.body.append(input);
            input.addEventListener("change", function (_) {
                var reader = new FileReader();
                var file = input.files[0];
                reader.onprogress = function (info) {
                    var total = info.total, loaded = info.loaded;
                    var data = reader.result;
                    subscriber.next(new ObjectTarget({
                        total: total,
                        loaded: loaded,
                        data: data,
                        finish: false,
                        file: file
                    }));
                };
                reader.onload = function (info) {
                    var data = reader.result;
                    var total = info.total, loaded = info.loaded;
                    subscriber.next(new ObjectTarget({ total: total, loaded: loaded, data: data, finish: true, file: file }));
                    subscriber.complete();
                };
                reader.onerror = function (ev) {
                    subscriber.error(ev);
                };
                reader.readAsArrayBuffer(file);
            });
            input.click();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return WebBridge;
}(PlatformBridge));
export { WebBridge };
//# sourceMappingURL=WebBase.js.map