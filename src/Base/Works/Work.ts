import { InOutputAbleOrNil, ContextImpl, BaseType, WorkType } from "../Type";
import {
  Subject,
  from,
  Subscription,
  Observable,
  isObservable,
  of,
  BehaviorSubject,
  PartialObserver,
} from "rxjs";
import { takeLast, tap, map } from "rxjs/operators";
import { ExecError } from "../Error";
import { PlatformSelect } from "../Util/Equipment";
import { WorkRunOption } from "../Configs";
const UUID = require("uuid/v4");
/**
 * 1:输入形式
 * 2:多次执行
 * 3:
 */

export class SingleInstruction implements WorkType.Work {
  // 声明可以进行配置的属性 todo
  static OPTION: WorkRunOption;
  name: string = "SingleInstruction";
  static _id: number = 0;
  id: number = SingleInstruction._id++;
  pools: Subscription[] = [];
  uuid: WorkType.WorkUUID;
  input: BehaviorSubject<InOutputAbleOrNil>;
  output: Subject<InOutputAbleOrNil>;
  before?: WorkType.Work;
  next?: WorkType.Work;
  context?: ContextImpl;
  option?: any;
  // 运行配置 config:OPTION todo
  config: { [key: string]: string } = {};
  constructor() {
    this.uuid = UUID();
  }
  error(err: Error): void {
    this.context && this.context.msgChannel.error(new ExecError(this, err));
  }
  addVariable(name: string, value: BaseType): void {
    this.context && this.context.addVariable(this, name, value);
  }
  // 运行
  prepare(
    input: InOutputAbleOrNil | Observable<InOutputAbleOrNil>,
    before: WorkType.Work,
    next: WorkType.Work
  ) {
    const that = this;
    this.before = before;
    this.next = next;
    this.output = new Subject<InOutputAbleOrNil>();
    this.input = new BehaviorSubject<InOutputAbleOrNil>(undefined);
    this.handleInput();
    var sub: Subscription;
    if (isObservable(input)) {
      sub = input.subscribe(
        (value) => that.input.next(value),
        null,
        () => that.input.complete()
      );
    } else {
      sub = of(input).subscribe((value) => that.input.next(value));
    }
    this.pools.push(sub);
  }
  _run(value: InOutputAbleOrNil) {
    const that = this;
    PlatformSelect({
      reactNative: () =>
        ((that as WorkType.Work).rn_run ?? (that as WorkType.Work).run)(value),
      web: () =>
        ((that as WorkType.Work).web_run ?? (that as WorkType.Work).run)(value),
      node: () =>
        ((that as WorkType.Work).node_run ?? (that as WorkType.Work).run)(
          value
        ),
    })();
  }
  handleInput() {
    const that = this;
    const sub: Subscription = this.input
      .pipe(
        // tap((value) => this.context?.msgChannel.next(value)),
        takeLast(1)
      )
      .subscribe({
        error: (error) => that.error(error),
        next: (value: InOutputAbleOrNil) => that._run(value),
      });
    this.pools.push(sub);
  }

  //
  _getOutputObserver(
    next?: Function,
    error?: Function,
    complete?: Function
  ): PartialObserver<InOutputAbleOrNil> {
    const that = this;
    return {
      next:
        (next as any) ??
        ((value) => {
          that.output.next(value);
        }),
      complete:
        (complete as any) ??
        (() => {
          that.output.complete();
        }),
      error:
        error ??
        ((error) => {
          that.context?.msgChannel.error(error);
          that.output.error(error);
        }),
    } as PartialObserver<InOutputAbleOrNil>;
  }

  // 接受上一个的值
  run(input: InOutputAbleOrNil) {
    this.output.next(input);
    this.output.complete();
  }
  stop(): void {
    // throw new Error("Method not implemented.");
  }
  clear(): void {
    this.pools && this.pools.forEach(($1) => $1.unsubscribe());
    this.pools.length = 0;
    // throw new Error("Method not implemented.");
  }
}

export class MultipleInstruction extends SingleInstruction {
  name: string = "MultipleInstruction";

  handleInput() {
    const that = this;
    const sub: Subscription = this.input.subscribe(
      (value: InOutputAbleOrNil) => that._run(value),
      (error) => that.error(error)
    );
    this.pools.push(sub);
  }
}
/**
 * 没有输出的任务
 */
export class AloneInstruction extends SingleInstruction {
  name: string = "AloneInstruction";
  handleInput() {
    // this.output.complete();
    this.run(null);
  }
  run(input: InOutputAbleOrNil) {
    this.output.complete();
  }
}
