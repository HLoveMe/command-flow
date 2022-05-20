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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { InstructionOTO } from "../Instruction";
import { Observable } from "rxjs";
import { BooleanObject, ObjectTarget } from "../../Object/Able/ObjectAble";
import { isJS, } from "../../Util/Equipment";
import { unpackValue } from "../../Util/channel-value-util";
/**
 * 打开路径
 * http://www.baidu.com
 * node window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 *
 * node:可以打开文件 网页
 * web:只能代开网页
 */
var OpenURLWork = /** @class */ (function (_super) {
    __extends(OpenURLWork, _super);
    function OpenURLWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "OpenURLWork";
        return _this;
    }
    OpenURLWork.prototype.run = function (input, option) {
        var that = this;
        return new Observable(function (subscriber) {
            var target = unpackValue(input);
            var sub = that.context.platform
                .open(target, option)
                .subscribe({
                next: function (_) { return subscriber.next(new ObjectTarget(__assign(__assign({}, input._value), { value: new BooleanObject(true) }))); },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); }
            });
            return {
                unsubscribe: function () {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    };
    OpenURLWork.isAble = function () {
        return isJS;
    };
    return OpenURLWork;
}(InstructionOTO));
export default OpenURLWork;
//# sourceMappingURL=OpenURLWork.js.map