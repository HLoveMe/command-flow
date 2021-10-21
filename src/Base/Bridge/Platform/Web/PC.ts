import { Observable, of, Subscriber } from "rxjs";
import { BooleanObj, DataObj } from "../../../Object/BaseObject";
import { CommandLike, FileOption, FileType, PCWebConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class PCWebConfig extends PCPlatformConfig implements PCWebConfigAble {
  open(url: string): Observable<BooleanObj> {
    const result = window.open(url, "__blank");
    return of(new BooleanObj(result !== null));
  }
  loadFile(url: CommandLike, option?: FileOption): Observable<DataObj> {
    return new Observable(subscriber => {
      const input = document.createElement('input');
      input.type = 'file';
      input.id = '_temp_input_select';
      input.accept = option?.type || '*'
      input.style.display = 'none';
      document.body.append(input)
      input.addEventListener('change', _ => {
        const reader = new FileReader();
        reader.onload = () => {
          const data = Buffer.from(reader.result as ArrayBuffer)
          subscriber.next(new DataObj(data));
          subscriber.complete()
        };
        reader.readAsArrayBuffer(input.files[0]);
      })
      input.click()
      return {
        unsubscribe: () => subscriber.unsubscribe()
      }
    })
  }
}