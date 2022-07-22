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
} from '@/command'
import { ref } from 'vue'
const logInfo = ref<Array<{ desc: string; success: boolean }>>([])
const disabled = ref<boolean>(false)

const clearLog = () => {
  logInfo.value.length = 0
}
const utils = {
  length: {
    desc: ' "Abcd朱".length',
    expect: 5,
    run: () => {
      const target = new StringObject('Abcd朱')
      return target.length.valueOf()
    },
  },
  charAt: {
    desc: ' "Abcd朱".charAt(4)',
    expect: '朱',
    run: () => {
      const target = new StringObject('Abcd朱')
      return target.charAt(4).valueOf()
    },
  },
  charCodeAt: {
    desc: ' "Abcd朱".charCodeAt(4)',
    expect: 26417,
    run: () => {
      const target = new StringObject('Abcd朱')
      return target.charCodeAt(4).valueOf()
    },
  },
  codePointAt: {
    desc: ' "Abcd朱".codePointAt(4)',
    expect: 26417,
    run: () => {
      const target = new StringObject('Abcd朱')
      return target.codePointAt(4).valueOf()
    },
  },
  concat: {
    desc: ' "Abcd朱".concat("x","y")',
    expect: 'Abcd朱xy',
    run: () => {
      const target = new StringObject('Abcd朱')
      return target.concat(...['x', 'y']).valueOf()
    },
  },
  endsWith: {
    desc: ' "Abcd.json".endsWith("json")',
    expect: true,
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.endsWith('json').valueOf()
    },
  },
  includes: {
    desc: ' "Abcd.json".includes("Abcd",3)',
    expect: false,
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.includes('Abcd', 3).valueOf()
    },
  },
  indexOf: {
    desc: ' "Abcd.json".indexOf("Abcd",3)',
    expect: -1,
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.indexOf('Abcd', 3).valueOf()
    },
  },
  lastIndexOf: {
    desc: ' "Abcd-Abcd".lastIndexOf("Abcd",3)',
    expect: 0,
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.lastIndexOf('Abcd', 3).valueOf()
    },
  },
  match: {
    desc: ' "Abcd-absa-Abcd.json".match(/Abcd/g)',
    expect: 'Abcd,Abcd',
    run: () => {
      const target = new StringObject('Abcd-absa-Abcd.json')
      debugger
      return target.match(/Abcd/g).valueOf().toString()
    },
  },
  normalize: {
    desc: ' "Abcd.json".normalize()',
    expect: 'Abcd.json',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.normalize().valueOf()
    },
  },
  padEnd: {
    desc: ' "Abcd.json".padEnd(10,"-")',
    expect: 'Abcd.json-',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.padEnd(10, '-').valueOf()
    },
  },
  padStart: {
    desc: ' "Abcd.json".padStart(10,"-")',
    expect: '-Abcd.json',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.padStart(10, '-').valueOf()
    },
  },
  repeat: {
    desc: ' "Abcd.json".repeat(2)',
    expect: 'Abcd.jsonAbcd.json',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.repeat(2).valueOf()
    },
  },
  replace: {
    desc: "'1234.json'.replace(/d/g, 'Abcd-');",
    expect: 'Abcd-.json',
    run: () => {
      const target = new StringObject('1234.json')
      return target.replace(/\d+/g, 'Abcd-').valueOf()
    },
  },
  search: {
    desc: ' "111Abcd.json".search(/A/)',
    expect: 3,
    run: () => {
      const target = new StringObject('111Abcd.json')
      return target.search(/A/).valueOf()
    },
  },
  slice: {
    desc: ' "Abcd.json".slice(1,3)',
    expect: 'bc',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.slice(1, 3).valueOf()
    },
  },

  split: {
    desc: ' "Abcd.json".split(".")',
    expect: 'Abcd,json',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.split('.').valueOf().toString()
    },
  },
  startsWith: {
    desc: ' "Abcd.json".startsWith("Abcd")',
    expect: true,
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.startsWith('Abcd').valueOf()
    },
  },
  substring: {
    desc: ' "Abcd.json".substr(1,3)',
    expect: 'bcd',
    run: () => {
      ''.substring
      const target = new StringObject('Abcd.json')
      return target.substr(1, 3).valueOf()
    },
  },
  trim: {
    desc: ' " Abcd.json ".trim()',
    expect: 'Abcd.json',
    run: () => {
      const target = new StringObject(' Abcd.json ')
      return target.trim().valueOf()
    },
  },
  toLocaleLowerCase: {
    desc: ' "Abcd.json".toLocaleLowerCase()',
    expect: 'abcd.json',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.toLocaleLowerCase().valueOf()
    },
  },
  toLocaleUpperCase: {
    desc: ' "Abcd.json".toLocaleUpperCase()',
    expect: 'ABCD.JSON',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.toLocaleUpperCase().valueOf()
    },
  },
  toLowerCase: {
    desc: ' "Abcd.json".toLowerCase()',
    expect: 'abcd.json',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.toLowerCase().valueOf()
    },
  },
  toUpperCase: {
    desc: ' "Abcd.json".toUpperCase()',
    expect: 'ABCD.JSON',
    run: () => {
      const target = new StringObject('Abcd.json')
      return target.toUpperCase().valueOf()
    },
  },
  trimLeft: {
    desc: ' " Abcd.json ".trimLeft()',
    expect: 'Abcd.json ',
    run: () => {
      const target = new StringObject(' Abcd.json ')
      return target.trimLeft().valueOf()
    },
  },
  trimRight: {
    desc: ' " Abcd.json ".trimRight()',
    expect: ' Abcd.json',
    run: () => {
      const target = new StringObject(' Abcd.json ')
      return target.trimRight().valueOf()
    },
  },
  matchAll: {
    desc: ' "AbcdAb.json".matchAll(/Abcd/)',
    expect: '0,4',
    run: () => {
      ''.matchAll
      const target = new StringObject('AbcdAb.json')
      const reg = new RegExp('Ab', 'g')
      const result = [...target.matchAll(reg).valueOf()].map(($1) => $1.index)
      return result.toString()
    },
  },
  replaceAll: {
    desc: ' "AbcdAb.json".replaceAll(/Ab/g, "-")',
    expect: '-cd-.json',
    run: () => {
      const target = new StringObject('AbcdAb.json')
      return target.replaceAll('Ab', '-').valueOf()
    },
  },
}
const startBegin = async () => {
  Object.keys(utils).forEach((key) => {
    const item = (utils as any)[key]
    const result = item.run()
    logInfo.value.push({
      desc: `[ ${item.desc} ]: 结果：${result}，期待：${item.expect} `,
      success: result === item.expect,
    })
  })
}
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
