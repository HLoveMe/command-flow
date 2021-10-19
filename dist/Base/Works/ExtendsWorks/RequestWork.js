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
exports.RequestWork = void 0;
var Work_1 = require("../Work");
var operators_1 = require("rxjs/operators");
var rxjs_operators_1 = require("../../Util/rxjs_operators");
var axios_1 = require("axios");
var RequestWork = /** @class */ (function (_super) {
    __extends(RequestWork, _super);
    function RequestWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "RequestWork";
        return _this;
    }
    RequestWork.prototype.validationInput = function (value) {
        return true;
    };
    RequestWork.prototype.getHttpConfig = function (config) {
        var axiosConfi = {
            url: config.URL,
            method: config.Method,
            params: config.Params || {},
            headers: config.header || {},
            data: config.Body || {},
            timeout: config.Timeout || 10000,
        };
        return axiosConfi;
    };
    RequestWork.prototype.run = function (input) {
        //RequestOption
        if (input != null) {
            var that_1 = this;
            input.value().pipe((0, operators_1.takeLast)(1), (0, operators_1.map)(function (value) {
                if (!that_1.validationInput(value))
                    throw "参数验证失败";
                return value.valueOf();
            }), (0, operators_1.flatMap)(function (value) { return axios_1.default.request(that_1.getHttpConfig(value)).then(function (respone) {
                // {
                //   // `data` 由服务器提供的响应
                //   data: {},
                //   // `status` 来自服务器响应的 HTTP 状态码
                //   status: 200,
                //   // `statusText` 来自服务器响应的 HTTP 状态信息
                //   statusText: 'OK',
                //   // `headers` 服务器响应的头
                //   headers: {},
                //   // `config` 是为请求提供的配置信息
                //   config: {}
                // }
                return respone.data;
            }); }), (0, rxjs_operators_1.ValueSwitchTapCatch)(that_1));
            return;
        }
        this.output.next(null);
        this.output.complete();
    };
    return RequestWork;
}(Work_1.SingleInstruction));
exports.RequestWork = RequestWork;
//# sourceMappingURL=RequestWork.js.map