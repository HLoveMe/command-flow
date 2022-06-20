<template>
  <div class="box">
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
    <input type="button" @click="clearLog" :disabled="disabled" value="clear" />
    <a class="name">Base64 decode encode test</a>
    <div class="run-container">
      <div class="run-result" v-for="(item,index)  in logInfo" :key="index" :class="{
        'run-result-success':item.success,
        'run-result-error':!item.success
        }">
        {{item.desc}}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  ObjectTarget,
  ArrayObject,
  MapObject,
  SetObject,
  NumberObject,
  StringObject,
  BooleanObject,
  DateObject,
  DataObject,
} from "command-flow";
import { ref } from "vue";
const logInfo = ref<Array<{ desc: string; success: boolean }>>([]);
const disabled = ref<boolean>(false);

const clearLog = () => {
  logInfo.value.length = 0;
};
const utils = {
  
};
const startBegin = async () => {
  Object.keys(utils).forEach((key) => {
    const item = (utils as any)[key];
    const result = item.run();
    logInfo.value.push({
      desc: `[ ${item.desc} ]: 结果：${result}，期待：${item.expect} `,
      success: result === item.expect,
    });
  });
};
</script>
<style scoped lang="less">
.box {
  background-image: linear-gradient(
    180deg,
    rgb(115 120 129 / 38%) 0%,
    rgba(159, 163, 170, 0.575) 100%
  );
  border-radius: 4px;
  input {
    padding: 5px;
    margin-right: 10px;
  }
  margin-bottom: 20px;
  .run-container {
    .run-result {
      margin-left: 20px;
    }
    .run-result-success{
      color:green;
    }
    .run-result-error{
      color:red;
    }
  }
}
</style>