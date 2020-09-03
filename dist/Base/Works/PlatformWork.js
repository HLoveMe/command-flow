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
var Equipment_1 = require("../Util/Equipment");
var FlashWork = /** @class */ (function (_super) {
    __extends(FlashWork, _super);
    function FlashWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "FlashWork";
        return _this;
    }
    FlashWork.prototype.switch = function (value) {
    };
    FlashWork.prototype.run = function (input) {
        //react-native-camera
        var that = this;
        if (Equipment_1.isRN) {
            var Camera = require("react-native-camera");
            if (Camera) {
                input.value().pipe(operators_1.takeLast(1)).subscribe(this.getOutoutObserver());
            }
        }
        this.output.next(null);
        this.output.complete();
    };
    return FlashWork;
}(Work_1.AloneInstruction));
exports.FlashWork = FlashWork;
//# sourceMappingURL=PlatformWork.js.map