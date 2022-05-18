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
import { of } from "rxjs";
import { BooleanObject, ObjectTarget, } from "../../../Object/Able/ObjectAble";
import { PlatformBridge } from "../BasePlatform";
var MobileWebBridge = /** @class */ (function (_super) {
    __extends(MobileWebBridge, _super);
    function MobileWebBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileWebBridge.prototype.open = function (url) {
        return of(new BooleanObject(false));
    };
    MobileWebBridge.prototype.loadFile = function (url, option) {
        return of(new ObjectTarget({
            total: 0,
            loaded: 0,
            data: new ArrayBuffer(0),
        }));
    };
    return MobileWebBridge;
}(PlatformBridge));
export { MobileWebBridge };
//# sourceMappingURL=Mobile.js.map