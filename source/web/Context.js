import { WorkType } from "./Types";
import { forkJoin, Subject } from "rxjs";
import { DefaultRunConfig } from "./Configs";
import { BooleanObject, ObjectTarget } from "./Object/Able/ObjectAble";
import Platform from "./Bridge/Index";
import { BeginWork } from "./Works/ExtendsWorks/BeginWork";
import { decide } from "./Object/valueUtil";
import { take } from "rxjs/operators";
export class Context {
    constructor(runOptions) {
        this.status = WorkType.WorkRunStatus.INIT;
        this.platform = Platform;
        /**
         * 上下文变量
         */
        this.runConstant = new Map();
        /**
         * 所有work
         */
        this.works = [];
        /**
         * 消息传输通道
         */
        this.msgChannel = new Subject();
        /**
         * 需要销毁的Subscription
         */
        this.pools = [];
        this.runOptions = (runOptions || DefaultRunConfig);
        const sub = this.msgChannel.subscribe({
            next: (value) => this.workMessage(value),
            error: (error) => this.workError(error),
        });
        this.pools.push(sub);
        this.addWork(new BeginWork());
    }
    /**
     * 增加上下文变量
     * @param from
     * @param name
     * @param value
     */
    addVariable(from, name, value) {
        const w_map = this.runConstant.get(from.uuid);
        !w_map && this.runConstant.set(from.uuid, new Map());
        this.runConstant.get(from.uuid).set(name, value);
    }
    workMessage(input) {
        console.log("msgChannel", input);
    }
    workError(error) {
        console.log("msgChannelError", error);
        this.stopWorkChain();
    }
    addWorkLog(tap) {
        return this.msgChannel.subscribe(tap);
    }
    sendLog(status) {
        const log = {
            date: new Date(),
            work: status.work.filter(($1) => $1?.name),
            desc: status.desc,
            value: status.value,
            error: status.error,
        };
        this.msgChannel.next(log);
    }
    addWork(work) {
        if (work.constructor.isAble && work.constructor.isAble() === false) {
            const desc = "[content][Func:addWork][work isAble is false]";
            return this.sendLog({
                content: this,
                work: [],
                desc,
                value: null,
                error: new Error(desc),
            });
        }
        if (this.status !== WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: "[content][Func:addWork][context status is not init]",
                value: new BooleanObject(false),
            });
        }
        work.context = this;
        this.works.push(work);
    }
    addWorks(...works) {
        works.forEach(this.addWork);
    }
    async prepareWorks() {
        if (this.status !== WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: "[content][Func:prepareWorks][context status is not init]",
                value: new BooleanObject(false),
            });
        }
        ;
        await Promise.all(this.works.map(($1, index, source) => {
            const before = source[index - 1];
            const after = source[index + 1];
            return $1.prepare(before, after);
        }));
        this.status = WorkType.WorkRunStatus.READY;
    }
    dispatch(input) {
        if (this.status === WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: "[context][Func:run][run status is not ready  or 已经初始化]",
                value: new BooleanObject(false),
            });
        }
        ;
        const inputWork = this.works[0];
        if (inputWork) {
            inputWork.startRun(decide(input));
        }
        this.status = WorkType.WorkRunStatus.RUNNING;
    }
    /**
     * 停止执行
     * 关闭
     */
    stopWorkChain() {
        const that = this;
        return new Promise((resolve, reject) => {
            const taskUns = this.works.map(($1) => $1.stopWork());
            let isSuccess = false;
            let errors = [];
            forkJoin(taskUns).pipe(take(1)).subscribe({
                next: (values) => {
                    (isSuccess = values.every(($1, index) => {
                        if ($1 === true)
                            return true;
                        errors.push(this.works[index]);
                        return false;
                    }));
                    resolve(isSuccess);
                },
                error: (error) => {
                    // 关闭报错
                    reject(error);
                },
                complete: () => {
                    this.sendLog({
                        content: that,
                        work: errors,
                        desc: "[content][Func:stopWorkChain]",
                        value: new ObjectTarget({
                            id: 'stopWorkChain',
                            value: decide(isSuccess),
                            option: {},
                        }),
                    });
                },
            });
        });
    }
    clear() {
        this.pools.forEach(($1) => $1.unsubscribe());
    }
}
//# sourceMappingURL=Context.js.map