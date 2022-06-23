// import { BooleanAble, NumberAble, ValueAble } from "./Able/Ables";

import { BaseType } from '../..';
import { Value } from '..';
export namespace ControlFlow {
  // 比较属性 compare
  export enum CompareEnum {
    More = 'more', //>
    Equal = 'equal', //==
    Less = 'less', //<
    MoreEqual = 'moreEqual', //>=
    LessEqual = 'lessEqual', //<=
  }
  // 计算属性
  export enum CalcEnum {
    Plus = 'plus', //+
    Reduce = 'reduce', // -
    Multi = 'multi', // *
    Divide = 'divide', // /
  }

  // Number
  export enum NumberEnum {
    ToExponential$ = 'toExponential',
    ToFixed$ = 'toFixed',
    ToPrecision = 'toPrecision',
  }

  //集合属性
  export enum CollectionEnum {
    Contain = 'contain', //是否包含
    Add = 'add', //增加
    ValueFor = 'valueFor', // 取值
    Keys = 'keys', // 所有keys
    Values = 'values', // 所有values
  }

  export enum ArrayEnum {
    Concat = 'concat',
    CopyWithin = 'copyWithin',
    Fill = 'fill',
    Find = 'find',
    FindIndex = 'findIndex',
    LastIndexOf = 'lastIndexOf',
    Pop = 'pop',
    Push = 'push',
    Reverse = 'reverse',
    Shift = 'shift',
    Unshift = 'unshift',
    Slice = 'slice',
    Sort = 'sort',
    Splice = 'splice',
    Includes = 'includes',
    IndexOf = 'indexOf',
    Join = 'join',
    Keys = 'keys',
    Entries = 'entries',
    Values = 'values',
    ForEach = 'forEach',
    Filter = 'filter',
    Map = 'map',
    Every = 'every',
    Some = 'some',
    Reduce = 'reduce',
    ReduceRight = 'reduceRight',
  }
  /**
   a = Object.keys(Object.getOwnPropertyDescriptors(String.prototype)).map($1=>`${$1}: ${$1}`).join('\n')
   b = a.split("\n")
   function titleCase(str) {
    newStr = str.slice(0,1).toUpperCase() +str.slice(1);
    return newStr;
  }
  c = b.map($1=>{return $1.replace(':','$=$')}).map($1=>{return "$$"+titleCase($1)})
 */
  export enum SetEnum {
    Has = 'has',
    Add = 'add',
    Delete = 'delete',
    Clear = 'clear',
    Entries = 'entries',
    ForEach = 'forEach',
    Values = 'values',
    Keys = 'keys',
  }

  export enum MapEnum {
    Get = 'get',
    Set = 'set',
    Has = 'has',
    Delete = 'delete',
    Clear = 'clear',
    Entries = 'entries',
    ForEach = 'forEach',
    Keys = 'keys',
    Values = 'values',
  }

  export enum StringEnum {
    Anchor = 'anchor',
    Big = 'big',
    Blink = 'blink',
    Bold = 'bold',
    CharAt = 'charAt',
    CharCodeAt = 'charCodeAt',
    CodePointAt = 'codePointAt',
    Concat = 'concat',
    EndsWith = 'endsWith',
    Fontcolor = 'fontcolor',
    Fontsize = 'fontsize',
    Fixed = 'fixed',
    Includes = 'includes',
    IndexOf = 'indexOf',
    Italics = 'italics',
    LastIndexOf = 'lastIndexOf',
    Link = 'link',
    LocaleCompare = 'localeCompare',
    Match = 'match',
    MatchAll = 'matchAll',
    Normalize = 'normalize',
    PadEnd = 'padEnd',
    PadStart = 'padStart',
    Repeat = 'repeat',
    Replace = 'replace',
    ReplaceAll = 'replaceAll',
    Search = 'search',
    Slice = 'slice',
    Small = 'small',
    Split = 'split',
    Strike = 'strike',
    Sub = 'sub',
    Substr = 'substr',
    Substring = 'substring',
    Sup = 'sup',
    StartsWith = 'startsWith',
    ToString = 'toString',
    Trim = 'trim',
    TrimStart = 'trimStart',
    TrimLeft = 'trimLeft',
    TrimEnd = 'trimEnd',
    TrimRight = 'trimRight',
    ToLocaleLowerCase = 'toLocaleLowerCase',
    ToLocaleUpperCase = 'toLocaleUpperCase',
    ToLowerCase = 'toLowerCase',
    ToUpperCase = 'toUpperCase',
    ValueOf = 'valueOf',
    At = 'at',
  }

  export enum DateEnum {
    ToDateString = 'toDateString',
    ToTimeString = 'toTimeString',
    ToISOString = 'toISOString',
    ToUTCString = 'toUTCString',
    GetDate = 'getDate',
    SetDate = 'setDate',
    GetDay = 'getDay',
    GetFullYear = 'getFullYear',
    SetFullYear = 'setFullYear',
    GetHours = 'getHours',
    SetHours = 'setHours',
    GetMilliseconds = 'getMilliseconds',
    SetMilliseconds = 'setMilliseconds',
    GetMinutes = 'getMinutes',
    SetMinutes = 'setMinutes',
    GetMonth = 'getMonth',
    SetMonth = 'setMonth',
    GetSeconds = 'getSeconds',
    SetSeconds = 'setSeconds',
    GetTime = 'getTime',
    SetTime = 'setTime',
    GetTimezoneOffset = 'getTimezoneOffset',
    GetUTCDate = 'getUTCDate',
    SetUTCDate = 'setUTCDate',
    GetUTCDay = 'getUTCDay',
    GetUTCFullYear = 'getUTCFullYear',
    SetUTCFullYear = 'setUTCFullYear',
    GetUTCHours = 'getUTCHours',
    SetUTCHours = 'setUTCHours',
    GetUTCMilliseconds = 'getUTCMilliseconds',
    SetUTCMilliseconds = 'setUTCMilliseconds',
    GetUTCMinutes = 'getUTCMinutes',
    SetUTCMinutes = 'setUTCMinutes',
    GetUTCMonth = 'getUTCMonth',
    SetUTCMonth = 'setUTCMonth',
    GetUTCSeconds = 'getUTCSeconds',
    SetUTCSeconds = 'setUTCSeconds',
    ToJSON = 'toJSON',
    ToLocaleString = 'toLocaleString',
    ToLocaleDateString = 'toLocaleDateString',
    ToLocaleTimeString = 'toLocaleTimeString',
  }

  // 比较 接口
  export declare type CompareExec = (
    type: CompareEnum,
    target: Value.ValueAble<any>
  ) => Value.BooleanAble;

  export declare type CompareFunction = (
    target: Value.ValueAble<any>
  ) => Value.BooleanAble;

  declare type CompareAble = {
    [T in CompareEnum]: CompareFunction;
  };
  export interface Compare<U extends Value.ValueAble<any>> extends CompareAble {
    compare<T extends CompareEnum>(type: T, target: U): Value.BooleanAble;
  }

  // 计算接口
  export declare type CalcFunction = (
    target: Value.NumberAble
  ) => Value.NumberAble;

  declare type CalcAble = {
    [T in CalcEnum]: CalcFunction;
  };
  export interface Calc<U extends Value.NumberAble> extends CalcAble {
    calc(type: ControlFlow.CalcEnum, target: U): U;
  }

  // Array
  export declare type CollectionArrayExec = (
    key: ArrayEnum,
    ...args: any[]
  ) => BaseType;
  export declare type ArrayFunction<U> = (
    ...args
  ) => BaseType | U | Value.NULL | any;
  declare type ArrayAbsoluteAble<U> = {
    [T in ArrayEnum]: ArrayFunction<U>;
  };
  export interface CollectionArray<U> extends ArrayAbsoluteAble<U> {
    collectionArray(
      key: ArrayEnum,
      ...args: any[]
    ): BaseType | U | Value.NULL | any;
  }

  // Set
  export declare type CollectionSetExec = (
    key: SetEnum,
    ...args: any[]
  ) => BaseType | void;
  export declare type SetFunction<U> = (
    ...args: any[]
  ) => BaseType | U | Value.NULL | any;
  declare type SetAbsoluteAble<U> = {
    [T in SetEnum]: SetFunction<U>;
  };
  export interface CollectionSet<U> extends SetAbsoluteAble<U> {
    collectionSet(
      key: SetEnum,
      ...args: any[]
    ): BaseType | U | Value.NULL | any;
  }

  // Map
  export declare type CollectionMapExec = (
    key: MapEnum,
    ...args: any[]
  ) => BaseType | void;
  export declare type MapFunction<U> = (
    ...args: any[]
  ) => CollectionMap<any, U> | U | any;
  export declare type MapAbsoluteAble<U> = {
    [T in MapEnum]: MapFunction<U>;
  };
  export interface CollectionMap<T, U> extends MapAbsoluteAble<U> {
    collectionMap(key: MapEnum, ...args: any[]): U | void;
  }

  // String
  export declare type StringExec = (...args: any[]) => any;
  export declare type StringFunction = {
    [T in StringEnum]: StringExec;
  };
  export interface ObjectString extends StringFunction {
    execString(key: StringEnum, ...args: any[]): any;
  }

  // Number

  export declare type NumberExec = (...args: any[]) => any;
  export declare type NumberFunction = {
    [T in NumberEnum]: NumberExec;
  };
  export interface ObjectNumber extends NumberFunction {
    execNumber(key: NumberEnum, ...args: any[]): any;
  }

  // Date

  export declare type DateExec = NumberExec;
  export declare type DateFunction = {
    [T in DateEnum]: DateExec;
  }
  export interface ObjectDate extends DateFunction {
    execDate(key: DateEnum, ...args: any[]): any;
  }
}
