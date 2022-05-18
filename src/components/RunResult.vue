<template>
  <div>
    <div>描述：{{props.desc}}</div>
    <div>期待：{{props.expect}}</div>
    <div>结果：</div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  desc:string;
  expect: any;
}>();
</script>
<style scoped lang="less">
</style>