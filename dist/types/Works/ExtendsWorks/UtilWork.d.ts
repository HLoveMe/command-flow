import { Observable } from "rxjs";
import { NumberObjectAble } from "../../Object/index";
import { ChannelObject } from "../../Types";
import { InstructionOTM, InstructionOTO } from "../Instruction";
declare class IntervalWork extends InstructionOTM {
    name: string;
    intervalTime: number;
    maxCount: number;
    notifier: Observable<any>;
    constructor(interval: number, max?: number, notifier?: Observable<any>);
    run(input: ChannelObject): Observable<ChannelObject<NumberObjectAble>>;
}
declare class TimeoutWork extends InstructionOTO {
    name: string;
    intervalTime: number;
    constructor(interval: number);
    run(input: ChannelObject): Observable<ChannelObject<NumberObjectAble>>;
}
declare class DelayIntervalWork extends InstructionOTM {
    name: string;
    intervalTime: number;
    maxCount: number;
    delayTime: number;
    notifier: Observable<any>;
    constructor(delay?: number, interval?: number, max?: number, notifier?: Observable<any>);
    run(input: ChannelObject): Observable<ChannelObject<NumberObjectAble>>;
}
export { IntervalWork, TimeoutWork, DelayIntervalWork };
//# sourceMappingURL=UtilWork.d.ts.map