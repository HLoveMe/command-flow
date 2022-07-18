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
    <input type="button" @click="stopWork" :disabled="disabled" value="stop" />
    <a class="name">Timeout Interval Timer</a>
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
        :desc="'第一个1s后运行一次，第二个5.5后停止，第三个运行3次'"
        :expect="'==='"
        :success="result.every(($1) => $1 === true)"
      ></RunResult>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  Context,
  TimeoutWork,
  IntervalWork,
  DelayIntervalWork,
  InstructionOTO,
  unpackValue,
} from '@/command';
import { ref } from 'vue';
import RunGroup from './RunGroup.vue';
import RunResult from './RunResult.vue';
import { from, Observable } from 'rxjs';
interface WorkStatus {
  content?: any;
  work?: any | any[];
  desc?: any;
  value?: any;
  date?: Date;
  error: Error;
}
const result = ref<boolean[]>([false]);
const codeRef = ref<HTMLDivElement>({} as any);
const logInfo = ref<Map<string, Array<any>>>(new Map());
const disabled = ref<boolean>(false);
const getContext = () => {
  const context = new Context();
  context.addWorkLog({
    next: (log: any | WorkStatus) => {
      const {
        desc,
        value: { _value },
        work,
        error,
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
        error,
      });
    },
    error: () => {
      context.stopWorkChain();
    },
  });
  return context;
};
class ShowTimerWork extends InstructionOTO {
  name = 'ShowTimerWork';
  index: number = 0; // 索引

  count: number = 0; // 期待值
  runCount: number = 0; // 运行值
  constructor(num: number, index: number) {
    super();
    this.count = num;
    this.index = index;
  }
  prepare(before: any, next: any) {
    super.prepare(before, next);
    this.config = { development: false };
    return Promise.resolve();
  }
  run(input: any): Observable<any> {
    const that = this;
    return new Observable((subscriber) => {
      const value = unpackValue<number>(input);
      result.value[that.index] = value + 1 === that.count;
      subscriber.complete();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
const contexts: any[] = [];
const clearLog = () => {
  logInfo.value.clear();
};
async function codeDome() {
  const context = new Context();
  context.addWork(new TimeoutWork());
  await context.prepareWorks();
  context.dispatch();
}
const reRun = () => {
  stopWork();
  logInfo.value.clear();
  startBegin();
};
const startBegin = async () => {
  // 1s后运行一次
  async function timeout() {
    const context = getContext();
    context.addWork(new TimeoutWork(undefined));
    context.addWork(new ShowTimerWork(1, 0));
    await context.prepareWorks();
    context.dispatch();
    contexts.push(context);
  }
  async function interval() {
    const context = getContext();
    //5.5s后停止运行
    context.addWork(
      new IntervalWork(
        undefined,
        1000,
        from(
          new Promise((res) => {
            setTimeout(() => res(1), 5500);
          })
        )
      )
    );
    context.addWork(new ShowTimerWork(5, 1));
    await context.prepareWorks();
    context.dispatch();
    contexts.push(context);
  }
  async function timer() {
    const context = getContext();
    context.addWork(new DelayIntervalWork(undefined, undefined, 3));
    context.addWork(new ShowTimerWork(3, 2));
    await context.prepareWorks();
    context.dispatch();
    contexts.push(context);
  }
  timeout();
  interval();
  timer();
};
const stopWork = () => {
  contexts.forEach(($1) => {
    $1.stopWorkChain();
  });
  contexts.length = 0;
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
