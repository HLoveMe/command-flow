<template>
  <div class="box">
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
    <input type="button" @click="clearLog" :disabled="disabled" value="clear" />
    <a class="name">String</a>
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
const utils = {
  length: {
    desc: ' "Abcd朱".length',
    expect: 5,
    run: () => {
      const target = new StringObject('Abcd朱');
      return target.length.valueOf();
    },
  },
  charAt: {
    desc: ' "Abcd朱".charAt(4)',
    expect: '朱',
    run: () => {
      const target = new StringObject('Abcd朱');
      return target.charAt(4).valueOf();
    },
  },
  charCodeAt: {
    desc: ' "Abcd朱".charCodeAt(4)',
    expect: 26417,
    run: () => {
      const target = new StringObject('Abcd朱');
      return target.charCodeAt(4).valueOf();
    },
  },
  codePointAt: {
    desc: ' "Abcd朱".codePointAt(4)',
    expect: 26417,
    run: () => {
      const target = new StringObject('Abcd朱');
      return target.codePointAt(4).valueOf();
    },
  },
  concat: {
    desc: ' "Abcd朱".concat("x","y")',
    expect: 'Abcd朱xy',
    run: () => {
      const target = new StringObject('Abcd朱');
      return target.concat(...['x', 'y']).valueOf();
    },
  },
  endsWith: {
    desc: ' "Abcd.json".endsWith("json")',
    expect: true,
    run: () => {
      const target = new StringObject('Abcd.json');
      return target.endsWith('json').valueOf();
    },
  },
  includes: {
    desc: ' "Abcd.json".includes("Abcd",3)',
    expect: false,
    run: () => {
      const target = new StringObject('Abcd.json');
      return target.includes('Abcd',3).valueOf();
    },
  },
  indexOf: {
    desc: ' "Abcd.json".indexOf("Abcd",3)',
    expect: -1,
    run: () => {
      const target = new StringObject('Abcd.json');
      return target.indexOf('Abcd',3).valueOf();
    },
  },
  lastIndexOf: {
    desc: ' "Abcd-Abcd".lastIndexOf("Abcd",3)',
    expect: 0,
    run: () => {
      const target = new StringObject('Abcd.json');
      return target.lastIndexOf('Abcd',3).valueOf();
    },
  },
  localeCompare: {
    desc: ' "Abcd.json".localeCompare("Abcd.json")',
    expect: 0,
    run: () => {
      // const target = new StringObject('Abcd.json');
      // return target.localeCompare('Abcd.json').valueOf();
    },
  },
  match: {
    desc: ' "Abcd-absa-Abcd.json".match(/Abcd/g)',
    expect: "Abcd,Abcd",
    run: () => {
      const target = new StringObject('Abcd-absa-Abcd.json');
      debugger
      return target.match(/Abcd/g).valueOf().toString();
    },
  },
  normalize: {
    desc: ' "Abcd.json".normalize()',
    expect: 'Abcd.json',
    run: () => {
      const target = new StringObject('Abcd.json');
      return target.normalize().valueOf();
    },
  },

  //   MatchAll = 'matchAll',
  //   Normalize = 'normalize',
  //   PadEnd = 'padEnd',
  //   PadStart = 'padStart',
  //   Repeat = 'repeat',
  //   Replace = 'replace',
  //   ReplaceAll = 'replaceAll',
  //   Search = 'search',
  //   Slice = 'slice',
  //   Small = 'small',
  //   Split = 'split',
  //   Strike = 'strike',
  //   Sub = 'sub',
  //   Substr = 'substr',
  //   Substring = 'substring',
  //   Sup = 'sup',
  //   StartsWith = 'startsWith',
  //   ToString = 'toString',
  //   Trim = 'trim',
  //   TrimStart = 'trimStart',
  //   TrimLeft = 'trimLeft',
  //   TrimEnd = 'trimEnd',
  //   TrimRight = 'trimRight',
  //   ToLocaleLowerCase = 'toLocaleLowerCase',
  //   ToLocaleUpperCase = 'toLocaleUpperCase',
  //   ToLowerCase = 'toLowerCase',
  //   ToUpperCase = 'toUpperCase',
  //   ValueOf = 'valueOf',
  //   At = 'at',
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
