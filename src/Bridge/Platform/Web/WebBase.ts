import { Observable, of } from 'rxjs';
import { v4 as UUID } from 'uuid';
import { BooleanObject, ObjectTarget } from '../../../Object';
import { Value } from '../../../Object';
import { PathLike, FileLoadEvent, FileOption } from '../../ConfigTypes';
import { PlatformBridge } from '../BasePlatform';

export class WebBridge extends PlatformBridge {
  open(url: string): Observable<BooleanObject> {
    const result = window.open(url, '__blank');
    return of(new BooleanObject(result !== null));
  }
  /**
   * 打开文件路径
   * @param url
   * @param option
   * @returns
   */
  loadFile(
    url: PathLike,
    option?: FileOption
  ): Observable<Value.ObjectAble<FileLoadEvent>> {
    return new Observable((subscriber) => {
      const input = document.createElement('input');
      //input.value = url.toString();
      input.type = 'file';
      input.id = '_temp_input_select' + UUID();
      input.accept = option?.type || '*';
      input.style.display = 'none';
      document.body.append(input);
      input.addEventListener('change', (_) => {
        const reader = new FileReader();
        if (!!input.files === false) return;
        const file = (input.files as FileList)[0];
        reader.onprogress = (info: ProgressEvent) => {
          const { total, loaded } = info;
          const data = reader.result as ArrayBuffer;
          subscriber.next(
            new ObjectTarget<FileLoadEvent>({
              total,
              loaded,
              data: data,
              finish: false,
              file,
            })
          );
        };
        reader.onload = (info: ProgressEvent) => {
          const data = reader.result as ArrayBuffer;
          const { total, loaded } = info;
          subscriber.next(
            new ObjectTarget<FileLoadEvent>({
              total,
              loaded,
              data,
              finish: true,
              file,
            })
          );
          document.body.removeChild(input)
          subscriber.complete();
        };
        reader.onerror = (ev: ProgressEvent<FileReader>) => {
          subscriber.error(ev);
          document.body.removeChild(input)
        };
        reader.readAsArrayBuffer(file);
      });
      input.click();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
