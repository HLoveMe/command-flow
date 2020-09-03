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
var BaseObject_1 = require("./Object/BaseObject");
var readline = require("readline");
var InOutNumber = /** @class */ (function (_super) {
    __extends(InOutNumber, _super);
    function InOutNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutNumber.prototype.value = function () {
        return rxjs_1.of(this);
    };
    return InOutNumber;
}(BaseObject_1.NumberObj));
exports.InOutNumber = InOutNumber;
var InOutString = /** @class */ (function (_super) {
    __extends(InOutString, _super);
    function InOutString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutString.prototype.value = function () {
        return rxjs_1.of(this);
    };
    return InOutString;
}(BaseObject_1.StringObj));
exports.InOutString = InOutString;
var InOutMap = /** @class */ (function (_super) {
    __extends(InOutMap, _super);
    function InOutMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutMap.prototype.value = function () {
        return rxjs_1.of(this);
    };
    return InOutMap;
}(BaseObject_1.MapObject));
exports.InOutMap = InOutMap;
var InOutArray = /** @class */ (function (_super) {
    __extends(InOutArray, _super);
    function InOutArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutArray.prototype.value = function () {
        return rxjs_1.of(this);
    };
    return InOutArray;
}(BaseObject_1.ArrayObject));
exports.InOutArray = InOutArray;
var InOutSet = /** @class */ (function (_super) {
    __extends(InOutSet, _super);
    function InOutSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutSet.prototype.value = function () {
        return rxjs_1.of(this);
    };
    return InOutSet;
}(BaseObject_1.SetObject));
exports.InOutSet = InOutSet;
var FileSource = /** @class */ (function () {
    function FileSource(file) {
        if (fs_1.existsSync(file) && fs_1.statSync(file).isFile()) {
            this.file = file;
        }
    }
    FileSource.prototype.value = function () {
        if (this.file) {
            var fileLine = readline(this.file, "utf-8");
            // return fromEvent(fileLine, "line").pipe(
            //   takeUntil(fromEvent(fileLine, "close")),
            //   // reduce(($1, $2) => $1 + $2, "")
            // )
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
            return rxjs_1.fromEvent(this.socket, "message").pipe(operators_1.takeUntil(rxjs_1.fromEvent(this.socket, "close")), operators_1.map(function (event) { return event.data; }));
        }
        return rxjs_1.empty();
        throw new Error("Method not implemented.");
    };
    return SocketSource;
}());
exports.SocketSource = SocketSource;
//# sourceMappingURL=InOutputValue.js.map