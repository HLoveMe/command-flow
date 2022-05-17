"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Equipment_1 = require("../Util/Equipment");
var Mobile_1 = require("./Platform/Node/Mobile");
var PC_1 = require("./Platform/Node/PC");
var Mobile_2 = require("./Platform/Web/Mobile");
var PC_2 = require("./Platform/Web/PC");
require("./Difference/index");
var runConfig = (0, Equipment_1.PlatformSelect)({
    web: { pc: PC_2.PCWebBridge, mobile: Mobile_2.MobileWebBridge },
    node: { pc: PC_1.PCNodejsBridge, mobile: Mobile_1.MobileNodejsBridge },
    electron: {},
});
var Target = runConfig[Equipment_1.isElectron ? "electron" : Equipment_1.isPC ? "pc" : "mobile"];
var Platform = new Target();
exports.default = Platform;
//# sourceMappingURL=Index.js.map