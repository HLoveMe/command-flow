import { Observable, of } from "rxjs";
import {
  BooleanObject,
  ObjectTarget,
} from "../../../Object/BaseObject";
import { ObjectAble } from "../../../Object/ObjectTypes";
import {
  CommandLike,
  FileLoadEvent,
  FileOption,
  FileType,
  MobileWebConfigAble,
  PCWebConfigAble,
} from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class MobileWebConfig
  extends PCPlatformConfig
  implements MobileWebConfigAble
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
