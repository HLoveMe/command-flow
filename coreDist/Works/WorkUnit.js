import { v4 as UUID } from "uuid";
var WorkUnit = /** @class */ (function () {
    function WorkUnit(context, work, sub, uuid) {
        this.context = context;
        this.work = work;
        this.sub = sub;
        this.uuid = uuid !== null && uuid !== void 0 ? uuid : UUID();
    }
    return WorkUnit;
}());
export { WorkUnit };
//# sourceMappingURL=WorkUnit.js.map