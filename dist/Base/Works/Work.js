// import { InOutputAbleOrNil, ContextImpl, BaseType, WorkType } from "../Type";
// import {
//   Subject,
//   from,
//   Subscription,
//   Observable,
//   isObservable,
//   of,
//   BehaviorSubject,
//   PartialObserver,
// } from "rxjs";
// import { takeLast, tap, map } from "rxjs/operators";
// import { ExecError } from "../Error";
// import { PlatformSelect } from "../Util/Equipment";
// import { WorkRunOption } from "../Configs";
// const UUID = require("uuid/v4");
// /**
//  * 1:输入形式
//  * 2:多次执行
//  * 3:
//  */
// export class SingleInstruction implements WorkType.Work {
//   // 声明可以进行配置的属性 todo
//   static OPTION: WorkRunOption;
//   name: string = "SingleInstruction";
//   static _id: number = 0;
//   id: number = SingleInstruction._id++;
//   pools: Subscription[] = [];
//   uuid: WorkType.WorkUUID;
//   input: Subject<InOutputAbleOrNil>;
//   output: Subject<InOutputAbleOrNil>;
//   before?: WorkType.Work;
//   next?: WorkType.Work;
//   context?: ContextImpl;
//   option?: any;
//   // 运行配置 config:OPTION todo
//   config: { [key: string]: any } = { dev: true };
//   constructor() {
//     this.uuid = UUID();
//   }
//   error(err: Error): void {
//     this.context && this.context.msgChannel.error(new ExecError(this, err));
//   }
//   addVariable(name: string, value: BaseType): void {
//     this.context && this.context.addVariable(this, name, value);
//   }
//   // 运行
//   /**
//    * @param input 为上一个Work 的输出
//    * @param before 上一个Worke
//    * @param next 下一个
//    */
//   prepare(
//     input: InOutputAbleOrNil | Observable<InOutputAbleOrNil>,
//     before: WorkType.Work,
//     next: WorkType.Work
//   ) {
//     this.before = before;
//     this.next = next;
//     this.output = new Subject<InOutputAbleOrNil>();
//     this.input = new Subject<InOutputAbleOrNil>();
//     this.handleInput(input);
//   }
//   _run(value: InOutputAbleOrNil) {
//     const that = this;
//     const execFunc = PlatformSelect({
//       reactNative: () =>
//         ((that as WorkType.Work).rn_run ?? (that as WorkType.Work).run)(value),
//       web: () =>
//         ((that as WorkType.Work).web_run ?? (that as WorkType.Work).run)(value),
//       node: () =>
//         ((that as WorkType.Work).node_run ?? (that as WorkType.Work).run)(
//           value
//         ),
//     });
//     execFunc(value).then((res: InOutputAbleOrNil) => {
//       this.output.next(res);
//     });
//   }
//   // 处理上一个的传入
//   handleInput(input: InOutputAbleOrNil | Observable<InOutputAbleOrNil>) {
//     const that = this;
//     // 连接上一个的输出
//     const observer: PartialObserver<any> = {
//       next: (value) => that.input.next(value),
//       error: null,
//       complete: null,
//     };
//     var sub1: Subscription = (
//       isObservable(input) ? input : of(input)
//     ).subscribe(observer);
//     this.pools.push(sub1);
//     // 处理数据
//     const sub2: Subscription = this.input.pipe(takeLast(1)).subscribe({
//       complete: () => {
//         // 这里要处理 如果是异步run 怎么处理complete和then的回调时机
//         // this.getAncestorWorks().forEach(($1) => $1.stop());
//       },
//       error: (error) => that.error(error),
//       next: (value: InOutputAbleOrNil) => that._run(value),
//     });
//     this.pools.push(sub2);
//   }
//   //
//   getOutputObserver(
//     next?: Function,
//     error?: Function,
//     complete?: Function
//   ): PartialObserver<InOutputAbleOrNil> {
//     const that = this;
//     return {
//       next: next ?? ((value) => that.output.next(value)),
//       complete: complete ?? (() => that.output.complete()),
//       error:
//         error ??
//         ((error) => {
//           that.context?.msgChannel.error(error);
//           that.output.error(error);
//         }),
//     } as PartialObserver<InOutputAbleOrNil>;
//   }
//   // 获取之前的所有Work
//   getAncestorWorks(): WorkType.Work[] {
//     return this.before
//       ? [this.before, ...(this.before as SingleInstruction).getAncestorWorks()]
//       : [];
//   }
//   // 处理
//   async run(input: InOutputAbleOrNil): Promise<InOutputAbleOrNil> {
//     return null;
//   }
//   stop(): void {
//     this.input.unsubscribe();
//     this.output.unsubscribe();
//   }
//   clear(): void {
//     this.pools && this.pools.forEach(($1) => $1.unsubscribe());
//     this.pools.length = 0;
//     // throw new Error("Method not implemented.");
//   }
// }
// export class MultipleInstruction extends SingleInstruction {
//   name: string = "MultipleInstruction";
//   handleInput() {
//     const that = this;
//     const sub: Subscription = this.input.subscribe(
//       (value: InOutputAbleOrNil) => that._run(value),
//       (error) => that.error(error)
//     );
//     this.pools.push(sub);
//   }
// }
// /**
//  * 没有输出的任务
//  */
// export class AloneInstruction extends SingleInstruction {
//   name: string = "AloneInstruction";
//   handleInput() {
//     // this.output.complete();
//     this.run(null);
//   }
//   async run(input: InOutputAbleOrNil): Promise<InOutputAbleOrNil> {
//     return null;
//   }
// }
//# sourceMappingURL=Work.js.map