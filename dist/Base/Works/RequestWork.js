"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Work_1 = require("./Work");
var RequestWork = /** @class */ (function (_super) {
    __extends(RequestWork, _super);
    function RequestWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "RequestWork";
        return _this;
    }
    RequestWork.prototype.run = function (input) {
        if (input != null) {
            return;
        }
        this.output.next(null);
        this.output.complete();
    };
    return RequestWork;
}(Work_1.SingleInstruction));
exports.RequestWork = RequestWork;
//# sourceMappingURL=RequestWork.js.map