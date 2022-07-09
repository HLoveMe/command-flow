import { PartialObserver, Observable, Subject, Subscription } from 'rxjs';
import { Value } from './Object';
import { ContextRunOption } from './Configs';
import { PlatformBridgeAble } from './Bridge/ConfigTypes';
export declare type BaseType<T extends any = any, U extends any = any> = Value.ObjectAble<T> | Value.ArrayAble<T> | Value.MapAble<string | symbol | number, U> | Value.SetAble<T> | Value.StringAble | Value.NumberAble | Value.BooleanAble | Value.DateAble | Value.DataAble | Value.NUllAble | Value.Mixins<Value.ObjectAble<T>>;
export declare type ChannelValue<T extends BaseType = BaseType> = {
    value: T;
    id: string;
    option?: any;
};
export declare type ChannelObject<T extends BaseType = BaseType> = Value.ObjectAble<ChannelValue<T>>;
export declare namespace WorkType {
    export type ConfigInfo = {
        [key: string]: any;
    };
    export type WorkUUID = string;
    export type WorkConstantKey = string;
    export type WorkConstant = Map<WorkConstantKey, BaseType>;
    export type WorkFunction = (input: ChannelObject) => Observable<ChannelObject>;
    export enum WorkRunStatus {
        INIT = 0,
        READY = 1,
        RUNNING = 2,
        COMPLETE = 3
    }
    export interface WorkStatus<T extends BaseType = BaseType> {
        content?: ContextImpl;
        work?: Work[];
        desc?: any;
        value?: T | ChannelValue<T>;
        date?: Date;
        error?: Error;
    }
    type WorkTypes = 'electron_run' | 'web_run' | 'node_run';
    export type WorkOperation = {
        [P in WorkTypes]?: WorkFunction;
    };
    export interface WorkContext {
        beforeWork?: Work;
        nextWork?: Work;
        context?: ContextImpl;
    }
    export interface WorkChain extends Subject<BaseType> {
        runSubscriptions: Map<string, WorkUnitImpl>;
        pools: Subscription[];
    }
    export interface WorkEntrance {
        startRun(value: BaseType, runId?: string): void;
    }
    export interface WorkConfig {
        config: ConfigInfo;
    }
    export interface WorkUnitImpl {
        context?: ContextImpl;
        work?: WorkType.Work;
        uuid: string;
        sub: Subscription;
    }
    export interface Work extends WorkOperation, WorkContext, WorkChain, WorkConfig {
        name: string;
        id: number;
        uuid: WorkUUID;
        run?(input: ChannelObject, option?: any): Observable<ChannelObject>;
        web_run?(input: ChannelObject, option?: any): Observable<ChannelObject>;
        node_run?(input: ChannelObject, option?: any): Observable<ChannelObject>;
        electron_run?(input: ChannelObject, option?: any): Observable<ChannelObject>;
        prepare(before?: Work, next?: Work): Promise<void>;
        stopWork(): Observable<Boolean>;
        clear(): void;
        addVariable(name: string, value: BaseType): void;
        error(err: Error): void;
        logMsg(msg: string, inputValue: ChannelObject): void;
        nextValue(input: BaseType): BaseType;
        completeOneLoop(input: BaseType, toValue: BaseType, success: Boolean): void;
    }
    export {};
}
export declare interface ContextImpl {
    status: WorkType.WorkRunStatus;
    platform: PlatformBridgeAble;
    runOptions: ContextRunOption;
    runConstant: Map<WorkType.WorkUUID, WorkType.WorkConstant>;
    works: WorkType.Work[];
    msgChannel: Subject<WorkType.WorkStatus<any>>;
    pools: Subscription[];
    addWork(work: WorkType.Work): void;
    addWorks(...works: WorkType.Work[]): void;
    addWorkLog(tap: PartialObserver<WorkType.WorkStatus<ChannelObject>>): Subscription;
    prepareWorks(): Promise<void>;
    dispatch(input?: any | BaseType): void;
    addVariable(from: WorkType.Work, name: string, value: BaseType): void;
    sendLog(status: WorkType.WorkStatus<BaseType>): void;
    clear(): void;
    stopWorkChain(): Promise<boolean>;
}
//# sourceMappingURL=Types.d.ts.map