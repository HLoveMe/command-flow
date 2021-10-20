import { Observable, of } from "rxjs";
import { MobileRnConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class MobileRnConfig
  extends PCPlatformConfig
  implements MobileRnConfigAble
{
  open(url: string): Observable<boolean> {
    return of(false);
  }
}
