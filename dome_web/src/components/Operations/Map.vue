<template>
  <div class="box">
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
    <input type="button" @click="clearLog" :disabled="disabled" value="clear" />
    <a class="name">Map test</a>
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
  ControlFlow,
} from "command-flow";
import { ref } from "vue";
const logInfo = ref<Array<{ desc: string; success: boolean }>>([]);
const disabled = ref<boolean>(false);

const clearLog = () => {
  logInfo.value.length = 0;
};
const utils = {
  get: {
    desc: "map 获取值 get",
    expect: 200,
    run: () => {
      const map = new MapObject<string,any>(new Map());
      map.set("a", 1);
      map.set("b", 200);
      map.set("c", 1300);
      return map.get("b").valueOf();
    },
  },
  set: {
    desc: "map set ",
    expect: 1,
    run: () => {
      const map = new MapObject(new Map());
      map.set("a", 1);
      return map.size.valueOf();
    },
  },
  has: {
    desc: "map 是否包含 'b'",
    expect: false,
    run: () => {
      const map = new MapObject(new Map());
      map.set("a", 1);
      map.set("b", 200);
      map.set("c", 1300);
      return map.has("sas").valueOf();
    },
  },
  delete: {
    desc: "map delete 'b',删除后是否包含b",
    expect: false,
    run: () => {
      const map = new MapObject(new Map());
      map.set("a", 1);
      map.set("b", 200);
      map.set("c", 1300);
      map.delete("b");
      return map.has("b").valueOf();
    },
  },
  clear: {
    desc: "map 清空,长度是否为0",
    expect: 0,
    run: () => {
      const map = new MapObject(new Map());
      map.set("a", 1);
      map.set("b", 200);
      map.set("c", 1300);
      map.clear();
      return map.size.valueOf();
    },
  },
  keys: {
    desc: "map keys",
    expect: "a-b-c",
    run: () => {
      const map = new MapObject(new Map());
      map.set("a", 1);
      map.set("b", 200);
      map.set("c", 1300);
      return [...map.keys().valueOf()].join('-');
    },
  },
  values: {
    desc: "map values",
    expect: "1-200-1300",
    run: () => {
      const map = new MapObject(new Map());
      map.set("a", 1);
      map.set("b", 200);
      map.set("c", 1300);
      return [...map.values().valueOf()].join('-');
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