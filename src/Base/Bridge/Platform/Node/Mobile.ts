import { Observable, of } from "rxjs";
import { BooleanObject, ObjectTarget } from "../../../Object/BaseObject";
import { ObjectAble } from "../../../Object/ObjectTypes";
import {
  PathLike,
  FileLoadEvent,
  FileOption,
  MobileNodejsBridgeAble,
} from "../../ConfigTypes";
import { PlatformBridge } from "../BasePlatform";

export class MobileNodejsBridge
  extends PlatformBridge
  implements MobileNodejsBridgeAble
{
  open(url: string): Observable<BooleanObject> {
    return of(new BooleanObject(false));
  }
  loadFile(
    url: PathLike,
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
