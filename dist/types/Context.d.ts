import { WorkType, BaseType, ContextImpl } from './Types';
import { PartialObserver, Subject, Subscription } from 'rxjs';
import { ContextRunOption } from './Configs';
import { PlatformBridge } from './Bridge/Platform/BasePlatform';
export declare class Context implements ContextImpl {
    status: WorkType.WorkRunStatus;
    platform: PlatformBridge;
    /**
     * 运行配置文件 todo
     */
    runOptions: ContextRunOption;
    /**
     * 上下文变量
     */
    runConstant: Map<WorkType.WorkUUID, WorkType.WorkConstant>;
    /**
     * 所有work
     */
    works: WorkType.Work[];
    /**
     * 消息传输通道
     */
    msgChannel: Subject<WorkType.WorkStatus>;
    constructor(runOptions?: ContextRunOption);
    /**
     * 需要销毁的Subscription
     */
    pools: Subscription[];
    /**
     * 增加上下文变量
     * @param from
     * @param name
     * @param value
     */
    addVariable(from: WorkType.Work, name: string, value: BaseType): void;
    workMessage(input: WorkType.WorkStatus): void;
    workError(error: Error): void;
    addWorkLog(tap: PartialObserver<WorkType.WorkStatus>): Subscription;
    sendLog(status: WorkType.WorkStatus): void;
    addWork(work: WorkType.Work): void;
    addWorks(...works: WorkType.Work[]): void;
    prepareWorks(): any;
    dispatch(input?: any | BaseType): void;
    /**
     * 停止执行
     * 关闭
     */
    stopWorkChain(): Promise<boolean>;
    clear(): void;
}
//# sourceMappingURL=Context.d.ts.map