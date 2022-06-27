import { createExtendsConstruct } from "./extend-util";
import { ValueExtends } from '../../types'
import { ExecFunctionAble } from "./types";

type ArrayExecAble = ExecFunctionAble<[], 'length'>;
type ArrayInterface = ValueExtends.ExtendsType<ArrayExecAble>;
const ArrayWrapper = createExtendsConstruct<Array<any>>(global.Array, []);


export class ArrayObject extends ArrayWrapper implements ArrayInterface { }
console.log("qwertyuiop", ArrayObject, new ArrayObject())
