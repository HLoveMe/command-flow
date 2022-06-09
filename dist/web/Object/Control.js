// import { BooleanAble, NumberAble, ValueAble } from "./Able/Ables";
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
    //集合属性
    let CollectionEnum;
    (function (CollectionEnum) {
        CollectionEnum["Contain"] = "contain";
        CollectionEnum["Add"] = "add";
        CollectionEnum["ValueFor"] = "valueFor";
        CollectionEnum["Keys"] = "keys";
        CollectionEnum["Values"] = "values";
    })(CollectionEnum = ControlFlow.CollectionEnum || (ControlFlow.CollectionEnum = {}));
    //Object.keys(Object.getOwnPropertyDescriptors(Array.prototype)).map($1=>`${$1}: ControlFlow.ArrayFunction`).join('\n')
    let ArrayEnum;
    (function (ArrayEnum) {
        ArrayEnum["Concat"] = "concat";
        ArrayEnum["CopyWithin"] = "copyWithin";
        ArrayEnum["Fill"] = "fill";
        ArrayEnum["Find"] = "find";
        ArrayEnum["FindIndex"] = "findIndex";
        ArrayEnum["LastIndexOf"] = "lastIndexOf";
        ArrayEnum["Pop"] = "pop";
        ArrayEnum["Push"] = "push";
        ArrayEnum["Reverse"] = "reverse";
        ArrayEnum["Shift"] = "shift";
        ArrayEnum["Unshift"] = "unshift";
        ArrayEnum["Slice"] = "slice";
        ArrayEnum["Sort"] = "sort";
        ArrayEnum["Splice"] = "splice";
        ArrayEnum["Includes"] = "includes";
        ArrayEnum["IndexOf"] = "indexOf";
        ArrayEnum["Join"] = "join";
        ArrayEnum["Keys"] = "keys";
        ArrayEnum["Entries"] = "entries";
        ArrayEnum["Values"] = "values";
        ArrayEnum["ForEach"] = "forEach";
        ArrayEnum["Filter"] = "filter";
        ArrayEnum["Map"] = "map";
        ArrayEnum["Every"] = "every";
        ArrayEnum["Some"] = "some";
        ArrayEnum["Reduce"] = "reduce";
        ArrayEnum["ReduceRight"] = "reduceRight";
    })(ArrayEnum = ControlFlow.ArrayEnum || (ControlFlow.ArrayEnum = {}));
    let SetEnum;
    (function (SetEnum) {
        SetEnum["Has"] = "has";
        SetEnum["Add"] = "add";
        SetEnum["Delete"] = "delete";
        SetEnum["Clear"] = "clear";
        SetEnum["Entries"] = "entries";
        SetEnum["ForEach"] = "forEach";
        SetEnum["Values"] = "values";
        SetEnum["Keys"] = "keys";
    })(SetEnum = ControlFlow.SetEnum || (ControlFlow.SetEnum = {}));
    let MapEnum;
    (function (MapEnum) {
        MapEnum["Get"] = "get";
        MapEnum["Set"] = "set";
        MapEnum["Has"] = "has";
        MapEnum["Delete"] = "delete";
        MapEnum["Clear"] = "clear";
        MapEnum["Entries"] = "entries";
        MapEnum["ForEach"] = "forEach";
        MapEnum["Keys"] = "keys";
        MapEnum["Values"] = "values";
    })(MapEnum = ControlFlow.MapEnum || (ControlFlow.MapEnum = {}));
})(ControlFlow || (ControlFlow = {}));
//# sourceMappingURL=Control.js.map