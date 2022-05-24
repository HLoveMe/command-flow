<template>
  <div class="box">
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
    <input type="button" @click="clearLog" :disabled="disabled" value="clear" />
    <a class="name">Set test</a>
    <div class="run-container">
      <div
        class="run-result"
        v-for="(item, index) in logInfo"
        :key="index"
        :class="{
          'run-result-success': item.success,
          'run-result-error': !item.success,
        }"
      >
        {{ item.desc }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SetObject } from '../../../coreDist/index';
import { ref } from 'vue';
import { ControlFlow } from '../../../core';
const logInfo = ref<Array<{ desc: string; success: boolean }>>([]);
const disabled = ref<boolean>(false);

const clearLog = () => {
  logInfo.value.length = 0;
};
/***
    Entries = "entries",
    ForEach = "forEach",
    Values = "values",
    Keys = "keys",
 */
const utils = {
  has: {
    desc: 'set has',
    expect: true,
    run: () => {
      const map = new SetObject([1, 1, 2]);
      return map.has(2).valueOf();
    },
  },
  add: {
    desc: 'set add',
    expect: true,
    run: () => {
      const map = new SetObject([1, 1, 2]);
      map.add(3);
      return map.has(3).valueOf();
    },
  },
  delete: {
    desc: 'set delete',
    expect: false,
    run: () => {
      const map = new SetObject([1, 1, 2]);
      map.delete(2);
      return map.has(2).valueOf();
    },
  },
  clear: {
    desc: 'set clear',
    expect: 0,
    run: () => {
      const map = new SetObject([1, 1, 2]);
      map.clear();
      return map.size.valueOf();
    },
  },
  keys: {
    desc: 'array keys',
    expect: '1-3',
    run: () => {
      const array = new SetObject([1, 3]);
      return [...array.keys().valueOf()].join('-').valueOf();
    },
  },
  values: {
    desc: 'array values',
    expect: '1-3',
    run: () => {
      const array = new SetObject([1, 3]);
      return [...array.values().valueOf()].join('-').valueOf();
    },
  },
  entries: {
    desc: 'array entries',
    expect: '1,1-5,5-4,4-3,3',
    run: () => {
      const array = new SetObject([1, 5, 4, 3]);
      return [...array.entries().valueOf()].join('-').valueOf();
    },
  },
};
const startBegin = async () => {
  Object.keys(utils).forEach((key) => {
    const item = utils[key];
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
    .run-result-success {
      color: green;
    }
    .run-result-error {
      color: red;
    }
  }
}
</style>
