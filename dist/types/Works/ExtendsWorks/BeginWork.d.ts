import { BaseType, WorkType } from "../../Types";
import { Subscription } from "rxjs";
import { WorkRunOption } from "../../Configs";
import { EnvironmentAble } from "../../Util/EvalEquipment";
import { InstructionOTO } from "../Instruction";
export declare class BeginWork extends InstructionOTO implements WorkType.Work, EnvironmentAble, WorkType.WorkEntrance {
    static OPTION: WorkRunOption;
    name: string;
    static _id: number;
    inputSubscription: Subscription;
    constructor();
    /**
     * 运行 头部
     * @param value
     */
    startRun(value: BaseType, runId?: string): void;
    completeOneLoop(): void;
    static isAble(): boolean;
}
//# sourceMappingURL=BeginWork.d.ts.map