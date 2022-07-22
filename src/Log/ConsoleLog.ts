import { LogBase } from './types';
import { ContextImpl, WorkType } from '../Types';
export class ConsoleLog implements LogBase {
  context: ContextImpl;
  constructor(context: ContextImpl) {
    this.context = context;
  }
  nextLog(status: WorkType.WorkStatus) {
    if(status.error){
      console.error(status)
    }else{
      console.info(status)
    }
  }
}
