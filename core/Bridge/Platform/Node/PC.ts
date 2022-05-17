import { from, fromEvent, Observable, of, Subscription } from "rxjs";
import { BooleanObject, ObjectTarget } from "../../../Object/Able/ObjectAble";
import {
  PathLike,
  FileLoadEvent,
  FileOption,
  PCNodejsBridgeAble,
  CommandStatus,
} from "../../ConfigTypes";
// import * as fs from "fs";
import { Value } from "../../../Types";
import { PlatformBridge } from "../BasePlatform";
// const nodeOpen = require("open");
// import * as process from "child_process";

/*** */
export class PCNodejsBridge
  extends PlatformBridge
  implements PCNodejsBridgeAble {
//   open(url: string): Observable<BooleanObject> {
//     return from(nodeOpen(url, { wait: true }) as Observable<BooleanObject>);
//   }

//   loadFile(
//     url: PathLike,
//     option?: FileOption
//   ): Observable<Value.ObjectAble<FileLoadEvent>> {
//     return new Observable((subscriber) => {
//       const stat = fs.lstatSync(url as unknown as fs.PathLike);
//       const subs: Subscription[] = [];
//       if (!fs.existsSync(url as unknown as fs.PathLike)) {
//         subscriber.error(new Error(`${url.toString()} is not exists`));
//       } else if (stat.isDirectory()) {
//         subscriber.error(new Error(`${url.toString()} is not file`));
//       } else {
//         const rs = fs.createReadStream(url as unknown as fs.PathLike);
//         let data = Buffer.of();
//         const sub1 = fromEvent(rs, "data").subscribe({
//           next: (chunk: Buffer) => {
//             data = Buffer.concat([data, chunk]);
//             subscriber.next(
//               new ObjectTarget<FileLoadEvent>({
//                 loaded: data.byteLength,
//                 total: stat.size,
//                 data:data.buffer,
//               })
//             );
//           },
//         });
//         const sub2 = fromEvent(rs, "end").subscribe({
//           next: () => {
//             subscriber.complete();
//           },
//         });
//         subs.push(sub1);
//         subs.push(sub2);
//       }
//       return {
//         unsubscribe: () => {
//           subscriber.unsubscribe();
//           subs.forEach(($1) => $1.unsubscribe());
//         },
//       };
//     });
//   }
//   /**
//  * = "#javascript#console.log('hello world')" :default
//  *  = "#shell#echo hello world"
//  * @param command 
//  * @param option 
//  * @returns 
//  */
//   runCommand(command: string, option?: any): Observable<CommandStatus> {
//     return new Observable((subscriber) => {
//       const runJs = () => {
//         let result = null;
//         let status = false;
//         let error = null;
//         try {
//           result = eval(command?.toString())
//           status = true;
//         } catch (err) {
//           result = null;
//           status = false;
//           error = err;
//         }
//         return {
//           status, result, command, error
//         } as CommandStatus;
//       }
//       if (command.startsWith("#shell#")) {
//         process.exec(command, function (error, stdout, stderr) {
//           subscriber.next({
//             result: stdout,
//             command,
//             status: error != null,
//             error,
//           } as CommandStatus);
//           subscriber.complete();
//         });
//       } else if (command.startsWith("#javascript#")) {
//         subscriber.next(runJs());
//         subscriber.complete();
//       } else {
//         subscriber.next(runJs());
//         subscriber.complete();
//       }
//       return {
//         unsubscribe: () => subscriber.unsubscribe(),
//       };
//     });
//   }
}
