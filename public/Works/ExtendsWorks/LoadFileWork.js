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
var Instruction_1 = require("../Instruction");
var rxjs_1 = require("rxjs");
var ObjectAble_1 = require("../../Object/Able/ObjectAble");
var Equipment_1 = require("../../Util/Equipment");
var operators_1 = require("rxjs/operators");
var LoadFileWork = /** @class */ (function (_super) {
    __extends(LoadFileWork, _super);
    function LoadFileWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "LoadFileWork";
        return _this;
    }
    LoadFileWork.prototype.run = function (input, option) {
        var _this = this;
        var that = this;
        return new rxjs_1.Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = "";
            else {
                target = input.valueOf().toString();
            }
            var sub = that.context.platform
                .loadFile(target, option)
                .pipe((0, operators_1.tap)(function (obj) {
                var _a = obj.valueOf(), loaded = _a.loaded, total = _a.total;
                _this.logMsg("[LoadFileWork][load:progress]" + loaded + "/" + total);
            }), (0, operators_1.takeLast)(1))
                .subscribe({
                next: function (obj) {
                    var data = obj.valueOf().data;
                    subscriber.next(new ObjectAble_1.DataObject(data));
                    subscriber.complete();
                },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); },
            });
            return {
                unsubscribe: function () {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    };
    LoadFileWork.isAble = function () {
        return !Equipment_1.isMobile;
    };
    return LoadFileWork;
}(Instruction_1.InstructionOTO));
exports.default = LoadFileWork;
//# sourceMappingURL=LoadFileWork.js.map