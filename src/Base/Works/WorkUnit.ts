import { Subscription } from "rxjs";
import { ContextImpl, WorkType } from "../Types";
import { v4 as UUID } from "uuid";

export class WorkUnit implements WorkType.WorkUnitImpl {
  context: ContextImpl;
  work: WorkType.Work;
  uuid: string;
  sub: Subscription;
  constructor(
    context: ContextImpl,
    work: WorkType.Work,
    sub: Subscription,
    uuid?: string
  ) {
    this.context = context;
    this.work = work;
    this.sub = sub;
    this.uuid = uuid ?? UUID();
  }
}
