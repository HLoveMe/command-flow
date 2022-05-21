<template>
  <div class="box">
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
    <input type="button" @click="clearLog" :disabled="disabled" value="clear" />
    <a class="name">Array test</a>
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
} from "../../../coreDist/index";
import { ref } from "vue";
import { ControlFlow } from "../../../core";
const logInfo = ref<Array<{ desc: string; success: boolean }>>([]);
const disabled = ref<boolean>(false);

const clearLog = () => {
  logInfo.value.length = 0;
};
/***
 *  
    CopyWithin = "copyWithin",
    Fill = "fill",
    Find = "find",
    FindIndex = "findIndex",
    LastIndexOf = "lastIndexOf",
    Pop = "pop",
    Push = "push",
    Reverse = "reverse",
    Shift = "shift",
    Unshift = "unshift",
    Slice = "slice",
    Sort = "sort",
    Splice = "splice",
    Includes = "includes",
    IndexOf = "indexOf",
    Join = "join",
    Keys = "keys",
    Entries = "entries",
    Values = "values",
    ForEach = "forEach",
    Filter = "filter",
    Map = "map",
    Every = "every",
    Some = "some",
    Reduce = "reduce",
    ReduceRight = "reduceRight",
 */
const utils = {
  concat: {
    concat: "array concat",
    expect: "1111-2222-3333-44444",
    run: () => {
      const array = new ArrayObject();
      array.push("1111");
      array.push("2222");
      array.push("3333");
      const _array = array.concat(["44444"]);
      return [..._array.valueOf()].join("-");
    },
  },
  copyWithin: {
    concat: "array copyWithin",
    expect: "1-2-1-2",
    run: () => {
      const array = new ArrayObject([1, 2, 3, 4]);
      array.copyWithin(2, 0);
      return [...array.valueOf()].join("-");
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