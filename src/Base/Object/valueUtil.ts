import {
  ObjectTarget,
  ArrayObject,
  MapObject,
  SetObject,
  NumberObject,
  StringObject,
  BooleanObject,
  DateObject,
  DataObject,
} from "./Able/ObjectAble";

const ObjectMap = {
  "[object Object]": ObjectTarget,
  "[object Map]": MapObject,
  "[object Set]": SetObject,
  "[object Array]": ArrayObject,
  //   "[object Boolean]": InOutValue.InOutBoolean,
  "[object Date]": DateObject,
  "[object Number]": NumberObject,
  "[object String]": StringObject,
  "[object ArrayBuffer]": DataObject,
};
