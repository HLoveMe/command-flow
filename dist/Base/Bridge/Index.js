"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Equipment_1 = require("../Util/Equipment");
var Mobile_1 = require("./Platform/Node/Mobile");
var PC_1 = require("./Platform/Node/PC");
var Mobile_2 = require("./Platform/RN/Mobile");
var PC_2 = require("./Platform/RN/PC");
var Mobile_3 = require("./Platform/Web/Mobile");
var PC_3 = require("./Platform/Web/PC");
var runConfig = (0, Equipment_1.PlatformSelect)({
    web: { pc: PC_3.PCWebConfig, mobile: Mobile_3.MobileWebConfig },
    node: { pc: PC_1.PCNodejsConfig, mobile: Mobile_1.MobileNodejsConfig },
    reactNative: { pc: PC_2.PCRnConfig, mobile: Mobile_2.MobileRnConfig },
});
var PlatformConfig = runConfig[Equipment_1.isPC ? "pc" : "mobile"];
exports.default = PlatformConfig;
//# sourceMappingURL=Index.js.map