import { Observable, of } from "rxjs";
import { PCWebConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class PCWebConfig extends PCPlatformConfig implements PCWebConfigAble {
  open(url: string): Observable<boolean> {
    const result = window.open(url, "__blank");
    return of(result !== null);
  }
}