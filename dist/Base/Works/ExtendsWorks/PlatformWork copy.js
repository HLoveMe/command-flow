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
var Instruction_1 = require("../Instruction");
var FlashWork = /** @class */ (function (_super) {
    __extends(FlashWork, _super);
    function FlashWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "FlashWork";
        return _this;
        // switch(value: BaseType) {
        //   const RNFlash = require('react-native-flash');
        //   if (value.equal(SwitchStatus.CLOSE)) {
        //     RNFlash.turnOffFlash(); // turn off flash
        //   } else if (value.equal(SwitchStatus.OPEN)) {
        //     RNFlash.turnOnFlash(); // turn on flash
        //   } else {
        //     //SwitchStatus.TOGGLE
        //     RNFlash.turnOffFlash(); // turn off flash
        //   }
        // }
        // rn_run(input: InOutputAbleOrNil) {
        //   const that = this;
        //   const Flash = require('react-native-flash');
        //   if (Flash) {
        //     const sub = input.value().pipe(
        //       takeLast(1),
        //     ).subscribe(
        //       (value) => that.switch(value),
        //       null,
        //       () => {
        //         this.output.next(null);
        //         this.output.complete();
        //       }
        //     )
        //     this.pools.push(sub);
        //     return;
        //   }
        //   this.output.next(null);
        //   this.output.complete();
        // }
        // run(input: InOutputAbleOrNil) {
        //   //react-native-camera  react-native-flash
        // }
    }
    return FlashWork;
}(Instruction_1.InstructionOTO));
exports.FlashWork = FlashWork;
//# sourceMappingURL=PlatformWork%20copy.js.map