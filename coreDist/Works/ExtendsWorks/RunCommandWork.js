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
import { InstructionOTO } from "../Instruction";
import { Observable } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
/**
 * "1 + $I$ "
 * @param template
 * @param input
 * @param option
 * @returns
 */
function handleEvalCommand(template, input, option) {
    var inputKey = option.input;
    var command = template.replace(inputKey, input);
    return command;
}
/**
 * 默认：
 * run javascript
 *
 * node:指定
 *  = "#javascript#console.log('hello world')"
 *  = "#shell#echo hello world"
 */
var RunCommandWork = /** @class */ (function (_super) {
    __extends(RunCommandWork, _super);
    function RunCommandWork(template) {
        if (template === void 0) { template = '$I$'; }
        var _this = _super.call(this) || this;
        _this.template = '';
        _this.name = "RunCommandWork";
        _this.template = template;
        return _this;
    }
    RunCommandWork.prototype.run = function (command, option) {
        var _this = this;
        var that = this;
        return new Observable(function (subscriber) {
            var target = handleEvalCommand(that.template, unpackValue(command), option);
            var sub = that.context.platform
                .runCommand(target)
                .subscribe({
                next: function (info) {
                    _this.logMsg("\u6267\u884Ccommand\uFF1A" + (info.error ? '失败' : '成功') + "\u3002\u7ED3\u679C\uFF1A" + info.result, command);
                    subscriber.next(wrapperValue(command, info.error ? undefined : info.result));
                },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); }
            });
            return {
                unsubscribe: function () {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    };
    RunCommandWork.isAble = function () {
        return isJS;
        // return isNode || isWeb || isRN || isElectron
    };
    return RunCommandWork;
}(InstructionOTO));
export default RunCommandWork;
//# sourceMappingURL=RunCommandWork.js.map