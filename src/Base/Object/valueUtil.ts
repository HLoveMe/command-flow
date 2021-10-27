let ObjectMap = null;

export const decide = function (value: any) {
  if (ObjectMap === null) {
    const Value = require("./Able/ObjectAble");
    ObjectMap = {
      "[object Object]": Value.ObjectTarget,
      "[object Map]": Value.MapObject,
      "[object Set]": Value.SetObject,
      "[object Array]": Value.ArrayObject,
      "[object Boolean]": Value.BooleanObject,
      "[object Date]": Value.DateObject,
      "[object Number]": Value.NumberObject,
      "[object String]": Value.StringObject,
      "[object ArrayBuffer]": Value.DataObject,
      "[object Uint8Array]": Value.DataObject,
    };
  }
  const key = Object.prototype.toString.call(value);
  const Target = ObjectMap[key];
  if (Target) {
    return new Target(value);
  }
  return null;
};
