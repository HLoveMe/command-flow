import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';
import { Value } from "../../../Object";
import { NumberObjectAble } from './NumberObject';
declare type MapExecInterface<K, V> = ValueExec.ExecFunctionAble<Map<K, V>, 'size'>;
declare type BaseMapInterface<K, V> = ValueExec.BlurExecInterface<MapExecInterface<K, V>>;
interface _MapObjectAble<K, V> extends Value.MapAble<K, V>, BaseMapInterface<K, V> {
    get size(): NumberObjectAble;
}
declare type CustomConstructor = {
    new <K, V>(map: Map<K, V>): _MapObjectAble<K, V>;
} & ValueExtends.Constructor<Map<any, any>>;
declare type MapObjectAble<K, V> = ValueExtends.WrapperReturnInterface<MapExecInterface<K, V>> & Value.MapAble<K, V> & {
    get size(): NumberObjectAble;
};
declare const MapObject: CustomConstructor;
export { MapObject, MapObjectAble };
//# sourceMappingURL=MapObject.d.ts.map