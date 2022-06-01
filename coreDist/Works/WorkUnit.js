"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkUnit = void 0;
const uuid_1 = require("uuid");
class WorkUnit {
    constructor(context, work, sub, uuid) {
        this.context = context;
        this.work = work;
        this.sub = sub;
        this.uuid = uuid !== null && uuid !== void 0 ? uuid : (0, uuid_1.v4)();
    }
}
exports.WorkUnit = WorkUnit;
//# sourceMappingURL=WorkUnit.js.map