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
var operators_1 = require("rxjs/operators");
var rxjs_operators_1 = require("../Util/rxjs_operators");
/**
 *
const qr = require("qr-image")
//const aa = "data:image/svg+xml;base64," + Buffer.from(qr.imageSync("ASASSAS", { type: "svg" }), 'utf8').toString('base64')
const aa = "data:image/png;base64," + Buffer.from(qr.imageSync("ASASSAS", { type: "png" }), 'utf8').toString('base64')
console.log(aa)
debugger
 *
 */
var QRCodeWork = /** @class */ (function (_super) {
    __extends(QRCodeWork, _super);
    function QRCodeWork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRCodeWork.prototype.rn_run = function (input) { };
    QRCodeWork.prototype.web_run = function () { };
    QRCodeWork.prototype.node_run = function (input) {
        var _this = this;
        if (input != null) {
            var sub = input.value().pipe(operators_1.takeLast(1), operators_1.map(function (value) {
                var qr = require("qr-image");
                return Buffer.from(qr.imageSync(value.valueOf(), { type: "png" }), 'utf8').toString('base64');
            }), rxjs_operators_1.toInOutValue, operators_1.tap(function (value) { var _a; return (_a = _this.context) === null || _a === void 0 ? void 0 : _a.msgChannel.next(value); }), operators_1.catchError(function (err) { throw err; }));
            return;
        }
        this.run(input);
    };
    QRCodeWork.prototype.run = function (input) {
        this.output.next(null);
        this.output.complete();
    };
    return QRCodeWork;
}(Work_1.SingleInstruction));
exports.QRCodeWork = QRCodeWork;
//# sourceMappingURL=QRCodeWork.js.map