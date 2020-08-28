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
var Base64EnCodeWork = /** @class */ (function (_super) {
    __extends(Base64EnCodeWork, _super);
    function Base64EnCodeWork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64EnCodeWork.prototype.run = function (input) {
        this.output.next(input);
        this.output.complete();
    };
    return Base64EnCodeWork;
}(Work_1.SingleInstruction));
var Base64DecodeWork = /** @class */ (function (_super) {
    __extends(Base64DecodeWork, _super);
    function Base64DecodeWork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64DecodeWork.prototype.run = function (input) {
        if (input == null) {
        }
        else {
            var subp = input.value()
                .pipe(operators_1.takeLast(1))
                .subscribe(this.output);
            this.pools.push(subp);
        }
    };
    return Base64DecodeWork;
}(Work_1.SingleInstruction));
//# sourceMappingURL=Base64Work.js.map