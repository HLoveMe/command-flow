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
        CollectionEnum["Contain"] = "contain";
        CollectionEnum["Add"] = "add";
        CollectionEnum["ValueFor"] = "valueFor";
        CollectionEnum["Keys"] = "keys";
        CollectionEnum["Values"] = "values";
    })(CollectionEnum = ControlFlow.CollectionEnum || (ControlFlow.CollectionEnum = {}));
    var ArrayEnum;
    (function (ArrayEnum) {
        ArrayEnum["Length"] = "length";
        ArrayEnum["Constructor"] = "constructor";
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
        ArrayEnum["Flat"] = "flat";
        ArrayEnum["FlatMap"] = "flatMap";
        ArrayEnum["Map"] = "map";
        ArrayEnum["Every"] = "every";
        ArrayEnum["Some"] = "some";
        ArrayEnum["Reduce"] = "reduce";
        ArrayEnum["ReduceRight"] = "reduceRight";
        ArrayEnum["ToLocaleString"] = "toLocaleString";
        ArrayEnum["ToString"] = "toString";
        ArrayEnum["At"] = "at";
    })(ArrayEnum = ControlFlow.ArrayEnum || (ControlFlow.ArrayEnum = {}));
    var SetEnum;
    (function (SetEnum) {
        SetEnum["Has"] = "has";
        SetEnum["Add"] = "add";
        SetEnum["Delete"] = "delete";
        SetEnum["Clear"] = "clear";
        SetEnum["Entries"] = "entries";
        SetEnum["ForEach"] = "forEach";
        SetEnum["Size"] = "size";
        SetEnum["Values"] = "values";
        SetEnum["Keys"] = "keys";
    })(SetEnum = ControlFlow.SetEnum || (ControlFlow.SetEnum = {}));
    var MapEnum;
    (function (MapEnum) {
        MapEnum["Get"] = "get";
        MapEnum["Set"] = "set";
        MapEnum["Has"] = "has";
        MapEnum["Delete"] = "delete";
        MapEnum["Clear"] = "clear";
        MapEnum["Entries"] = "entries";
        MapEnum["ForEach"] = "forEach";
        MapEnum["Keys"] = "keys";
        MapEnum["Size"] = "size";
        MapEnum["Values"] = "values";
    })(MapEnum = ControlFlow.MapEnum || (ControlFlow.MapEnum = {}));
})(ControlFlow = exports.ControlFlow || (exports.ControlFlow = {}));
//# sourceMappingURL=Control.js.map