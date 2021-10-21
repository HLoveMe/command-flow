import { Observable, of } from "rxjs";
import { BooleanObj, DataObj } from "../../../Object/BaseObject";
import { CommandLike, FileOption, MobileNodejsConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class MobileNodejsConfig
  extends PCPlatformConfig
  implements MobileNodejsConfigAble {
  open(url: string): Observable<BooleanObj> {
    return of(new BooleanObj(false));
  }
  loadFile(url: CommandLike, option?: FileOption): Observable<DataObj> {
    return of(new DataObj(Buffer.from([])))
  }
}
