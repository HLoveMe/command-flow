import {
  InOutputAbleOrNil,
  ContextImpl,
  BaseType,
  WorkType,
  InOutputAble,
} from "../Type";
import {
  Subject,
  from,
  Subscription,
  Observable,
  isObservable,
  of,
  PartialObserver,
  AsyncSubject,
} from "rxjs";
import { takeLast, tap, map } from "rxjs/operators";
import { ExecError } from "../Error";
import { PlatformSelect } from "../Util/Equipment";
import { WorkRunOption } from "../Configs";
const UUID = require("uuid/v4");

/**
 * 一次输入--->一次输出
 * 一次输入--->多次输出 Instruction,MultipleInstruction
 * n次输入---->m次输出
 */
class Instruction extends Subject<InOutputAbleOrNil> implements WorkType.Work {
  static OPTION: WorkRunOption;
  name: string = "Instruction";
  static _id: number = 0;
  id: number = Instruction._id++;
  pools: Subscription[] = [];
  uuid: WorkType.WorkUUID;
  beforeWork?: WorkType.Work;
  nextWork?: WorkType.Work;
  context?: ContextImpl;
  option?: any;
  // 运行配置 config:OPTION todo
  config: { [key: string]: any } = { dev: true };
  constructor() {
    super();
    this.uuid = UUID();
  }
  rn_run?: (input: InOutputAble) => Observable<InOutputAble>;
  web_run?: (input: InOutputAble) => Observable<InOutputAble>;
  node_run?: (input: InOutputAble) => Observable<InOutputAble>;
  prepare(
    input: InOutputAble | Observable<InOutputAble>,
    before: WorkType.Work,
    next: WorkType.Work
  ): void {
    this.beforeWork = before;
    this.nextWork = next;
    this._connectChannel(input);
  }


  // 处理上一个的传入
  _connectChannel(input: InOutputAbleOrNil | Observable<InOutputAbleOrNil>) {
    const that = this;
    // 连接上一个的输出
    const observer: PartialObserver<any> = {
      next: (value) => that.next(value),
      error: null,
      complete: null,
    };
    var sub1: Subscription = (
      isObservable(input) ? input : of(input)
    ).subscribe(observer);
    this.pools.push(sub1);
    // // 处理数据
    const sub2: Subscription = that.subscribe({
      complete: () => {},
      error: (error) => that.error(error),
      next: (value: InOutputAbleOrNil) => that._run(value),
    });
    this.pools.push(sub2);
  }

  _run(value: InOutputAbleOrNil) {
    const that = this;
    const execFunc: WorkType.WorkFunction = PlatformSelect({
      reactNative: () =>
        ((that as WorkType.Work).rn_run ?? (that as WorkType.Work).run)(value),
      web: () =>
        ((that as WorkType.Work).web_run ?? (that as WorkType.Work).run)(value),
      node: () =>
        ((that as WorkType.Work).node_run ?? (that as WorkType.Work).run)(
          value
        ),
    });
    execFunc &&
      execFunc(value).subscribe({
        complete: () => {},
        next: (res) => this.nextWork.next(res),
      });
  }

  // 接受处理上一个work的值
  handleMessageNext(value:InOutputAbleOrNil){
    this.next(value);
    //不在接受值
    。。。。
  }

  run(input: InOutputAble): Observable<InOutputAble> {
    return new Observable((subscriber) => {
      subscriber.next(input);
      subscriber.next(input);
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }

  stop(): void {}
  clear(): void {
    this.pools && this.pools.forEach(($1) => $1.unsubscribe());
    this.pools.length = 0;
    this.unsubscribe();
  }
  error(err: Error): void {
    this.context && this.context.msgChannel.error(new ExecError(this, err));
  }
  addVariable(name: string, value: BaseType): void {
    this.context && this.context.addVariable(this, name, value);
  }
}

export class MultipleInstruction extends Instruction {
  // 声明可以进行配置的属性 todo
  static OPTION: WorkRunOption;
  name: string = "MultipleInstruction";
}

export class SingleInstruction extends Instruction {
  run(input: InOutputAble): Observable<InOutputAble> {
    return new Observable((subscriber) => {
      subscriber.next(input);
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
