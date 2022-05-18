<template>
  <div class="box">
    <div class="run-container">
      <div class="name">Base64 decode encode</div>
      <div class="code" ref="codeRef"></div>
      <div class="log" ref="logRef"></div>
      <div class="result" ref="resultRef"></div>
    </div>
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
  </div>
</template>
<script lang="ts" setup>
import {
  Context,
  StringObject,
  DataObject,
  ControlFlow,
  Base64DecodeWork,
  Base64EnCodeWork,
  LoadFileWork,
  OpenURLWork,
  QRCodeWork,
  NumberObject,
  ArrayObject,
  SetObject,
  ObjectTarget,
} from "../../coreDist/index";
import { ref } from "vue";
import { async } from "rxjs";
interface WorkStatus {
  content?: any;
  work?: any | any[];
  desc?: any;
  value?: any;
  date?: Date;
}
const logInfo = ref<Map<string, Array<string>>>(new Map());
const codeRef = ref<HTMLDivElement>();
const resultRef = ref<HTMLDivElement>();
const logRef = ref<HTMLDivElement>();
const disabled = ref<boolean>(false);
const context = new Context();
context.addWorkLog({
  next: (log: WorkStatus) => {
    const {
      desc,
      value: { _value },
      date,
      work,
    } = log;
    const id = _value.id;
    const channeLValue = _value.value._value;
    const workName = work.map(($1) => $1.name).join("-");
    console.log("loglogloglog", workName, desc, id, channeLValue);
    // const div = document.createElement("div");
    // div.innerText = `${logCount.value}:${log}`;
    // logRef.value.appendChild(div);
  },
  error: () => {
    context.stopWorkChain();
  },
});
const startBegin = async () => {
  // const context = new Context();
  context.addWork(new Base64EnCodeWork());
  context.addWork(new Base64DecodeWork());
  await context.prepareWorks();
  context.run("www.baidu.com");
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
  }
  margin-bottom: 20px;
  .run-container {
    .name {
      margin-bottom: 20px;
    }
  }
}
</style>