import { Context } from '../Context';
import { ConsoleLog } from '../Log/index';
import { LogInitParams } from '../Log/types';
import { getWorkByName, InstructionConstructor } from '../Works/WorkPools';
import { RUNSetting } from './types';


async function runCommandFlow(config: RUNSetting) {
  const params = [config.log ?? ConsoleLog, []] as LogInitParams;
  const initValue = config.initSignal;
  const context = new Context(config.runOptions, params);
  config.works.forEach(($1) => {
    const [name, config] = $1;
    const constructor: InstructionConstructor = getWorkByName(name);
    const work = Reflect.construct(constructor,config)
    context.addWork(work);
  });
  await context.prepareWorks();
  context.dispatch(initValue)
}

export { runCommandFlow };
