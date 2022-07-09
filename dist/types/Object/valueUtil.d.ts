import { ValueExtends } from './types';
export declare const isAbleType: (value: any) => boolean;
/**
 * 将js 数据转为 BaseType
 * 如果是BaseType类型 将不会包装。见[force]
 * @param value
 * @param force 是否强制包装
 * @returns
 */
export declare function decide<T>(value: T, force?: boolean): ValueExtends.GetDeepAchieve<T>;
//# sourceMappingURL=valueUtil.d.ts.map