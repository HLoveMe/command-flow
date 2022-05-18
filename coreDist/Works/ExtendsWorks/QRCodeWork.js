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
import { InstructionOTO } from "../Instruction";
import { Observable } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
var QRCodeWork = /** @class */ (function (_super) {
    __extends(QRCodeWork, _super);
    function QRCodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "QRCodeWork";
        return _this;
    }
    QRCodeWork.prototype.run = function (input, option) {
        var that = this;
        return new Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = "";
            else {
                target = unpackValue(input);
            }
            var sub = that.context.platform
                .createQrCode(target, option)
                .subscribe({
                next: function (res) { return subscriber.next(wrapperValue(input, res)); },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); },
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
        return isJS;
        // return isNode || isWeb || isRN
    };
    return QRCodeWork;
}(InstructionOTO));
export { QRCodeWork };
//# sourceMappingURL=QRCodeWork.js.map