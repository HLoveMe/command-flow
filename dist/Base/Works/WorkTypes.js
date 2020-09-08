"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InOutputValue_1 = require("../Object/InOutputValue");
var SwitchStatus = /** @class */ (function () {
    function SwitchStatus() {
    }
    SwitchStatus.OPEN = new InOutputValue_1.InOutNumber(0);
    SwitchStatus.CLOSE = new InOutputValue_1.InOutNumber(1);
    SwitchStatus.TOGGLE = new InOutputValue_1.InOutNumber(2);
    return SwitchStatus;
}());
exports.SwitchStatus = SwitchStatus;
//# sourceMappingURL=WorkTypes.js.map