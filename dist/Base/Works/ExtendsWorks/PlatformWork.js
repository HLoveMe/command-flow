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
exports.FlashWork = void 0;
var Work_1 = require("../Work");
var WorkTypes_1 = require("../WorkTypes");
var operators_1 = require("rxjs/operators");
var FlashWork = /** @class */ (function (_super) {
    __extends(FlashWork, _super);
    function FlashWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "FlashWork";
        return _this;
    }
    FlashWork.prototype.switch = function (value) {
        var RNFlash = require('react-native-flash');
        if (value.equal(WorkTypes_1.SwitchStatus.CLOSE)) {
            RNFlash.turnOffFlash(); // turn off flash
        }
        else if (value.equal(WorkTypes_1.SwitchStatus.OPEN)) {
            RNFlash.turnOnFlash(); // turn on flash
        }
        else {
            //SwitchStatus.TOGGLE
            RNFlash.turnOffFlash(); // turn off flash
        }
    };
    FlashWork.prototype.rn_run = function (input) {
        var _this = this;
        var that = this;
        var Flash = require('react-native-flash');
        if (Flash) {
            var sub = input.value().pipe((0, operators_1.takeLast)(1)).subscribe(function (value) { return that.switch(value); }, null, function () {
                _this.output.next(null);
                _this.output.complete();
            });
            this.pools.push(sub);
            return;
        }
        this.output.next(null);
        this.output.complete();
    };
    FlashWork.prototype.run = function (input) {
        //react-native-camera  react-native-flash
    };
    return FlashWork;
}(Work_1.AloneInstruction));
exports.FlashWork = FlashWork;
//# sourceMappingURL=PlatformWork.js.map