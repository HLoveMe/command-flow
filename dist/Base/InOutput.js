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
var rxjs_1 = require("rxjs");
var InOutNumber = /** @class */ (function (_super) {
    __extends(InOutNumber, _super);
    function InOutNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutNumber.prototype.value = function () {
        return rxjs_1.of(this.valueOf());
    };
    return InOutNumber;
}(Number));
exports.InOutNumber = InOutNumber;
var InOutString = /** @class */ (function (_super) {
    __extends(InOutString, _super);
    function InOutString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutString.prototype.value = function () {
        return rxjs_1.of(this.toString());
    };
    return InOutString;
}(String));
exports.InOutString = InOutString;
//# sourceMappingURL=InOutput.js.map