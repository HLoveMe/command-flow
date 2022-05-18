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
import { BooleanObject } from '../../Object/Able/ObjectAble';
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
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
    function RunCommandWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "RunCommandWork";
        return _this;
    }
    RunCommandWork.prototype.run = function (command, option) {
        var _this = this;
        var that = this;
        return new Observable(function (subscriber) {
            var target;
            if (command === null || command === undefined)
                target = "";
            else {
                // target = ((command as Value.ValueAble<any>).valueOf() as Object).toString();
                target = unpackValue(command);
            }
            var sub = that.context.platform
                .runCommand(target)
                .subscribe({
                next: function (info) {
                    _this.logMsg(JSON.stringify(info));
                    subscriber.next(wrapperValue(command, new BooleanObject(info.error !== null && info.status === true)));
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