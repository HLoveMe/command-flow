export var FileType;
(function (FileType) {
    FileType["Audio"] = "audio/*";
    FileType["Video"] = "video/*";
    FileType["HTML"] = "text/html";
    FileType["Txt"] = "text/plain";
    FileType["Image"] = "image/*";
    FileType["Csv"] = ".csv";
    FileType["Pdf"] = "application/pdf";
    FileType["Word"] = "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword\uFF0Capplication/vnd.openxmlformats-officedocument.wordprocessingml.document";
    FileType["All"] = "*";
})(FileType || (FileType = {}));
export var SupportContentType;
(function (SupportContentType) {
    SupportContentType["JSON"] = "application/json";
    SupportContentType["TEXT"] = "text/plain";
})(SupportContentType || (SupportContentType = {}));
// export interface BasePlatformBridgeAble extends PlatformBridgeAble { }
// export interface WebBridgeAble extends BasePlatformBridgeAble { }
// export interface NodejsBridgeAble extends BasePlatformBridgeAble { }
// export interface MobilePlatformBridgeAble extends PlatformBridgeAble { }
// export interface MobileWebBridgeAble extends MobilePlatformBridgeAble { }
// export interface MobileNodejsBridgeAble extends MobilePlatformBridgeAble { }
//# sourceMappingURL=ConfigTypes.js.map