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
} from '../../../dist/web/index';
import { ref } from 'vue';
import { ControlFlow } from '../../../core';
const logInfo = ref<Array<{ desc: string; success: boolean }>>([]);
const disabled = ref<boolean>(false);

const clearLog = () => {
  logInfo.value.length = 0;
};
/***
 * 
    ReduceRight = "reduceRight",
 */
const utils = {
  concat: {
    concat: 'array concat',
    expect: '1111-2222-3333-44444',
    run: () => {
      const array = new ArrayObject();
      array.push('1111');
      array.push('2222');
      array.push('3333');
      const _array = array.concat(['44444']);
      return [..._array.valueOf()].join('-');
    },
  },
  copyWithin: {
    concat: 'array copyWithin',
    expect: '1-2-1-2',
    run: () => {
      const array = new ArrayObject([1, 2, 3, 4]);
      array.copyWithin(2, 0);
      return [...array.valueOf()].join('-');
    },
  },
  fill: {
    concat: 'array fill',
    expect: '1-1-1-1',
    run: () => {
      const array = new ArrayObject(4);
      array.fill(1);
      return [...array.valueOf()].join('-');
    },
  },
  find: {
    concat: 'array find',
    expect: '2222',
    run: () => {
      const array = new ArrayObject();
      array.push('1111');
      array.push('2222');
      array.push('3333');
      return array.find(($1) => $1 == '2222').valueOf();
    },
  },
  findIndex: {
    concat: 'array findIndex',
    expect: 1,
    run: () => {
      const array = new ArrayObject();
      array.push('1111');
      array.push('2222');
      array.push('3333');
      return array.findIndex(($1) => $1 == '2222').valueOf();
    },
  },
  lastIndexOf: {
    concat: 'array lastIndexOf',
    expect: 4,
    run: () => {
      const array = new ArrayObject();
      array.push('2222');
      array.push('1111');
      array.push('2222');
      array.push('3333');
      array.push('2222');

      return array.lastIndexOf('2222').valueOf();
    },
  },
  pop: {
    concat: 'array pop',
    expect: '2222-1111',
    run: () => {
      const array = new ArrayObject();
      array.push('2222');
      array.push('1111');
      array.push('2222');
      array.pop();
      return array.join('-').valueOf();
    },
  },
  push: {
    concat: 'array push',
    expect: '2222-1111',
    run: () => {
      const array = new ArrayObject();
      array.push('2222');
      array.push('1111');
      return array.join('-').valueOf();
    },
  },
  reverse: {
    concat: 'array reverse',
    expect: '1111-1111-2222',
    run: () => {
      const array = new ArrayObject();
      array.push('2222');
      array.push('1111');
      array.push('1111');
      array.reverse();
      return array.join('-').valueOf();
    },
  },
  shift: {
    concat: 'array shift',
    expect: '2222',
    run: () => {
      const array = new ArrayObject();
      array.push('2222');
      array.push('1111');
      array.push('1111');
      return [array.shift().valueOf()].join('-');
    },
  },
  unshift: {
    concat: 'array unshift',
    expect: '3333-4444-2222',
    run: () => {
      const array = new ArrayObject();
      array.push('2222');
      array.unshift('3333', '4444');
      return array.join('-').valueOf();
    },
  },
  slice: {
    concat: 'array slice',
    expect: '4444-2222',
    run: () => {
      const array = new ArrayObject();
      array.push('2222');
      array.unshift('3333', '4444');
      array.push('5555');
      return array.slice(-3, -1).join('-').valueOf();
    },
  },
  sort: {
    concat: 'array sort',
    expect: '1-2-3-7',
    run: () => {
      const array = new ArrayObject([3, 1, 7, 2]);
      const result = array.sort(($1, $2) => $1 - $2);
      return [...result.valueOf()].join('-');
    },
  },
  splice: {
    concat: 'array splice',
    expect: '1-0-0-7',
    run: () => {
      const array = new ArrayObject([1, 7]);
      array.splice(1, 0, 0, 0);
      return array.valueOf().join('-');
    },
  },
  includes: {
    concat: 'array includes',
    expect: true,
    run: () => {
      const array = new ArrayObject([1, 0, 3, 0, 7]);
      return array.includes(0, 2).valueOf();
    },
  },
  indexOf: {
    concat: 'array indexOf',
    expect: 3,
    run: () => {
      const array = new ArrayObject([1, 0, 3, 0, 7]);
      return array.indexOf(0, 2).valueOf();
    },
  },
  join: {
    concat: 'array join',
    expect: '1-3',
    run: () => {
      const array = new ArrayObject([1, 3]);
      return array.join('-').valueOf();
    },
  },
  keys: {
    concat: 'array keys',
    expect: '0-1',
    run: () => {
      const array = new ArrayObject([1, 3]);
      return [...array.keys().valueOf()].join('-').valueOf();
    },
  },
  values: {
    concat: 'array values',
    expect: '1-3',
    run: () => {
      const array = new ArrayObject([1, 3]);
      return [...array.values().valueOf()].join('-').valueOf();
    },
  },
  entries: {
    concat: 'array entries',
    expect: '0,1-1,5-2,4-3,3',
    run: () => {
      const array = new ArrayObject([1, 5, 4, 3]);
      return [...array.entries().valueOf()].join('-').valueOf();
    },
  },
  forEach: {
    concat: 'array forEach',
    expect: '0-0-0-0',
    run: () => {
      const array = new ArrayObject(4);
      const result = new ArrayObject([]);
      array.fill(0);
      array.forEach(($1) => {
        result.push($1);
      });
      return result.join('-').valueOf();
    },
  },
  filter: {
    concat: 'array filter',
    expect: '1',
    run: () => {
      const array = new ArrayObject([1, 2, 3, 4]);
      return array
        .filter(($1) => $1 === 1)
        .join('-')
        .valueOf();
    },
  },
  map: {
    concat: 'array map',
    expect: '1-1-1-1',
    run: () => {
      const array = new ArrayObject(4);
      array.fill(0);
      const result = array.map(($1) => {
        return 1;
      });
      return result.join('-').valueOf();
    },
  },
  every: {
    concat: 'array every',
    expect: true,
    run: () => {
      const array = new ArrayObject([4, 7, 9, 11]);
      const result = array.every(($1) => {
        return $1 >= 4;
      });
      return result.valueOf();
    },
  },
  some: {
    concat: 'array some',
    expect: false,
    run: () => {
      const array = new ArrayObject([4, 7, 9, 11]);
      const result = array.some(($1) => {
        return $1 > 12;
      });
      return result.valueOf();
    },
  },
  reduce: {
    concat: 'array reduce',
    expect: 15,
    run: () => {
      const array = new ArrayObject([1, 2, 3, 4]);
      const result = array.reduce(($1, $2) => {
        return $1 + $2;
      }, 5);
      return result.valueOf();
    },
  },
  reduceRight: {
    concat: 'array reduceRight',
    expect: 15,
    run: () => {
      const array = new ArrayObject([1, 2, 3, 4]);
      const result = array.reduceRight(($1, $2) => {
        return $1 + $2;
      }, 5);
      return result.valueOf();
    },
  },
};
const startBegin = async () => {
  Object.keys(utils).forEach((key) => {
    const item = utils[key];
    const result = item.run();
    logInfo.value.push({
      desc: `[ ${item.concat} ]: 结果：${result}，期待：${item.expect} `,
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
