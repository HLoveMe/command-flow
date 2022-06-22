<template>
  <div class="box">
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
    <input type="button" @click="reRun" :disabled="disabled" value="reRun" />
    <input
      type="button"
      @click="showCode"
      :disabled="disabled"
      value="showCode"
    />
    <input type="button" @click="clearLog" :disabled="disabled" value="clear" />
    <a class="name">Run command</a>
    <div class="run-container">
      <div class="code" ref="codeRef"></div>
      <RunGroup
        v-for="item in logInfo.keys()"
        :key="item"
        :id="item"
        :items="logInfo.get(item)"
      ></RunGroup>
      <RunResult
        v-if="logInfo.size >= 1"
        :desc="'1+10000 + 100 And 666 + 777 + 888 + 999' "
        :expect="'10101 | 3330'"
        :success="result.every(($1) => $1 === true)"
      ></RunResult>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  Context,
  RunCommandWork,
  InstructionOTO,
  unpackValue,
} from 'command-flow';
import { ref } from 'vue';
import RunGroup from './RunGroup.vue';
import RunResult from './RunResult.vue';
import { Observable } from 'rxjs';
interface WorkStatus {
  content?: any;
  work?: any | any[];
  desc?: any;
  value?: any;
  date?: Date;
}
type CallBack = (
  params: { [key: string]: string } | string,
  runOption: any
) => string;
const result = ref<boolean[]>([]);
const codeRef = ref<HTMLDivElement>({} as any);
const logInfo = ref<Map<string, Array<any>>>(new Map());
const disabled = ref<boolean>(false);
const getContext = () => {
  const context = new Context();
  context.addWorkLog({
    next: (log: WorkStatus) => {
      const {
        desc,
        value: { _value },
        work,
      } = log;
      const id = _value.id;
      const channeLValue = _value.value._value;
      const workName = work.map(($1: any) => $1.name).join('-');
      const currentRun = logInfo.value.get(id) || [];
      logInfo.value.set(id, currentRun);
      currentRun.push({
        id,
        workName,
        desc,
        value: channeLValue,
      });
    },
    error: () => {
      context.stopWorkChain();
    },
  });
  return context;
};
class RunResultShow extends InstructionOTO {
  name = 'RunResultShow';
  index: number = 0;
  value: any;
  constructor(index: number, v: any = 0) {
    super();
    this.index = index;
    this.value = v;
  }

  run(input: any): Observable<any> {
    return new Observable((subscriber) => {
      const value = unpackValue(input);
      result.value[this.index] = value == this.value;
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
const clearLog = () => {
  logInfo.value.clear();
};
async function codeDome() {
  const context = new Context();
  context.addWork(new RunCommandWork());
  await context.prepareWorks();
  context.dispatch('1 + 10000');
}

const reRun = () => {
  logInfo.value.clear();
  startBegin();
};
/***
 * '$I$ + 100'  + "1 + 10000" === '1 + 10000 + 100'
 */
const run1 = async () => {
  const context = getContext();
  context.addWork(new RunCommandWork('$I$ + 100'));
  context.addWork(new RunResultShow(0,10101));
  await context.prepareWorks();
  context.dispatch('1 + 10000');
};
/**
 * 自定义模板
 */
const run2 = async () => {
  const context = getContext();
  const aa = (((params: any) => {
    return `666 + ${params.a} + ${params.b} + 999`;
  }) as any) as CallBack;
  context.addWork(new RunCommandWork(aa));
  context.addWork(new RunResultShow(1,3330));
  await context.prepareWorks();
  context.dispatch({ a: 777, b: 888 });
};
const startBegin = async () => {
  await run1();
  await run2();
};
const showCode = () => {
  console.log(codeDome.toString());
  if (codeRef.value.innerText.length === 0) {
    codeRef.value.innerText = `${codeDome.toString()}`;
  } else {
    codeRef.value.innerText = '';
  }
};
</script>
<style scoped lang="less">
.box {
  background-image: linear-gradient(
    180deg,
    rgb(115 120 129 / 38%) 0%,
    rgb(159 163 170 / 53%) 100%
  );
  border-radius: 4px;
  input {
    padding: 5px;
    margin-right: 10px;
  }
  margin-bottom: 20px;
}
</style>
