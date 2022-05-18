<template>
  <div class="box">
    <div class="run-container">
      <div class="name">Base64 decode encode</div>
      <div class="code" ref="codeRef"></div>
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
} from "../../core/index";
import { ref } from "vue";
const value = ref<string>();
const codeRef = ref<HTMLDivElement>();
const resultRef = ref<HTMLDivElement>();
const disabled = ref<boolean>(false);
const startBegin = async () => {
  const context = new Context();
  context.addWork(new Base64EnCodeWork());
  context.addWork(new Base64DecodeWork());
  await context.prepareWorks();
  
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