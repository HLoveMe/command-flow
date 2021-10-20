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
var Instruction_1 = require("../Instruction");
var RequestWork = /** @class */ (function (_super) {
    __extends(RequestWork, _super);
    function RequestWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "RequestWork";
        return _this;
        // validationInput(value: ValueAble): boolean {
        //   return true;
        // }
        // getHttpConfig(config: RequestOption): AxiosRequestConfig {
        //   const axiosConfi = {
        //     url:config.URL,
        //     method:config.Method,
        //     params:config.Params || {},
        //     headers:config.header || {},
        //     data:config.Body || {},
        //     timeout:config.Timeout || 10000,
        //   } as AxiosRequestConfig
        //   return axiosConfi;
        // }
        // run(input: InOutputAbleOrNil) {
        //   //RequestOption
        //   if (input != null) {
        //     const that = this;
        //     input.value().pipe(
        //       takeLast(1),
        //       map(value => {
        //         if (!that.validationInput(value)) throw "参数验证失败";
        //         return (value as ObjectAble).valueOf() as RequestOption
        //       }),
        //       flatMap(value => axios.request(that.getHttpConfig(value)).then((respone: AxiosResponse) => {
        //         // {
        //         //   // `data` 由服务器提供的响应
        //         //   data: {},
        //         //   // `status` 来自服务器响应的 HTTP 状态码
        //         //   status: 200,
        //         //   // `statusText` 来自服务器响应的 HTTP 状态信息
        //         //   statusText: 'OK',
        //         //   // `headers` 服务器响应的头
        //         //   headers: {},
        //         //   // `config` 是为请求提供的配置信息
        //         //   config: {}
        //         // }
        //         return respone.data
        //       })),
        //       // ValueSwitchTapCatch(that)
        //     )
        //     return;
        //   }
        //   // this.output.next(null);
        //   // this.output.complete();
        // }
    }
    return RequestWork;
}(Instruction_1.InstructionOTO));
exports.RequestWork = RequestWork;
//# sourceMappingURL=RequestWork.js.map