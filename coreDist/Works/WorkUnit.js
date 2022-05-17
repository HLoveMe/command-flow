"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkUnit = void 0;
var uuid_1 = require("uuid");
var WorkUnit = /** @class */ (function () {
    function WorkUnit(context, work, sub, uuid) {
        this.context = context;
        this.work = work;
        this.sub = sub;
        this.uuid = uuid !== null && uuid !== void 0 ? uuid : (0, uuid_1.v4)();
    }
    return WorkUnit;
}());
exports.WorkUnit = WorkUnit;
//# sourceMappingURL=WorkUnit.js.map