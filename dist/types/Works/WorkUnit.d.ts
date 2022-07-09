import { Subscription } from "rxjs";
import { ContextImpl, WorkType } from "../Types";
export declare class WorkUnit implements WorkType.WorkUnitImpl {
    context: ContextImpl;
    work: WorkType.Work;
    uuid: string;
    sub: Subscription;
    constructor(context: ContextImpl, work: WorkType.Work, sub: Subscription, uuid?: string);
}
//# sourceMappingURL=WorkUnit.d.ts.map