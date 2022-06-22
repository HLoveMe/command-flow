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
const utils: any = {
  toDateString: {
    desc: ' date.toDateString()',
    expect: new Date('2021-1-1').toDateString(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.toDateString().valueOf();
    },
  },
  toTimeString: {
    desc: ' date.toTimeString()',
    expect: new Date('2021-1-1').toTimeString(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.toTimeString().valueOf();
    },
  },
  toISOString: {
    desc: ' date.toISOString()',
    expect: new Date('2021-1-1').toISOString(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.toISOString().valueOf();
    },
  },
  toUTCString: {
    desc: ' date.toUTCString()',
    expect: new Date('2021-1-1').toUTCString(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.toUTCString().valueOf();
    },
  },
  getDate: {
    desc: ' date.getDate()',
    expect: new Date('2021-1-1').getDate(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getDate().valueOf();
    },
  },
  setDate: {
    desc: ' date.setDate(1)',
    expect: 11,
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return new Date(date.setDate(11).valueOf()).getDate().valueOf();
    },
  },
  getDay: {
    desc: ' date.getDay()',
    expect: new Date('2021-1-1').getDay(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getDay().valueOf();
    },
  },
  getFullYear: {
    desc: ' date.getFullYear()',
    expect: new Date('2021-1-1').getFullYear(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getFullYear().valueOf();
    },
  },
  setFullYear: {
    desc: ' date.setFullYear(1)',
    expect: 2031,
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return new Date(date.setFullYear(2031).valueOf()).getFullYear().valueOf();
    },
  },
  getHours: {
    desc: ' date.getHours()',
    expect: new Date('2021-1-1').getHours(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getHours().valueOf();
    },
  },
  setHours: {
    desc: ' date.setHours(1)',
    expect: 15,
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return new Date(date.setHours(15).valueOf()).getHours().valueOf();
    },
  },
  getMilliseconds: {
    desc: ' date.getMilliseconds()',
    expect: new Date('2021-1-1').getMilliseconds(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getMilliseconds().valueOf();
    },
  },
  setMilliseconds: {
    desc: ' date.setMilliseconds(1)',
    expect: 35,
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return new Date(date.setMilliseconds(35).valueOf())
        .getMilliseconds()
        .valueOf();
    },
  },
  getMinutes: {
    desc: ' date.getMinutes()',
    expect: new Date('2021-1-1').getMinutes(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getMinutes().valueOf();
    },
  },
  setMinutes: {
    desc: ' date.setMinutes(1)',
    expect: 59,
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return new Date(date.setMinutes(59).valueOf()).getMinutes().valueOf();
    },
  },
  getMonth: {
    desc: ' date.getMonth()',
    expect: new Date('2021-1-1').getMonth(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getMonth().valueOf();
    },
  },
  setMonth: {
    desc: ' date.setMonth(1)',
    expect: 10,
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));

      return new Date(date.setMonth(10).valueOf()).getMonth().valueOf();
    },
  },
  getSeconds: {
    desc: ' date.getSeconds()',
    expect: new Date('2021-1-1').getSeconds(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getSeconds().valueOf();
    },
  },
  setSeconds: {
    desc: ' date.setSeconds(1)',
    expect: 25,
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));

      return new Date(date.setSeconds(25).valueOf()).getSeconds().valueOf();
    },
  },
  getTime: {
    desc: ' date.getTime()',
    expect: new Date('2021-1-1').getTime(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getTime().valueOf();
    },
  },
  setTime: {
    desc: ' date.setTime(1)',
    expect: new Date().setTime(25),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return new Date(date.setTime(25).valueOf()).getTime().valueOf();
    },
  },
  getTimezoneOffset: {
    desc: ' date.getTimezoneOffset()',
    expect: new Date('2021-1-1').getTimezoneOffset(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getTimezoneOffset().valueOf();
    },
  },
  getUTCDate: {
    desc: ' date.getUTCDate()',
    expect: new Date('2021-1-1').getUTCDate(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getUTCDate().valueOf();
    },
  },
  setUTCDate: {
    desc: ' date.setUTCDate(1)',
    expect: new Date('2021-1-1').setUTCDate(25),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return new Date(date.setUTCDate(25).valueOf()).valueOf();
    },
  },
  getUTCDay: {
    desc: ' date.getUTCDay()',
    expect: new Date('2021-1-1').getUTCDay(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      debugger
      return date.getUTCDay().valueOf();
    },
  },
  getUTCFullYear: {
    desc: ' date.getUTCFullYear()',
    expect: new Date('2021-1-1').getUTCFullYear(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getUTCFullYear().valueOf();
    },
  },
  setUTCFullYear: {
    desc: ' date.setUTCFullYear(1)',
    expect: new Date('2021-1-1').setUTCFullYear(25),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.setUTCFullYear(25).valueOf();
    },
  },
  getUTCHours: {
    desc: ' date.getUTCHours()',
    expect: new Date('2021-1-1').getUTCHours(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getUTCHours().valueOf();
    },
  },
  setUTCHours: {
    desc: ' date.setUTCHours(1)',
    expect: new Date('2021-1-1').setUTCHours(11),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return (new Date(date.setUTCHours(11).valueOf())).valueOf();
    },
  },
  getUTCMilliseconds: {
    desc: ' date.getUTCMilliseconds()',
    expect: new Date('2021-1-1').getUTCMilliseconds(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getUTCMilliseconds().valueOf();
    },
  },
  setUTCMilliseconds: {
    desc: ' date.setUTCMilliseconds(1)',
    expect: new Date('2021-1-1').setUTCMilliseconds(999),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      ;
      return (new Date(date.setUTCMilliseconds(999).valueOf())).valueOf();
    },
  },
  getUTCMinutes: {
    desc: ' date.getUTCMinutes()',
    expect: new Date('2021-1-1').getUTCMinutes(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getUTCMinutes().valueOf();
    },
  },
  setUTCMinutes: {
    desc: ' date.setUTCMinutes(1)',
    expect: new Date('2021-1-1').setUTCMinutes(23),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      
      return (new Date(date.setUTCMinutes(23).valueOf())).valueOf();
    },
  },
  getUTCMonth: {
    desc: ' date.getUTCMonth()',
    expect: new Date('2021-1-1').getUTCMonth(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getUTCMonth().valueOf();
    },
  },
  setUTCMonth: {
    desc: ' date.setUTCMonth(1)',
    expect: new Date('2021-1-1').setUTCMonth(6),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return (new Date(date.setUTCMonth(6).valueOf())).valueOf();
    },
  },
  getUTCSeconds: {
    desc: ' date.getUTCSeconds()',
    expect: new Date('2021-1-1').getUTCSeconds(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.getUTCSeconds().valueOf();
    },
  },
  setUTCSeconds: {
    desc: ' date.setUTCSeconds(1)',
    expect: new Date('2021-1-1').setUTCSeconds(42),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return (new Date(date.setUTCSeconds(42).valueOf())).valueOf();
    },
  },
  toJSON: {
    desc: ' date.toJSON()',
    expect: new Date('2021-1-1').toJSON(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.toJSON().valueOf();
    },
  },
  toLocaleDateString: {
    desc: ' date.toLocaleDateString()',
    expect: new Date('2021-1-1').toLocaleDateString(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.toLocaleDateString().valueOf();
    },
  },
  toLocaleString: {
    desc: ' date.toLocaleString()',
    expect: new Date('2021-1-1').toLocaleString(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.toLocaleString().valueOf();
    },
  },
  toLocaleTimeString: {
    desc: ' date.toLocaleTimeString()',
    expect: new Date('2021-1-1').toLocaleTimeString(),
    run: () => {
      const date = new DateObject(new Date('2021-1-1'));
      return date.toLocaleTimeString().valueOf();
    },
  },
};
const startBegin = async () => {
  Object.keys(utils).forEach((key) => {
    const item = (utils as any)[key];
    const result = item.run();
    logInfo.value.push({
      desc: `[ ${item.desc} ]: 结果：${result}，期待：${item.expect} `,
      success: result + '' == item.expect + '',
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
