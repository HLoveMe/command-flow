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
var Instruction_1 = require("../Instruction");
var rxjs_1 = require("rxjs");
var Equipment_1 = require("../../Util/Equipment");
var channel_value_util_1 = require("../../Util/channel-value-util");
var tools_1 = require("../../Util/tools");
/**
 * "1 + $I$ "
 * @param template
 * @param input
 * @param option
 * @returns
 */
function handleEvalCommand(template, params, config, runOption) {
    var input = (0, channel_value_util_1.unpackValue)(params);
    var runCommand = template;
    if (typeof input === 'string') {
        var placeholder = config['*'];
        if (placeholder) {
            runCommand = (0, tools_1.replaceAll)(runCommand, placeholder, input);
        }
    }
    else {
        Object.keys(config).forEach(function (key) {
            var placeholder = config[key];
            var value = input[key];
            runCommand = (0, tools_1.replaceAll)(runCommand, placeholder, value);
        });
    }
    return runCommand;
}
/**
 * 默认：
 * run javascript
 *
 * node:指定
 *  = "#javascript#console.log('hello world')"
 *  = "#shell#echo hello world"
 *
 *  lastWork-output-value:1000
 *  new RunCommandWork('$I$ + 1') === new RunCommandWork('$I$ + 1',{'*':'$I$ '})
 *  ===>run "1000 + 1"
 *  ==================================
 *
 *  lastWork-output-value:{A:1000,B:2}
 *  new RunCommandWork('$X$ + 20 * $Y$',{'A':'$X$,'B':'$Y$' '})
 *  ===> "1000 + 20 * 2"
 *  ===================================
 *
 *  lastWork-output-value:{A:1000,B:2}
 *  new RunCommandWork((params:{A:1000,B:2})=>{
 *     return `${A} * 2 + ${B}`
 *  })
 */
var RunCommandWork = /** @class */ (function (_super) {
    __extends(RunCommandWork, _super);
    function RunCommandWork() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.template = '';
        _this.name = 'RunCommandWork';
        _this.paramsConfig = {};
        _this.callBack = undefined;
        if (typeof args[0] === 'string') {
            var template = args[0] || '$I$';
            var paramsConfig = args[1] || { '*': '$I$' };
            _this.template = template;
            _this.paramsConfig = paramsConfig;
        }
        else if (typeof args[0] === 'function') {
            _this.callBack = args[0];
        }
        return _this;
    }
    RunCommandWork.prototype.run = function (command, option) {
        var _this = this;
        var that = this;
        return new rxjs_1.Observable(function (subscriber) {
            var target;
            if (that.callBack && typeof that.callBack === 'function') {
                target = _this.callBack((0, channel_value_util_1.unpackValue)(command), option);
            }
            else
                target = handleEvalCommand(that.template, command, _this.paramsConfig, option);
            var sub = that.context.platform
                .runCommand(target)
                .subscribe({
                next: function (info) {
                    _this.logMsg("\u6267\u884Ccommand\uFF1A".concat(info.error ? '失败' : '成功', "\u3002\u7ED3\u679C\uFF1A").concat(info.result), command);
                    subscriber.next((0, channel_value_util_1.wrapperValue)(command, (info.error ? undefined : info.result)));
                },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); },
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
        return Equipment_1.isJS;
        // return isNode || isWeb || isRN || isElectron
    };
    return RunCommandWork;
}(Instruction_1.InstructionOTO));
exports.default = RunCommandWork;
