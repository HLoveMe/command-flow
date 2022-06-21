<template>
  <div class="box">
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
    <input type="button" @click="clearLog" :disabled="disabled" value="clear" />
    <a class="name">DateObject</a>
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
} from 'command-flow';
import { ref } from 'vue';
const logInfo = ref<Array<{ desc: string; success: boolean }>>([]);
const disabled = ref<boolean>(false);

const clearLog = () => {
  logInfo.value.length = 0;
};
const current:Date = new Date();
const utils: any = {
  toDateString: {
    desc: ' date.toDateString()',
    expect: current.toDateString(),
    run: () => {
      const date = new DateObject(current);
      return date.toDateString().valueOf();
    },
  },
  toTimeString: {
    desc: ' date.toTimeString()',
    expect: current.toTimeString(),
    run: () => {
      const date = new DateObject(current);
      return date.toTimeString().valueOf();
    },
  },
  toISOString: {
    desc: ' date.toISOString()',
    expect: current.toISOString(),
    run: () => {
      const date = new DateObject(current);
      return date.toISOString().valueOf();
    },
  },
  toUTCString: {
    desc: ' date.toUTCString()',
    expect: current.toUTCString(),
    run: () => {
      const date = new DateObject(current);
      return date.toUTCString().valueOf();
    },
  },
  getDate: {
    desc: ' date.getDate()',
    expect: current.getDate(),
    run: () => {
      const date = new DateObject(current);
      return date.getDate().valueOf();
    },
  },
  setDate: {
    desc: ' date.setDate(1)',
    expect: 11,
    run: () => {
      const date = new DateObject(current);
      return (new Date(date.setDate(11).valueOf())).getDate().valueOf();
    },
  },
  getDay: {
    desc: ' date.getDay()',
    expect: current.getDay(),
    run: () => {
      const date = new DateObject(current);
      return date.getDay().valueOf();
    },
  },
  getFullYear: {
    desc: ' date.getFullYear()',
    expect: current.getFullYear(),
    run: () => {
      const date = new DateObject(current);
      return date.getFullYear().valueOf();
    },
  },
  setFullYear: {
    desc: ' date.setFullYear(1)',
    expect: 2031,
    run: () => {
      const date = new DateObject(current);
      return (new Date(date.setFullYear(2031).valueOf())).getFullYear().valueOf();
    },
  },
  getHours: {
    desc: ' date.getHours()',
    expect: current.getHours(),
    run: () => {
      const date = new DateObject(current);
      return date.getHours().valueOf();
    },
  },
  setHours: {
    desc: ' date.setHours(1)',
    expect: 15,
    run: () => {
      const date = new DateObject(current);
      return (new Date(date.setHours(15).valueOf())).getHours().valueOf();
    },
  },
  getMilliseconds: {
    desc: ' date.getMilliseconds()',
    expect: current.getMilliseconds(),
    run: () => {
      const date = new DateObject(current);
      return date.getMilliseconds().valueOf();
    },
  },
  setMilliseconds: {
    desc: ' date.setMilliseconds(1)',
    expect: 35,
    run: () => {
      const date = new DateObject(current);
      return (new Date(date.setMilliseconds(35).valueOf())).getMilliseconds().valueOf();
    },
  },
  getMinutes: {
    desc: ' date.getMinutes()',
    expect: current.getMinutes(),
    run: () => {
      const date = new DateObject(current);
      return date.getMinutes().valueOf();
    },
  },
  setMinutes: {
    desc: ' date.setMinutes(1)',
    expect: 59,
    run: () => {
      const date = new DateObject(current);
      return (new Date(date.setMinutes(59).valueOf())).getMinutes().valueOf();
    },
  },
  getMonth: {
    desc: ' date.getMonth()',
    expect: current.getMonth(),
    run: () => {
      const date = new DateObject(current);
      return date.getMonth().valueOf();
    },
  },
  setMonth: {
    desc: ' date.setMonth(1)',
    expect: 10,
    run: () => {
      const date = new DateObject(current);
      
      return (new Date(date.setMonth(10).valueOf())).getMonth().valueOf();
    },
  },
  getSeconds: {
    desc: ' date.getSeconds()',
    expect: current.getSeconds(),
    run: () => {
      const date = new DateObject(current);
      return date.getSeconds().valueOf();
    },
  },
  setSeconds: {
    desc: ' date.setSeconds(1)',
    expect: 25,
    run: () => {
      const date = new DateObject(current);
      
      return (new Date(date.setSeconds(25).valueOf())).getSeconds().valueOf();
    },
  },
  getTime: {
    desc: ' date.getTime()',
    expect: current.getTime(),
    run: () => {
      const date = new DateObject(current);
      return date.getTime().valueOf();
    },
  },
  setTime: {
    desc: ' date.setTime(1)',
    expect: 1,
    run: () => {
      const date = new DateObject(current);
      date.setTime(1);
      return date.getTime().valueOf();
    },
  },
  getTimezoneOffset: {
    desc: ' date.getTimezoneOffset()',
    expect: current.getTimezoneOffset(),
    run: () => {
      const date = new DateObject(current);
      return date.getTimezoneOffset().valueOf();
    },
  },
  getUTCDate: {
    desc: ' date.getUTCDate()',
    expect: current.getUTCDate(),
    run: () => {
      const date = new DateObject(current);
      return date.getUTCDate().valueOf();
    },
  },
  setUTCDate: {
    desc: ' date.setUTCDate(1)',
    expect: 1,
    run: () => {
      const date = new DateObject(current);
      date.setUTCDate(1);
      return date.getUTCDate().valueOf();
    },
  },
  getUTCDay: {
    desc: ' date.getUTCDay()',
    expect: current.getUTCDay(),
    run: () => {
      const date = new DateObject(current);
      return date.getUTCDay().valueOf();
    },
  },
  getUTCFullYear: {
    desc: ' date.getUTCFullYear()',
    expect: current.getUTCFullYear(),
    run: () => {
      const date = new DateObject(current);
      return date.getUTCFullYear().valueOf();
    },
  },
  setUTCFullYear: {
    desc: ' date.setUTCFullYear(1)',
    expect: 1,
    run: () => {
      const date = new DateObject(current);
      date.setUTCFullYear(1);
      return date.getUTCFullYear().valueOf();
    },
  },
  getUTCHours: {
    desc: ' date.getUTCHours()',
    expect: current.getUTCHours(),
    run: () => {
      const date = new DateObject(current);
      return date.getUTCHours().valueOf();
    },
  },
  setUTCHours: {
    desc: ' date.setUTCHours(1)',
    expect: 1,
    run: () => {
      const date = new DateObject(current);
      date.setUTCHours(1);
      return date.getUTCHours().valueOf();
    },
  },
  getUTCMilliseconds: {
    desc: ' date.getUTCMilliseconds()',
    expect: current.getUTCMilliseconds(),
    run: () => {
      const date = new DateObject(current);
      return date.getUTCMilliseconds().valueOf();
    },
  },
  setUTCMilliseconds: {
    desc: ' date.setUTCMilliseconds(1)',
    expect: 1,
    run: () => {
      const date = new DateObject(current);
      date.setUTCMilliseconds(1);
      return date.getUTCMilliseconds().valueOf();
    },
  },
  getUTCMinutes: {
    desc: ' date.getUTCMinutes()',
    expect: current.getUTCMinutes(),
    run: () => {
      const date = new DateObject(current);
      return date.getUTCMinutes().valueOf();
    },
  },
  setUTCMinutes: {
    desc: ' date.setUTCMinutes(1)',
    expect: 1,
    run: () => {
      const date = new DateObject(current);
      date.setUTCMinutes(1);
      return date.getUTCMinutes().valueOf();
    },
  },
  getUTCMonth: {
    desc: ' date.getUTCMonth()',
    expect: current.getUTCMonth(),
    run: () => {
      const date = new DateObject(current);
      return date.getUTCMonth().valueOf();
    },
  },
  setUTCMonth: {
    desc: ' date.setUTCMonth(1)',
    expect: 1,
    run: () => {
      const date = new DateObject(current);
      date.setUTCMonth(1);
      return date.getUTCMonth().valueOf();
    },
  },
  getUTCSeconds: {
    desc: ' date.getUTCSeconds()',
    expect: current.getUTCSeconds(),
    run: () => {
      const date = new DateObject(current);
      return date.getUTCSeconds().valueOf();
    },
  },
  setUTCSeconds: {
    desc: ' date.setUTCSeconds(1)',
    expect: 1,
    run: () => {
      const date = new DateObject(current);
      date.setUTCSeconds(1);
      return date.getUTCSeconds().valueOf();
    },
  },
  toJSON: {
    desc: ' date.toJSON()',
    expect: current.toJSON(),
    run: () => {
      const date = new DateObject(current);
      return date.toJSON().valueOf();
    },
  },
  toLocaleDateString: {
    desc: ' date.toLocaleDateString()',
    expect: current.toLocaleDateString(),
    run: () => {
      const date = new DateObject(current);
      return date.toLocaleDateString().valueOf();
    },
  },
  toLocaleString: {
    desc: ' date.toLocaleString()',
    expect: current.toLocaleString(),
    run: () => {
      const date = new DateObject(current);
      return date.toLocaleString().valueOf();
    },
  },
  toLocaleTimeString: {
    desc: ' date.toLocaleTimeString()',
    expect: current.toLocaleTimeString(),
    run: () => {
      const date = new DateObject(current);
      return date.toLocaleTimeString().valueOf();
    },
  }
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
    .run-result-success {
      color: green;
    }
    .run-result-error {
      color: red;
    }
  }
}
</style>
