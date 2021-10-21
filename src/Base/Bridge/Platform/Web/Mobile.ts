import { Observable, of } from "rxjs";
import { BooleanObj, DataObj } from "../../../Object/BaseObject";
import { CommandLike, FileOption, FileType, MobileWebConfigAble, PCWebConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class MobileWebConfig extends PCPlatformConfig implements MobileWebConfigAble {
  open(url: string): Observable<BooleanObj> {
    return of(new BooleanObj(false));
  }
  loadFile(url: CommandLike, option?: FileOption): Observable<DataObj> {
    return of(new DataObj(Buffer.from([])))
  }
}