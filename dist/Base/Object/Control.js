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
        // Length = "length", ?????
        // Concat = "concat",
        // CopyWithin = "copyWithin",
        // Fill = "fill",
        ArrayEnum["Find"] = "find";
        // FindIndex = "findIndex",
        // LastIndexOf = "lastIndexOf",
        // Pop = "pop",
        // Push = "push",
        // Reverse = "reverse",
        // Shift = "shift",
        // Unshift = "unshift",
        // Slice = "slice",
        // Sort = "sort",
        // Splice = "splice",
        // Includes = "includes",
        // IndexOf = "indexOf",
        // Join = "join",
        // Keys = "keys",
        // Entries = "entries",
        // Values = "values",
        // ForEach = "forEach",
        // Filter = "filter",
        // Flat = "flat",
        // FlatMap = "flatMap",
        // Map = "map",
        // Every = "every",
        // Some = "some",
        // Reduce = "reduce",
        // ReduceRight = "reduceRight",
        // At = "at",
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
    var A;
    (function (A) {
        A["ah"] = "aa";
    })(A || (A = {}));
})(ControlFlow = exports.ControlFlow || (exports.ControlFlow = {}));
//# sourceMappingURL=Control.js.map