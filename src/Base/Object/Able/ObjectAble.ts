import {
  ArrayAble,
  MapAble,
  SetAble,
  NumberAble,
  StringAble,
  ValueAble,
  ObjectAble,
  BooleanAble,
  DateAble,
  DataAble,
} from "./Ables";
import { ControlFlow } from "../Control";
import { attribute, DefaultValue, Params } from "../util";

import { ObjectTarget } from "./Targets/ObjectTarget";
import { ArrayObject } from "./Targets/ArrayObject";
import { MapObject } from "./Targets/MapObject";
import { SetObject } from "./Targets/SetObject";
import { NumberObject } from "./Targets/NumberObject";
import { StringObject } from "./Targets/StringObject";
import { BooleanObject } from "./Targets/BooleanObject";
import { DateObject } from "./Targets/DateObject";
import { DataObject } from "./Targets/DataObject";

export {
  ObjectTarget,
  ArrayObject,
  MapObject,
  SetObject,
  NumberObject,
  StringObject,
  BooleanObject,
  DateObject,
  DataObject,
};

// const keys = Object.keys(ControlFlow.CompareEnum);
// Object.keys(module.exports).forEach(($1) => {
//   if ($1 != "ObjectManager") {
//     const Target = module.exports[$1];
//     keys.forEach((key) => {
//       !Target.prototype[key] &&
//         (Target.prototype[key] = function (target: ValueAble<any>) {
//           return this._value == target._value;
//         });
//     });
//     !Target.prototype["compare"] &&
//       (Target.prototype["compare"] = function compare<
//         T extends ControlFlow.CompareEnum
//       >(type: T, target: ValueAble<any>): boolean {
//         const compareFunc = (this as any)[type];
//         if (typeof compareFunc == "function") {
//           return (compareFunc as ControlFlow.CompareFunction).bind(this)(
//             target
//           );
//         }
//         return false;
//       });
//   }
// });
