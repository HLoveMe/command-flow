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
import { Base64 } from 'js-base64';
import { InstructionMTM } from "../Instruction";
import { Observable } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
//编码
var Base64EnCodeWork = /** @class */ (function (_super) {
    __extends(Base64EnCodeWork, _super);
    function Base64EnCodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Base64EnCodeWork";
        return _this;
    }
    Base64EnCodeWork.prototype.run = function (input) {
        return new Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = unpackValue(input);
            }
            subscriber.next(wrapperValue(input, Base64.encode(target)));
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    Base64EnCodeWork.isAble = function () {
        return isJS;
    };
    return Base64EnCodeWork;
}(InstructionMTM));
//解码
var Base64DecodeWork = /** @class */ (function (_super) {
    __extends(Base64DecodeWork, _super);
    function Base64DecodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Base64DecodeWork";
        return _this;
    }
    Base64DecodeWork.prototype.run = function (input) {
        return new Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = unpackValue(input);
            }
            subscriber.next(wrapperValue(input, Base64.decode(target)));
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    Base64DecodeWork.isAble = function () {
        return isJS;
    };
    return Base64DecodeWork;
}(InstructionMTM));
export { Base64DecodeWork, Base64EnCodeWork };
//# sourceMappingURL=Base64Work.js.map