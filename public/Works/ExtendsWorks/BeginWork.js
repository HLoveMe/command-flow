"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginWork = void 0;
var uuid_1 = require("uuid");
var Instruction_1 = require("../Instruction");
var Equipment_1 = require("../../Util/Equipment");
var BeginWork = /** @class */ (function (_super) {
    __extends(BeginWork, _super);
    function BeginWork() {
        var _this = _super.call(this) || this;
        _this.name = "BeginWork";
        _this.uuid = (0, uuid_1.v4)();
        return _this;
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
    BeginWork.prototype.startRun = function (value) {
        this.nextWork.next(value);
    };
    BeginWork.prototype.completeOneLoop = function () { };
    BeginWork.isAble = function () {
        return Equipment_1.isJS;
    };
    BeginWork._id = 0;
    return BeginWork;
}(Instruction_1.InstructionOTO));
exports.BeginWork = BeginWork;
//# sourceMappingURL=BeginWork.js.map