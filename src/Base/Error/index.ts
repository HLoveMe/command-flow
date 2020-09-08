import { WorkType } from "../Type";


export class ExecError extends Error {
  date: Date = new Date();
  work: WorkType.Work;
  constructor(work: WorkType.Work, error: Error) {
    super()
    this.message = error.message;
    this.name = error.name;
    this.stack = error.stack;
    this.work = work;
  }
}