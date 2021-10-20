import { Observable, of } from "rxjs";
import { BooleanObj } from "../../../Object/BaseObject";
import { MobileWebConfigAble, PCWebConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class MobileWebConfig extends PCPlatformConfig implements MobileWebConfigAble {
  open(url: string): Observable<BooleanObj> {
    return of(new BooleanObj(false));
  }
}