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
        :desc="'--'"
        :expect="'=='"
        :success="result"
      ></RunResult>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  Context,
  Base64DecodeWork,
  Base64EnCodeWork,
  TimeoutWork,
  IntervalWork,
  DelayIntervalWork,
} from "../../coreDist/index";
import { ref } from "vue";
import RunGroup from "./RunGroup.vue";
import RunResult from "./RunResult.vue";
interface WorkStatus {
  content?: any;
  work?: any | any[];
  desc?: any;
  value?: any;
  date?: Date;
}
const result = ref<boolean>(false);
const codeRef = ref<HTMLDivElement>();
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
      const workName = work.map(($1) => $1.name).join("-");
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
const contexts = [];
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
  async function timeout() {
    const context = getContext();
    context.addWork(new TimeoutWork());
    await context.prepareWorks();
    context.dispatch();
    contexts.push(context);
  }
  async function interval() {
    const context = getContext();
    context.addWork(new IntervalWork());
    await context.prepareWorks();
    context.dispatch();
    contexts.push(context);
  }
  async function timer() {
    const context = getContext();
    context.addWork(new DelayIntervalWork());
    await context.prepareWorks();
    context.dispatch();
    contexts.push(context);
  }
  // timeout();
  // interval();
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
    codeRef.value.innerText = "";
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