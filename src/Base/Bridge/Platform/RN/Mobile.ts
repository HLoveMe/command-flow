import { Observable, of } from "rxjs";
import { BooleanObject } from "../../../Object/BaseObject";
import { MobileRnConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class MobileRnConfig
  extends PCPlatformConfig
  implements MobileRnConfigAble
{
  open(url: string): Observable<BooleanObject> {
    return of(new BooleanObject(false));
  }
}
