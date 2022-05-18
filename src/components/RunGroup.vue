<template>
  <div class="run-g">
    <div id="id">Run-Id：{{ props.id }}</div>
    <div class="log-container">
      <div class="log" v-for="(item, index) in props.items" :key="index">
        {{ item.desc }} -- {{ item.workName }} -- {{ item.value }}
        <div v-if="isNext(index)" class="diver"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
type V = {
  id: string;
  workName: string;
  desc: string;
  value: any;
};
const props = defineProps<{
  id: string;
  items: Array<V>;
  expect:any
}>();
const isNext = (index: number) => {
  if (index === 0 || index === props.items.length - 1) return false;
  const cu = props.items[index];
  const pre = props.items[index + 1];
  return cu.workName !== pre.workName;
};
const resultRef = ref<HTMLDivElement>();
</script>
<style scoped lang="less">
.run-g {
  margin-top: 10px;
  margin-left: 20px;
}
.id {
  margin-left: 20px;
}
.log-container {
  margin-left: 20px;
  .log {
    .diver {
      height: 20px;
    }
  }
}
</style>