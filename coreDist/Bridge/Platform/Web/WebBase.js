"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebBridge = void 0;
const rxjs_1 = require("rxjs");
const ObjectAble_1 = require("../../../Object/Able/ObjectAble");
const BasePlatform_1 = require("../BasePlatform");
class WebBridge extends BasePlatform_1.PlatformBridge {
    open(url) {
        const result = window.open(url, "__blank");
        return (0, rxjs_1.of)(new ObjectAble_1.BooleanObject(result !== null));
    }
    /**
     * 打开文件路径
     * @param url
     * @param option
     * @returns
     */
    loadFile(url, option) {
        return new rxjs_1.Observable((subscriber) => {
            const input = document.createElement("input");
            //input.value = url.toString();
            input.type = "file";
            input.id = "_temp_input_select";
            input.accept = (option === null || option === void 0 ? void 0 : option.type) || "*";
            input.style.display = "none";
            document.body.append(input);
            input.addEventListener("change", (_) => {
                const reader = new FileReader();
                const file = input.files[0];
                reader.onprogress = (info) => {
                    const { total, loaded } = info;
                    const data = reader.result;
                    subscriber.next(new ObjectAble_1.ObjectTarget({
                        total,
                        loaded,
                        data: data,
                        finish: false,
                        file
                    }));
                };
                reader.onload = (info) => {
                    const data = reader.result;
                    const { total, loaded } = info;
                    subscriber.next(new ObjectAble_1.ObjectTarget({ total, loaded, data, finish: true, file }));
                    subscriber.complete();
                };
                reader.onerror = (ev) => {
                    subscriber.error(ev);
                };
                reader.readAsArrayBuffer(file);
            });
            input.click();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}
exports.WebBridge = WebBridge;
//# sourceMappingURL=WebBase.js.map