import { Work } from "../Type";


export class ExecError extends Error {
  date: Date = new Date();
  work: Work;
  constructor(work: Work, error: Error) {
    super()
    this.message = error.message;
    this.name = error.name;
    this.stack = error.stack;
    this.work = work;
  }
}