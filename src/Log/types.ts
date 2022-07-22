import { ContextImpl, WorkType } from '../Types';

export type LogInitParams = [{ new (context: ContextImpl): LogBase }, any[]];

export interface LogBase {
  context: ContextImpl;
  nextLog(status: WorkType.WorkStatus): void;
}
