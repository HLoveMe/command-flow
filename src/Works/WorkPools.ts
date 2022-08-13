import {
  Instruction,
  InstructionMTM,
  InstructionOTM,
  InstructionOTO,
} from "./Instruction";
import { Base64DecodeWork, Base64EnCodeWork } from "./ExtendsWorks/Base64Work";
import LoadFileWork from "./ExtendsWorks/LoadFileWork";
import OpenURLWork from "./ExtendsWorks/OpenURLWork";
import { QRCodeWork } from "./ExtendsWorks/QRCodeWork";
import FetchWork from "./ExtendsWorks/FetchWork";
import RunCommandWork from "./ExtendsWorks/RunCommandWork";
import {
  IntervalWork,
  TimeoutWork,
  DelayIntervalWork,
} from "./ExtendsWorks/UtilWork";

type InstructionConstructor = {
  new (runConfig?: any, ...args: any[]): Instruction;
  NAME: string;
};
const WorkPool = new Map<string, InstructionConstructor>();

WorkPool.set(Instruction.NAME, Instruction);
// WorkPool.set(InstructionMTM.NAME,InstructionMTM)
// WorkPool.set(InstructionOTM.NAME,InstructionOTM)
// WorkPool.set(InstructionOTO.NAME,InstructionOTO)
WorkPool.set(Base64DecodeWork.NAME, Base64DecodeWork);
WorkPool.set(Base64EnCodeWork.NAME, Base64EnCodeWork);
WorkPool.set(LoadFileWork.NAME, LoadFileWork);
WorkPool.set(OpenURLWork.NAME, OpenURLWork);
WorkPool.set(QRCodeWork.NAME, QRCodeWork);
WorkPool.set(FetchWork.NAME, FetchWork);
WorkPool.set(RunCommandWork.NAME, RunCommandWork);
WorkPool.set(IntervalWork.NAME, IntervalWork);
WorkPool.set(TimeoutWork.NAME, TimeoutWork);
WorkPool.set(DelayIntervalWork.NAME, DelayIntervalWork);

function registerWork(work: InstructionConstructor) {
  WorkPool.set(work.NAME, work);
}

function getWorkByName(name: string): InstructionConstructor | null {
  return WorkPool.get(name);
}

export { InstructionConstructor, registerWork, getWorkByName };
