<template>
  <div class="box">
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
    <input type="button" @click="clearLog" :disabled="disabled" value="clear" />
    <a class="name">NumberObject Operation</a>
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
} from "../../../dist/web/index";
import { ref } from "vue";
const logInfo = ref<Array<{ desc: string; success: boolean }>>([]);
const disabled = ref<boolean>(false);

const clearLog = () => {
  logInfo.value.length = 0;
};
const utils = {
  more: {
    desc: " 1 > 2 ",
    expect: false,
    run: () => {
      const a = new NumberObject(1);
      return new NumberObject(1).more(new NumberObject(2)).valueOf();
    },
  },
  equal: {
    desc: " 1 == 2 ",
    expect: false,
    run: () => {
      return new NumberObject(1).equal(new NumberObject(2)).valueOf();
    },
  },
  less: {
    desc: " 1 < 2 ",
    expect: true,
    run: () => {
      return new NumberObject(1).less(new NumberObject(2)).valueOf();
    },
  },
  moreEqual: {
    desc: " 2>=1 ",
    expect: true,
    run: () => {
      return new NumberObject(2).moreEqual(new NumberObject(1)).valueOf();
    },
  },
  lessEqual: {
    desc: " 2<=1 ",
    expect: false,
    run: () => {
      return new NumberObject(2).lessEqual(new NumberObject(1)).valueOf();
    },
  },
  plus: {
    desc: " 100 + 2 ",
    expect: 102,
    run: () => {
      return new NumberObject(100).plus(new NumberObject(2)).valueOf();
    },
  },
  plu2: {
    desc: " 0.1 + 0.2 ",
    expect: 0.3,
    run: () => {
      return new NumberObject(0.1).plus(new NumberObject(0.2)).valueOf();
    },
  },
  reduce: {
    desc: " 100 - 2 ",
    expect: 98,
    run: () => {
      return new NumberObject(100).reduce(new NumberObject(2)).valueOf();
    },
  },
  multi: {
    desc: " 100 * 2 ",
    expect: 200,
    run: () => {
      return new NumberObject(100).multi(new NumberObject(2)).valueOf();
    },
  },
  divide: {
    desc: " 100 / 2 ",
    expect: 50,
    run: () => {
      return new NumberObject(100).divide(new NumberObject(2)).valueOf();
    },
  },
};
const startBegin = async () => {
  clearLog()
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
    .run-result-success{
      color:green;
    }
    .run-result-error{
      color:red;
    }
  }
}
</style>