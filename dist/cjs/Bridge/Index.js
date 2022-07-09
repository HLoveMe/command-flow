"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Equipment_1 = require("../Util/Equipment");
const Mobile_1 = require("./Platform/Node/Mobile");
const PC_1 = require("./Platform/Node/PC");
const Mobile_2 = require("./Platform/Web/Mobile");
const PC_2 = require("./Platform/Web/PC");
require("./Difference/index");
const runConfig = (0, Equipment_1.PlatformSelect)({
    web: { pc: PC_2.PCWebBridge, mobile: Mobile_2.MobileWebBridge },
    node: { pc: PC_1.PCNodejsBridge, mobile: Mobile_1.MobileNodejsBridge },
});
const Target = runConfig[Equipment_1.isPC ? 'pc' : 'mobile'];
const Platform = Reflect.construct(Target, []);
exports.default = Platform;
