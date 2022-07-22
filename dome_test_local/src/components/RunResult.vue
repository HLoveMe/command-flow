<template>
  <div>
    <div>描述：{{ props.desc }}</div>
    <div>期待：{{ props.expect }}</div>
    <div class="result" :class="{ error: !props.success }">
      结果：{{ props.success ? "success" : "fail" }}
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  desc: string;
  expect: any;
  success: boolean;
}>();
</script>
<style scoped lang="less">
.error {
  color: red;
}
。result {
  color: green;
}
</style>