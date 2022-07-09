export declare type PlatformOSType = 'web' | 'node' | 'other';
declare enum JSRUNEnvirType {
    NODE_PC = 10,
    WEB_PC = 20,
    WEB_MOBILE = 26,
    OTHER = 100
}
/**
 * 是否为 rn 代码
 */
export declare function isReactNative(): any;
export declare function getJSEnvironment(): {
    name: string;
    versionStr: any;
};
declare var currentEnir: JSRUNEnvirType;
declare const isWeb: boolean;
declare const isNode: boolean;
declare const isPC: boolean;
declare const isMobile: boolean;
declare const isJS = true;
declare type Select<T> = (select: {
    [platform in PlatformOSType]?: T;
}) => T;
declare const PlatformSelect: Select<any>;
export { JSRUNEnvirType, currentEnir, isWeb, isNode, isPC, isMobile, isJS, PlatformSelect, };
//# sourceMappingURL=Equipment.d.ts.map