import { Observable, of } from "rxjs";
import { MobileWebConfigAble, PCWebConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class MobileWebConfig extends PCPlatformConfig implements MobileWebConfigAble {
  open(url: string): Observable<boolean> {
    return of(false);
  }
}