import { v4 as UUID } from "uuid";
export class WorkUnit {
    constructor(context, work, sub, uuid) {
        this.context = context;
        this.work = work;
        this.sub = sub;
        this.uuid = uuid !== null && uuid !== void 0 ? uuid : UUID();
    }
}
//# sourceMappingURL=WorkUnit.js.map