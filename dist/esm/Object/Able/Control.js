export var ControlFlow;
(function (ControlFlow) {
    // 比较属性 compare
    let CompareEnum;
    (function (CompareEnum) {
        CompareEnum["More"] = "more";
        CompareEnum["Equal"] = "equal";
        CompareEnum["Less"] = "less";
        CompareEnum["MoreEqual"] = "moreEqual";
        CompareEnum["LessEqual"] = "lessEqual";
    })(CompareEnum = ControlFlow.CompareEnum || (ControlFlow.CompareEnum = {}));
    // 计算属性
    let CalcEnum;
    (function (CalcEnum) {
        CalcEnum["Plus"] = "plus";
        CalcEnum["Reduce"] = "reduce";
        CalcEnum["Multi"] = "multi";
        CalcEnum["Divide"] = "divide";
    })(CalcEnum = ControlFlow.CalcEnum || (ControlFlow.CalcEnum = {}));
})(ControlFlow || (ControlFlow = {}));
//# sourceMappingURL=Control.js.map