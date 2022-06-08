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
        :desc="'1+10000 + 100'"
        :expect="'10101'"
        :success="result"
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
} from "../../core/index";
import { ref } from "vue";
import RunGroup from "./RunGroup.vue";
import RunResult from "./RunResult.vue";
import { Observable } from "rxjs";
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
class RunResultShow extends InstructionOTO {
  name = "RunResultShow";

  run(input: any): Observable<any> {
    return new Observable((subscriber) => {
      const value = unpackValue(input);
      result.value = value == "10101";
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
  context.dispatch("1 + 10000");
}
const reRun = () => {
  logInfo.value.clear();
  startBegin();
};
const startBegin = async () => {
  const context = getContext();
  context.addWork(new RunCommandWork("$I$ + 100"));
  context.addWork(new RunResultShow());
  await context.prepareWorks();
  context.dispatch("1 + 10000");
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