import { ContextImpl, WorkType } from '../../Types';
import { LogBase } from '../types';
export class FileLog implements LogBase {
  context: ContextImpl;
  constructor(context: ContextImpl) {
    this.context = context;
  }
  nextLog(status: WorkType.WorkStatus) {
   
  }
}