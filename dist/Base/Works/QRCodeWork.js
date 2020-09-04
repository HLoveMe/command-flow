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
var QRCodeWork = /** @class */ (function (_super) {
    __extends(QRCodeWork, _super);
    function QRCodeWork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRCodeWork.prototype.rn_run = function (input) {
    };
    QRCodeWork.prototype.web_run = function () { };
    QRCodeWork.prototype.node_run = function () { };
    QRCodeWork.prototype.run = function (input) {
        this.output.complete();
    };
    return QRCodeWork;
}(Work_1.SingleInstruction));
exports.QRCodeWork = QRCodeWork;
//# sourceMappingURL=QRCodeWork.js.map