import { FileOption, FileType, QRcodeOption, RequestParamsInit } from "../Bridge/ConfigTypes";
declare type WorkName = string;
export declare type RunCommandWorkConfig = {
    [key: WorkName]: any;
};
export declare interface WorkRunOption {
    RunCommandWork: RunCommandWorkConfig;
    QRCodeWork: QRcodeOption;
    LoadFileWork: FileOption;
    FetchWork: RequestParamsInit;
}
export declare interface Environment {
}
export declare interface ContextRunOption {
    development: boolean;
    environment?: Environment;
    workConfig?: WorkRunOption;
}
/**
 * 默认的配置
 */
export declare const DefaultRunConfig: {
    development: boolean;
    environment: {};
    workConfig: {
        QRCodeWork: QRcodeOption;
        RunCommandWork: {};
        LoadFileWork: {
            type: FileType;
        };
        FetchWork: {
            headers: {
                'Access-Control-Allow-Origin': string;
            };
        };
    };
};
export {};
//# sourceMappingURL=index.d.ts.map