import { WorkType } from "../Types";
export declare class ExecError extends Error {
    date: Date;
    work: WorkType.Work;
    constructor(work: WorkType.Work, error: Error);
}
//# sourceMappingURL=index.d.ts.map