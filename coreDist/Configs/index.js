import { FileType } from "../Bridge/ConfigTypes";
/**
 * 默认的配置
 */
export var DefaultRunConfig = {
    development: true,
    environment: {},
    workConfig: {
        QRCodeWork: {
            type: 4,
            Level: "H",
            SideLength: 100,
        },
        RunCommandWork: {
            input: '$I$',
        },
        LoadFileWork: {
            type: FileType.All
        },
    },
};
//# sourceMappingURL=index.js.map