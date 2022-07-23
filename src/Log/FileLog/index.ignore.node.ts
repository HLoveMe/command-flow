import { PathLike } from 'fs';
import { ContextImpl, WorkType } from '../../Types';
import { LogBase } from '../types';
export class FileLog implements LogBase {
  context: ContextImpl;
  constructor(context: ContextImpl,file:PathLike) {
    this.context = context;
  }
  nextLog(status: WorkType.WorkStatus) {
   
  }
}
