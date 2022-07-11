"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkType = void 0;
var WorkType;
(function (WorkType) {
    var WorkRunStatus;
    (function (WorkRunStatus) {
        WorkRunStatus[WorkRunStatus["INIT"] = 0] = "INIT";
        // FROZEN,//冻结状态
        WorkRunStatus[WorkRunStatus["READY"] = 1] = "READY";
        // PRE_RUN,//预运行状态 已经初始化
        WorkRunStatus[WorkRunStatus["RUNNING"] = 2] = "RUNNING";
        WorkRunStatus[WorkRunStatus["COMPLETE"] = 3] = "COMPLETE";
    })(WorkRunStatus = WorkType.WorkRunStatus || (WorkType.WorkRunStatus = {}));
})(WorkType = exports.WorkType || (exports.WorkType = {}));
