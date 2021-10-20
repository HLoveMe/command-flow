import { Observable, of } from "rxjs";
import { BooleanObj } from "../../../Object/BaseObject";
import { PCWebConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class PCWebConfig extends PCPlatformConfig implements PCWebConfigAble {
  open(url: string): Observable<BooleanObj> {
    const result = window.open(url, "__blank");
    return of(new BooleanObj(result !== null));
  }
}