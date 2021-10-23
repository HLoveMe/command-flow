"use strict";
// import { BooleanAble, NumberAble, ValueAble } from "./Able/Ables";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlFlow = void 0;
var ControlFlow;
(function (ControlFlow) {
    // 比较属性 compare
    var CompareEnum;
    (function (CompareEnum) {
        CompareEnum["More"] = "more";
        CompareEnum["Equal"] = "equal";
        CompareEnum["Less"] = "less";
        CompareEnum["MoreEqual"] = "moreEqual";
        CompareEnum["LessEqual"] = "lessEqual";
    })(CompareEnum = ControlFlow.CompareEnum || (ControlFlow.CompareEnum = {}));
    // 计算属性
    var CalcEnum;
    (function (CalcEnum) {
        CalcEnum["Plus"] = "plus";
        CalcEnum["Reduce"] = "reduce";
        CalcEnum["Multi"] = "multi";
        CalcEnum["Divide"] = "divide";
    })(CalcEnum = ControlFlow.CalcEnum || (ControlFlow.CalcEnum = {}));
    //集合属性
    var CollectionEnum;
    (function (CollectionEnum) {
        CollectionEnum["Has"] = "has";
        CollectionEnum["Push"] = "push";
        CollectionEnum["Pop"] = "pop";
        CollectionEnum["Index"] = "index";
    })(CollectionEnum = ControlFlow.CollectionEnum || (ControlFlow.CollectionEnum = {}));
})(ControlFlow = exports.ControlFlow || (exports.ControlFlow = {}));
//# sourceMappingURL=Control.js.map