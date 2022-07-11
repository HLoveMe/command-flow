"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultRunConfig = void 0;
var ConfigTypes_1 = require("../Bridge/ConfigTypes");
/**
 * 默认的配置
 */
exports.DefaultRunConfig = {
    development: true,
    environment: {},
    workConfig: {
        QRCodeWork: {
            type: 4,
            Level: "H",
            SideLength: 100,
        },
        RunCommandWork: {},
        LoadFileWork: {
            type: ConfigTypes_1.FileType.All
        },
        FetchWork: {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        },
    },
};
