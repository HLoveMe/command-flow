import { Observable, of } from "rxjs";
import { BooleanObject, ObjectTarget } from "../../../Object";
import { Value } from "../../../Object";
import {
  PathLike,
  FileLoadEvent,
  FileOption,
} from "../../ConfigTypes";
import { PlatformBridge } from "../BasePlatform";

export class MobileNodejsBridge
  extends PlatformBridge {
  open(url: string): Observable<BooleanObject> {
    return of(new BooleanObject(false));
  }
  loadFile(
    url: PathLike,
    option?: FileOption
  ): Observable<Value.ObjectAble<FileLoadEvent>> {
    return of(
      new ObjectTarget<FileLoadEvent>({
        total: 0,
        loaded: 0,
        data: new ArrayBuffer(0),
        finish: true,
        file: undefined,
      })
    );
  }
}
