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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AloneInstruction = exports.MultipleInstruction = exports.SingleInstruction = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Error_1 = require("../Error");
var Equipment_1 = require("../Util/Equipment");
var UUID = require("uuid/v4");
/**
 * 1:输入形式
 * 2:多次执行
 * 3:
 */
var SingleInstruction = /** @class */ (function () {
    function SingleInstruction() {
        this.name = "SingleInstruction";
        this.id = SingleInstruction._id++;
        this.pools = [];
        // 运行配置 config:OPTION todo
        this.config = { dev: true };
        this.uuid = UUID();
    }
    SingleInstruction.prototype.error = function (err) {
        this.context && this.context.msgChannel.error(new Error_1.ExecError(this, err));
    };
    SingleInstruction.prototype.addVariable = function (name, value) {
        this.context && this.context.addVariable(this, name, value);
    };
    // 运行
    /**
     * @param input 为上一个Work 的输出
     * @param before 上一个Worke
     * @param next 下一个
     */
    SingleInstruction.prototype.prepare = function (input, before, next) {
        this.before = before;
        this.next = next;
        this.output = new rxjs_1.Subject();
        this.input = new rxjs_1.Subject();
        this.handleInput(input);
    };
    SingleInstruction.prototype._run = function (value) {
        var _this = this;
        var that = this;
        var execFunc = (0, Equipment_1.PlatformSelect)({
            reactNative: function () { var _a; return ((_a = that.rn_run) !== null && _a !== void 0 ? _a : that.run)(value); },
            web: function () { var _a; return ((_a = that.web_run) !== null && _a !== void 0 ? _a : that.run)(value); },
            node: function () {
                var _a;
                return ((_a = that.node_run) !== null && _a !== void 0 ? _a : that.run)(value);
            },
        });
        execFunc(value).then(function (res) {
            _this.output.next(res);
        });
    };
    // 处理上一个的传入
    SingleInstruction.prototype.handleInput = function (input) {
        var that = this;
        // 连接上一个的输出
        var observer = {
            next: function (value) { return that.input.next(value); },
            error: null,
            complete: null,
        };
        var sub1 = ((0, rxjs_1.isObservable)(input) ? input : (0, rxjs_1.of)(input)).subscribe(observer);
        this.pools.push(sub1);
        // 处理数据
        var sub2 = this.input.pipe((0, operators_1.takeLast)(1)).subscribe({
            complete: function () {
                // 这里要处理 如果是异步run 怎么处理complete和then的回调时机
                // this.getAncestorWorks().forEach(($1) => $1.stop());
            },
            error: function (error) { return that.error(error); },
            next: function (value) { return that._run(value); },
        });
        this.pools.push(sub2);
    };
    //
    SingleInstruction.prototype.getOutputObserver = function (next, error, complete) {
        var that = this;
        return {
            next: next !== null && next !== void 0 ? next : (function (value) { return that.output.next(value); }),
            complete: complete !== null && complete !== void 0 ? complete : (function () { return that.output.complete(); }),
            error: error !== null && error !== void 0 ? error : (function (error) {
                var _a;
                (_a = that.context) === null || _a === void 0 ? void 0 : _a.msgChannel.error(error);
                that.output.error(error);
            }),
        };
    };
    // 获取之前的所有Work
    SingleInstruction.prototype.getAncestorWorks = function () {
        return this.before
            ? __spreadArray([this.before], this.before.getAncestorWorks(), true) : [];
    };
    // 处理
    SingleInstruction.prototype.run = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    SingleInstruction.prototype.stop = function () {
        this.input.unsubscribe();
        this.output.unsubscribe();
    };
    SingleInstruction.prototype.clear = function () {
        this.pools && this.pools.forEach(function ($1) { return $1.unsubscribe(); });
        this.pools.length = 0;
        // throw new Error("Method not implemented.");
    };
    SingleInstruction._id = 0;
    return SingleInstruction;
}());
exports.SingleInstruction = SingleInstruction;
var MultipleInstruction = /** @class */ (function (_super) {
    __extends(MultipleInstruction, _super);
    function MultipleInstruction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "MultipleInstruction";
        return _this;
    }
    MultipleInstruction.prototype.handleInput = function () {
        var that = this;
        var sub = this.input.subscribe(function (value) { return that._run(value); }, function (error) { return that.error(error); });
        this.pools.push(sub);
    };
    return MultipleInstruction;
}(SingleInstruction));
exports.MultipleInstruction = MultipleInstruction;
/**
 * 没有输出的任务
 */
var AloneInstruction = /** @class */ (function (_super) {
    __extends(AloneInstruction, _super);
    function AloneInstruction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "AloneInstruction";
        return _this;
    }
    AloneInstruction.prototype.handleInput = function () {
        // this.output.complete();
        this.run(null);
    };
    AloneInstruction.prototype.run = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    return AloneInstruction;
}(SingleInstruction));
exports.AloneInstruction = AloneInstruction;
//# sourceMappingURL=Work.js.map