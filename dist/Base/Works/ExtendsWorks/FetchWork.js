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
var Instruction_1 = require("../Instruction");
var rxjs_1 = require("rxjs");
var Equipment_1 = require("../../Util/Equipment");
var __1 = require("../..");
var operators_1 = require("rxjs/operators");
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
        var options = this._getInitOption(input);
        return new rxjs_1.Observable(function (subscriber) {
            var fetchSub = that.context.platform.fetch(options)
                .pipe((0, operators_1.tap)(function (result) {
                var data = result.valueOf().data;
                _this.logMsg("[FetchWork][load:data]" + data);
            })).subscribe({
                next: function (data) {
                    var result = data.valueOf();
                    if (result.error) {
                        subscriber.error(result.error);
                    }
                    else {
                        subscriber.next(new __1.ObjectTarget(result.data));
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
        return Equipment_1.isJS;
    };
    return FetchWork;
}(Instruction_1.InstructionOTO));
exports.default = FetchWork;
//# sourceMappingURL=FetchWork.js.map