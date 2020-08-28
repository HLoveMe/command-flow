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
var fs_1 = require("fs");
var operators_1 = require("rxjs/operators");
var readline = require("readline");
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
var FileSource = /** @class */ (function () {
    function FileSource(file) {
        if (fs_1.existsSync(file) && fs_1.statSync(file).isFile()) {
            this.file = file;
        }
    }
    FileSource.prototype.value = function () {
        if (this.file) {
            var fileLine = readline(this.file, "utf-8");
            return rxjs_1.fromEvent(fileLine, "line").pipe(operators_1.takeUntil(rxjs_1.fromEvent(fileLine, "close")), operators_1.reduce(function ($1, $2) { return $1 + $2; }, ""));
        }
        else {
            return rxjs_1.empty();
        }
        throw new Error("Method not implemented.");
    };
    return FileSource;
}());
exports.FileSource = FileSource;
var SocketSource = /** @class */ (function () {
    function SocketSource(socket) {
        this.socket = socket;
    }
    SocketSource.prototype.value = function () {
        if (this.socket && this.socket.readyState == 1) {
            return rxjs_1.fromEvent(this.socket, "message").pipe(operators_1.takeUntil(rxjs_1.fromEvent(this.socket, "close")));
        }
        return rxjs_1.empty();
        throw new Error("Method not implemented.");
    };
    return SocketSource;
}());
exports.SocketSource = SocketSource;
//# sourceMappingURL=InOutputValue.js.map