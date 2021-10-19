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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Equipment_1 = require("../../Util/Equipment");
var Environment_1 = require("../Environment");
var SocketSource = /** @class */ (function (_super) {
    __extends(SocketSource, _super);
    function SocketSource(socket) {
        var _this = _super.call(this) || this;
        _this.socket = socket;
        return _this;
    }
    SocketSource.prototype.value = function () {
        if (this.socket && this.socket.readyState == 1) {
            return (0, rxjs_1.fromEvent)(this.socket, "message").pipe((0, operators_1.takeUntil)((0, rxjs_1.fromEvent)(this.socket, "close")), (0, operators_1.map)(function (event) { return event.data; }));
        }
        return (0, rxjs_1.empty)();
        throw new Error("Method not implemented.");
    };
    return SocketSource;
}(Environment_1.BaseRunTime));
exports.default = (0, Equipment_1.PlatformSelect)({
    web: SocketSource,
    node: SocketSource,
    reactnative: SocketSource,
});
//# sourceMappingURL=SocketSource.js.map