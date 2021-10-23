import { Observable, of } from "rxjs";
import {
  BooleanObject,
  ObjectTarget,
} from "../../../Object/Able/ObjectAble";
import { ObjectAble } from "../../../Object/Able/Ables";
import {
  CommandLike,
  FileLoadEvent,
  FileOption,
  FileType,
  MobileWebBridgeAble,
} from "../../ConfigTypes";
import { PlatformBridge } from "../BasePlatform";

export class MobileWebBridge
  extends PlatformBridge
  implements MobileWebBridgeAble
{
  open(url: string): Observable<BooleanObject> {
    return of(new BooleanObject(false));
  }
  loadFile(
    url: CommandLike,
    option?: FileOption
  ): Observable<ObjectAble<FileLoadEvent>> {
    return of(
      new ObjectTarget<FileLoadEvent>({
        total: 0,
        loaded: 0,
        data: Buffer.of(),
      })
    );
  }
}
