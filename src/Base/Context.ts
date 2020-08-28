import { } from "./InOutputValue";
import { WorkConstant, WorkUUID, BaseType } from "./Type";
import { Work, ContextImpl } from "./Type";

export class Context implements ContextImpl {
  runConstant: Map<WorkUUID, WorkConstant> = new Map();
  works: Work[] = [];
  constructor() {}
  addVariable(from: Work, name: string, value: BaseType): void {
    const w_map = this.runConstant.get(from.uuid);
    !w_map && (this.runConstant.set(from.uuid, new Map()));
    this.runConstant.get(from.uuid).set(name,value);
  }
  addWork(work: Work) {
    work.context = this;
    this.works.push(work);
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
}

