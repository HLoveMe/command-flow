"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginWork = void 0;
const uuid_1 = require("uuid");
const Instruction_1 = require("../Instruction");
const Equipment_1 = require("../../Util/Equipment");
const Object_1 = require("../../Object");
const valueUtil_1 = require("../../Object/valueUtil");
class BeginWork extends Instruction_1.InstructionOTO {
    static OPTION;
    name = "BeginWork";
    static _id = 0;
    // 输入 头部work
    // inputSubject: Subject<BaseType> = new Subject<BaseType>();
    inputSubscription;
    constructor() {
        super();
        this.uuid = (0, uuid_1.v4)();
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
        const id = runId ?? (0, uuid_1.v4)();
        this.nextWork.next(new Object_1.ObjectTarget({
            id,
            value: (0, valueUtil_1.decide)(value),
            option: {},
        }));
    }
    completeOneLoop() { }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.BeginWork = BeginWork;
