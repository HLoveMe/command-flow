
import { ObjectTarget } from "./Base/ObjectTarget";
import { ArrayObject, ArrayObjectAble } from "./Base/ArrayObject";
import { MapObject, MapObjectAble } from "./Base/MapObject";
import { SetObject, SetObjectAble } from "./Base/SetObject";
import { NumberObject } from "./Base/NumberObject";
import { StringObject } from "./Base/StringObject";
import { BooleanObject } from "./Base/BooleanObject";
import { DateObject, DateObjectAble } from "./Base/DateObject";
import { DataObject } from "./Base/DataObject";
import { NULLObject } from './Base/NULLObject'
import { createExtendsConstruct, createExtendsInstance } from '../extend-util'
// import { MixinsObject } from './Targets/Mixins'

export {
  ObjectTarget,
  ArrayObject, ArrayObjectAble,
  MapObject, MapObjectAble,
  SetObject, SetObjectAble,
  NumberObject,
  StringObject,
  BooleanObject,
  DateObject, DateObjectAble,
  DataObject,
  // MixinsObject,
  NULLObject,
  createExtendsConstruct,
  createExtendsInstance
};