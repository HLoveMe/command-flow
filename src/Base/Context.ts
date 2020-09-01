import { } from "./InOutputValue";
import { WorkConstant, WorkUUID, BaseType, InOutputAbleOrNil } from "./Type";
import { Work, ContextImpl } from "./Type";
import { Subject, Subscription } from "rxjs";

export class Context implements ContextImpl {
  runConstant: Map<WorkUUID, WorkConstant> = new Map();
  works: Work[] = [];
  msgChannel: Subject<InOutputAbleOrNil> = new Subject()
  constructor() {
    const sub = this.msgChannel.subscribe(this.workMessage,this.workError)
    this.pools.push(sub);
  }
  pools: Subscription[] = [];
  addVariable(from: Work, name: string, value: BaseType): void {
    const w_map = this.runConstant.get(from.uuid);
    !w_map && (this.runConstant.set(from.uuid, new Map()));
    this.runConstant.get(from.uuid).set(name, value);
  }
  workMessage(input: InOutputAbleOrNil) {
    console.log("msgChannel",input)
   }
  workError(error){
    console.log("msgChannelError",error)
  }
  addWork(work: Work) {
    work.context = this;
    this.works.push(work);
  }
  addWorks(...works: Work[]): void {
    works.forEach(this.addWork);
  }
  prepareWorks() {
    this.works.forEach(($1: Work, index: number, souce: Work[]) => {
      const before: Work = souce[index - 1];
      const after: Work = souce[index + 1];
      const input = index == 0 ? null : before.output
      $1.prepare(input, before, after);
    })
  }
  run() {
    this.prepareWorks();

  }

  testRun(input: InOutputAbleOrNil) {
    this.prepareWorks();
    this.works[0].input.next(input)
    this.works[0].input.complete();
  }

  clear(): void {
    this.pools.forEach($1 => $1.unsubscribe())
  }
}

