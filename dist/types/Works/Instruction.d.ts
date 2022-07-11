import { BaseType, ContextImpl, WorkType, ChannelObject } from '../Types';
import { Subject, Subscription, Observable, Observer } from 'rxjs';
import { ContextRunOption, WorkRunOption } from '../Configs';
import { WorkUnit } from './WorkUnit';
import { EnvironmentAble } from '../Util/EvalEquipment';
/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
export declare class Instruction extends Subject<ChannelObject> implements WorkType.Work, EnvironmentAble {
    observers: Observer<BaseType>[];
    name: string;
    static _id: number;
    id: number;
    uuid: WorkType.WorkUUID;
    beforeWork?: WorkType.Work;
    nextWork?: WorkType.Work;
    context: ContextImpl;
    runSubscriptions: Map<string, WorkUnit>;
    pools: Subscription[];
    config: ContextRunOption;
    constructor();
    prepare(before?: WorkType.Work, next?: WorkType.Work): Promise<void>;
    _connectChannel(): void;
    _run(value: ChannelObject): void;
    stopWork(): Observable<Boolean>;
    clear(): void;
    error(err: Error): void;
    addVariable(name: string, value: BaseType): void;
    logMsg(msg: string, input: ChannelObject): void;
    next(value: ChannelObject): void;
    nextValue(input: ChannelObject): ChannelObject;
    completeOneLoop(input: BaseType, toValue: BaseType, success: Boolean): void;
    toString(): string;
    isAble(): Boolean;
    static isAble(): boolean;
}
export declare class InstructionOTO extends Instruction {
    nextValue(input: ChannelObject): ChannelObject;
    completeOneLoop(input: ChannelObject, toValue: ChannelObject, success: Boolean): void;
    run(input: ChannelObject): Observable<ChannelObject>;
}
export declare class InstructionOTM extends Instruction {
    static OPTION: WorkRunOption;
    name: string;
    nextValue(input: ChannelObject): ChannelObject;
    completeOneLoop(input: ChannelObject, next: ChannelObject, success: Boolean): void;
    run(input: ChannelObject): Observable<ChannelObject>;
}
export declare class InstructionMTM extends Instruction {
    static OPTION: WorkRunOption;
    name: string;
    nextValue(input: ChannelObject): ChannelObject;
    completeOneLoop(input: ChannelObject, next: ChannelObject, success: Boolean): void;
    run(input: ChannelObject): Observable<ChannelObject>;
}
//# sourceMappingURL=Instruction.d.ts.map