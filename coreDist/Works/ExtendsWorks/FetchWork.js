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
import { isJS } from "../../Util/Equipment";
import { ObjectTarget } from "../..";
import { tap } from "rxjs/operators";
var FetchWork = /** @class */ (function (_super) {
    __extends(FetchWork, _super);
    function FetchWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "FetchWork";
        return _this;
    }
    FetchWork.prototype._getInitOption = function (input) {
        var initParams = input.valueOf();
        var url = initParams.url, method = initParams.method, timeout = initParams.timeout, data = initParams.data, contextType = initParams.contextType;
        var request = {
            url: url,
            method: initParams.method || "GET",
            timeout: timeout || 10000,
            headers: {},
        };
        request.data = data;
        if (method === "GET") {
            request.headers['Content-Type'] = contextType || 'application/json';
        }
        request.timeoutErrorMessage = '请求超时';
        return request;
    };
    FetchWork.prototype.run = function (input) {
        var _this = this;
        var that = this;
        var options = this._getInitOption(input._value.value);
        return new Observable(function (subscriber) {
            var fetchSub = that.context.platform.fetch(options)
                .pipe(tap(function (result) {
                var data = result.valueOf().data;
                _this.logMsg("[FetchWork][load:data]" + data, input);
            })).subscribe({
                next: function (data) {
                    var result = data.valueOf();
                    if (result.error) {
                        subscriber.error(result.error);
                    }
                    else {
                        subscriber.next(new ObjectTarget(__assign(__assign({}, input._value), { value: result.data })));
                        subscriber.complete();
                    }
                },
                error: function (error) { return subscriber.error(error); },
                complete: function () { return subscriber.complete(); },
            });
            return {
                unsubscribe: function () {
                    subscriber.unsubscribe();
                    fetchSub.unsubscribe();
                }
            };
        });
    };
    FetchWork.isAble = function () {
        return isJS;
    };
    return FetchWork;
}(InstructionOTO));
export default FetchWork;
//# sourceMappingURL=FetchWork.js.map