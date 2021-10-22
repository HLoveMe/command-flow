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
exports.PCNodejsConfig = void 0;
var rxjs_1 = require("rxjs");
var BaseObject_1 = require("../../../Object/BaseObject");
var BasePlatform_1 = require("../BasePlatform");
var fs = require("fs");
var nodeOpen = require("open");
/*** */
var PCNodejsConfig = /** @class */ (function (_super) {
    __extends(PCNodejsConfig, _super);
    function PCNodejsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PCNodejsConfig.prototype.open = function (url) {
        return (0, rxjs_1.from)(nodeOpen(url, { wait: true }));
    };
    PCNodejsConfig.prototype.loadFile = function (url, option) {
        return new rxjs_1.Observable(function (subscriber) {
            var stat = fs.lstatSync(url);
            var subs = [];
            if (stat.isDirectory()) {
                subscriber.error(new Error(url.toString() + " is not file"));
            }
            else {
                var rs = fs.createReadStream(url, "binary");
                rs.addListener;
                var data_1 = Buffer.of();
                var sub1 = (0, rxjs_1.fromEvent)(rs, "data").subscribe({
                    next: function (chunk) {
                        data_1 = Buffer.concat([data_1, chunk]);
                        subscriber.next(new BaseObject_1.ObjectTarget({
                            loaded: data_1.length,
                            total: stat.size,
                            data: data_1,
                        }));
                    },
                });
                var sub2 = (0, rxjs_1.fromEvent)(rs, "end").subscribe({
                    next: function () {
                        subscriber.next(new BaseObject_1.ObjectTarget({
                            loaded: data_1.length,
                            total: stat.size,
                            data: data_1,
                        }));
                        subscriber.complete();
                    },
                });
                subs.push(sub1);
                subs.push(sub2);
            }
            return {
                unsubscribe: function () {
                    subscriber.unsubscribe();
                    subs.forEach(function ($1) { return $1.unsubscribe(); });
                },
            };
        });
    };
    return PCNodejsConfig;
}(BasePlatform_1.PCPlatformConfig));
exports.PCNodejsConfig = PCNodejsConfig;
//# sourceMappingURL=PC.js.map