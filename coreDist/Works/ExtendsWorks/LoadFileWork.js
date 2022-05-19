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
import { DataObject, ObjectTarget, } from "../../Object/Able/ObjectAble";
import { isMobile } from "../../Util/Equipment";
import { takeLast, tap } from "rxjs/operators";
import { unpackValue } from "../../Util/channel-value-util";
var LoadFileWork = /** @class */ (function (_super) {
    __extends(LoadFileWork, _super);
    function LoadFileWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "LoadFileWork";
        return _this;
    }
    LoadFileWork.prototype.run = function (input, option) {
        var _this = this;
        var that = this;
        return new Observable(function (subscriber) {
            var target = unpackValue(input);
            var sub = that.context.platform
                .loadFile(target, option)
                .pipe(tap(function (obj) {
                var _a = obj.valueOf(), loaded = _a.loaded, total = _a.total, finish = _a.finish;
                _this.logMsg("\u52A0\u8F7D\u8FDB\u5EA6[load:progress]---\uFF1A" + loaded + "/" + total + " \u662F\u5426\u5B8C\u6210\uFF1A" + finish, input);
            }), takeLast(1))
                .subscribe({
                next: function (obj) {
                    var _a = obj.valueOf(), data = _a.data, file = _a.file;
                    subscriber.next(new ObjectTarget(__assign(__assign({}, input._value), { value: new DataObject(data), option: { file: file } })));
                    subscriber.complete();
                },
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
    LoadFileWork.isAble = function () {
        return !isMobile;
    };
    return LoadFileWork;
}(InstructionOTO));
export default LoadFileWork;
//# sourceMappingURL=LoadFileWork.js.map