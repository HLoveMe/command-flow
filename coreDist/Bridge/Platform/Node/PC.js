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
import { PlatformBridge } from "../BasePlatform";
// const nodeOpen = require("open");
// import * as process from "child_process";
/*** */
var PCNodejsBridge = /** @class */ (function (_super) {
    __extends(PCNodejsBridge, _super);
    function PCNodejsBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PCNodejsBridge;
}(PlatformBridge));
export { PCNodejsBridge };
//# sourceMappingURL=PC.js.map