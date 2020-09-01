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
var PlayBase64MusicWork = /** @class */ (function (_super) {
    __extends(PlayBase64MusicWork, _super);
    function PlayBase64MusicWork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayBase64MusicWork.prototype.run = function (input) {
        this.output.complete();
    };
    return PlayBase64MusicWork;
}(Work_1.SingleInstruction));
exports.PlayBase64MusicWork = PlayBase64MusicWork;
//# sourceMappingURL=PlayWork.js.map