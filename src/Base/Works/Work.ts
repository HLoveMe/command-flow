import { InOutputAbleOrNil, WorkUUID, Work, ContextImpl, BaseType } from "../Type";
import { Subject, from, Subscription, Observable, isObservable, of } from "rxjs";
import { takeLast } from "rxjs/operators";
import UUID from "uuid/v5";
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
  input: Observable<InOutputAbleOrNil>;
  output: Subject<InOutputAbleOrNil>;
  before?: Work;
  next?: Work;
  context?: ContextImpl;
  option?: any;
  constructor() {
    this.uuid = UUID();
  }
  addVariable(name: string, value: BaseType): void {
    this.context && this.context.addVariable(this, name, value)
  }

  prepare(input: InOutputAbleOrNil | Observable<InOutputAbleOrNil>, before: Work, next: Work) {
    this.before = before;
    this.next = next;
    this.output = new Subject();
    this.input = isObservable(input) ? from(input as Observable<InOutputAbleOrNil>) : of(input as InOutputAbleOrNil);
    this.handleInput();
  }
  handleInput() {
    const sub: Subscription = takeLast(1)(this.input).subscribe((value: InOutputAbleOrNil) => this.run(value));
    this.pools.push(sub);
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
    const sub: Subscription = this.input.subscribe((value: InOutputAbleOrNil) => this.run(value));
    this.pools.push(sub);
  }
}
/**
 * 没有输入输出的任务
 */
export class AloneInstruction extends SingleInstruction {
  name: string = "AloneInstruction";
  handleInput() {
    this.run(null);
  }
}