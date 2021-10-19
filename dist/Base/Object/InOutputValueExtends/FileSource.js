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
var fs_1 = require("fs");
var Environment_1 = require("../Environment");
var Equipment_1 = require("../../Util/Equipment");
var readline = require("readline");
var FileSource = /** @class */ (function (_super) {
    __extends(FileSource, _super);
    function FileSource(file) {
        var _this = _super.call(this) || this;
        if ((0, fs_1.existsSync)(file) && (0, fs_1.statSync)(file).isFile()) {
            _this.file = file;
        }
        return _this;
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
            return (0, rxjs_1.empty)();
        }
        throw new Error("Method not implemented.");
    };
    return FileSource;
}(Environment_1.JSForNodeJs));
exports.default = (0, Equipment_1.PlatformSelect)({
    web: null,
    node: FileSource,
    reactNative: null,
});
//# sourceMappingURL=FileSource.js.map