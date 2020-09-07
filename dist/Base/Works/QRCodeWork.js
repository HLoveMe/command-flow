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
Object.defineProperty(exports, "__esModule", { value: true });
var Work_1 = require("./Work");
var operators_1 = require("rxjs/operators");
var rxjs_operators_1 = require("../Util/rxjs_operators");
var InOutputValue_1 = require("../InOutputValue");
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
    QRCodeWork.prototype.run = function (input) {
        if (input != null) {
            var sub = input.value().pipe(operators_1.takeLast(1), operators_1.map(function (value) {
                var option = QRCodeWork.defaultOption;
                if (value instanceof InOutputValue_1.InOutString) {
                    option.value = value.valueOf();
                }
                else {
                    option = __assign(__assign({}, option), value.valueOf());
                }
                var QRCode = require("qrcode-generator");
                var typeNumber = option.typeNumber || QRCodeWork.defaultOption.typeNumber;
                var errorCorrectionLevel = option.typeNumber || QRCodeWork.defaultOption.typeNumber;
                var qr = QRCode(typeNumber, errorCorrectionLevel);
                qr.addData(option.value || QRCodeWork.defaultOption.value);
                qr.make();
                return qr.createDataURL(option.cellSize || QRCodeWork.defaultOption.cellSize, option.margin || QRCodeWork.defaultOption.margin);
            }), rxjs_operators_1.ValueSwitchTapCatch(this)).subscribe(this.getOutoutObserver());
            this.pools.push(sub);
            return;
        }
        this.output.next(null);
        this.output.complete();
    };
    // rn_run(input: InOutputAbleOrNil) {
    //   this.web_run(input);
    // }
    // web_run(input: InOutputAbleOrNil) {
    //   if (input != null) {
    //     const sub = input.value().pipe(
    //       takeLast(1),
    //       map(value => {
    //         var jrQrcode = require('jr-qrcode');
    //         return jrQrcode.getQrBase64((value as StringAble).valueOf());
    //         // return Buffer.from(qr.imageSync((value as StringAble).valueOf(), { type: "png" }), 'utf8').toString('base64')
    //       }),
    //       ValueSwitchTapCatch(this)
    //     ).subscribe(this.getOutoutObserver());
    //     this.pools.push(sub);
    //     return
    //   }
    //   this.run(input);
    // }
    // node_run(input: InOutputAbleOrNil) {
    //   if (input != null) {
    //     const sub = input.value().pipe(
    //       takeLast(1),
    //       map(value => {
    //         const qr = require("qr-image");
    //         return Buffer.from(qr.imageSync((value as StringAble).valueOf(), { type: "png" }), 'utf8').toString('base64')
    //       }),
    //       ValueSwitchTapCatch(this)
    //     ).subscribe(this.getOutoutObserver());
    //     this.pools.push(sub);
    //     return
    //   }
    //   this.run(input);
    // }
    QRCodeWork.defaultOption = {
        typeNumber: 4,
        errorCorrectionLevel: "L",
        cellSize: 4,
        margin: null,
        value: ""
    };
    return QRCodeWork;
}(Work_1.SingleInstruction));
exports.QRCodeWork = QRCodeWork;
//# sourceMappingURL=QRCodeWork.js.map