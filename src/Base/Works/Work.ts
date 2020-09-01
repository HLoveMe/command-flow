import { InOutputAbleOrNil, WorkUUID, Work, ContextImpl, BaseType } from "../Type";
import { Subject, from, Subscription, Observable, isObservable, of, BehaviorSubject, PartialObserver } from "rxjs";
import { takeLast, tap, map } from "rxjs/operators";
import { ExecError } from "../Error";
const UUID = require("uuid/v4")
/**
 * 1:输入形式
 * 2:多次执行
 * 3:
 */

export class SingleInstruction implements Work {
  name: string = "SingleInstruction";
  static _id: number = 0;
  id: number = SingleInstruction._id++;
  pools: Subscription[] = [];
  uuid: WorkUUID;
  input: BehaviorSubject<InOutputAbleOrNil>;
  output: Subject<InOutputAbleOrNil>;
  before?: Work;
  next?: Work;
  context?: ContextImpl;
  option?: any;
  constructor() {
    this.uuid = UUID();
  }
  error(err: Error): void {
    this.context && this.context.msgChannel.error(new ExecError(this, err));
  }
  addVariable(name: string, value: BaseType): void {
    this.context && this.context.addVariable(this, name, value)
  }

  prepare(input: InOutputAbleOrNil | Observable<InOutputAbleOrNil>, before: Work, next: Work) {
    const that = this;
    this.before = before;
    this.next = next;
    this.output = new Subject<InOutputAbleOrNil>();
    this.input = new BehaviorSubject<InOutputAbleOrNil>(undefined);
    this.handleInput();
    var sub: Subscription;
    if (isObservable(input)) {
      sub = input.subscribe((value) => that.input.next(value), null, () => that.input.complete())
    } else {
      sub = of(input).subscribe((value) => that.input.next(value))
    }
    this.pools.push(sub);
  }
  handleInput() {
    const that = this;
    const sub: Subscription = this.input.pipe(
      // tap((value) => this.context?.msgChannel.next(value)),
      takeLast(1)
    ).subscribe({
      error: (error) => that.error(error),
      next: (value: InOutputAbleOrNil) => that.run(value)
    });
    this.pools.push(sub);
  }
  getOutoutObserver(): PartialObserver<InOutputAbleOrNil> {
    const that = this;
    return {
      next: (value) => { console.log(that.name, "next"); that.output.next(value) },
      complete: () => { console.log(that.name, "complete"); that.output.complete() },
      error: (error) => { console.log(that.name, "error", error); that.context?.msgChannel.error(error); that.output.error(error) }
    } as PartialObserver<InOutputAbleOrNil>
  }
  run(input: InOutputAbleOrNil) {
    this.output.next(input);
    this.output.complete();
  }
  stop(): void {
    // throw new Error("Method not implemented.");
  }
  clear(): void {
    this.pools && this.pools.forEach($1 => $1.unsubscribe());
    this.pools.length = 0;
    // throw new Error("Method not implemented.");
  }
}


export class MultipleInstruction extends SingleInstruction {
  name: string = "MultipleInstruction";

  handleInput() {
    const that = this;
    const sub: Subscription = this.input.subscribe((value: InOutputAbleOrNil) => that.run(value), (error) => that.error(error));
    this.pools.push(sub);
  }
}
/**
 * 没有输入输出的任务
 */
export class AloneInstruction extends SingleInstruction {
  name: string = "AloneInstruction";
  handleInput() {
    // this.output.complete();
    this.run(null);
  }
  run(input:InOutputAbleOrNil){
    
    this.output.complete();
  }
}