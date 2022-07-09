import { v4 as UUID } from "uuid";
import { InstructionOTO } from "../Instruction";
import { isJS } from "../../Util/Equipment";
import { ObjectTarget } from "../../Object";
import { decide } from '../../Object/valueUtil';
export class BeginWork extends InstructionOTO {
    static OPTION;
    name = "BeginWork";
    static _id = 0;
    // 输入 头部work
    // inputSubject: Subject<BaseType> = new Subject<BaseType>();
    inputSubscription;
    constructor() {
        super();
        this.uuid = UUID();
    }
    // // 处理上一个的传入
    // _connectChannel() {
    //   const that = this;
    //   // 处理启动指令 仅仅头部work会触发
    //   var sub1: Subscription =
    //     this.inputSubject
    //       .pipe(
    //         take(Infinity)
    //       ).subscribe({
    //         next: (value: BaseType) => that._run(value),
    //         error: (error) => that.error(error),
    //         complete: null,
    //       })
    //   this.inputSubscription = sub1;
    //   this.pools.push(sub1);
    // }
    // _run(input?: BaseType, initOption?: any): void {
    //   // this.nextWork?.next(input);
    //   this.nextWork.next(input);
    // }
    /**
     * 运行 头部
     * @param value
     */
    startRun(value, runId) {
        const id = runId ?? UUID();
        this.nextWork.next(new ObjectTarget({
            id,
            value: decide(value),
            option: {},
        }));
    }
    completeOneLoop() { }
    static isAble() {
        return isJS;
    }
}
//# sourceMappingURL=BeginWork.js.map