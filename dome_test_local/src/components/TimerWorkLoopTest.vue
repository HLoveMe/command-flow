<template>
  <div class="box">
    <input
      type="button"
      @click="startBegin"
      :disabled="disabled"
      value="start"
    />
    <input type="button" @click="reRun" :disabled="disabled" value="reRun" />
    <input
      type="button"
      @click="showCode"
      :disabled="disabled"
      value="showCode"
    />
    <input type="button" @click="clearLog" :disabled="disabled" value="clear" />
    <input type="button" @click="stopWork" :disabled="disabled" value="stop" />
    <a class="name">TimerWorkLoopTest</a>
    <div class="run-container">
      <div class="code" ref="codeRef"></div>
      <RunGroup
        v-for="item in logInfo.keys()"
        :key="item"
        :id="item"
        :items="logInfo.get(item)"
      ></RunGroup>
      <RunResult
        v-if="logInfo.size >= 1"
        desc=""
        expect=""
        :success="true"
      ></RunResult>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  Context,
  TimeoutWork,
  IntervalWork,
  DelayIntervalWork,
  InstructionOTO,
  unpackValue,
} from '@/command'
import { ref } from 'vue'
import RunGroup from './RunGroup.vue'
import RunResult from './RunResult.vue'
import { from, Observable } from 'rxjs'
interface WorkStatus {
  content?: any
  work?: any | any[]
  desc?: any
  value?: any
  date?: Date
  error: Error
}
const result = ref<boolean[]>([false])
const codeRef = ref<HTMLDivElement>({} as any)
const logInfo = ref<Map<string, Array<any>>>(new Map())
const disabled = ref<boolean>(false)
const getContext = () => {
  const context = new Context()
  context.addWorkLog({
    next: (log: any | WorkStatus) => {
      const {
        desc,
        value: { _value },
        work,
        error,
      } = log
      const id = _value.id
      const channeLValue = _value.value._value
      const workName = work.map(($1: any) => $1.name).join('-')
      const currentRun = logInfo.value.get(id) || []
      logInfo.value.set(id, currentRun)
      currentRun.push({
        id,
        workName,
        desc,
        value: channeLValue,
        error,
      })
    },
    error: () => {
      context.stopWorkChain()
    },
  })
  return context
}

class TestLoop extends InstructionOTO {
  didPrepare() {
    (this as any).logMsg('[Work][loop]->didPrepare', null);
  }
  onReceiveSignal() {
    (this as any).logMsg('[Work][loop]->onReceiveSignal', null);
    return null
  }
  onChainNext() {
    (this as any).logMsg('[Work][loop]->onChainNext', null);
    return null
  }

  onChainComplete() {
     (this as any).logMsg('[Work][loop]->onChainComplete', null);
     (this as any).logMsg('[Work][loop]->----------------完成一次消息输入到输出---------------------', null);
  }

  onForceFinish() {}
}

const contexts: any[] = []
const clearLog = () => {
  logInfo.value.clear()
}
async function codeDome() {
  const context = new Context()
  context.addWork(new TimeoutWork())
  await context.prepareWorks()
  context.dispatch()
}
const reRun = () => {
  stopWork()
  logInfo.value.clear()
  startBegin()
}
const startBegin = async () => {
  async function timer() {
    const context = getContext()
    context.addWork(new IntervalWork({ max: 3 }))
    context.addWork(new TestLoop())
    await context.prepareWorks()
    context.dispatch()
    contexts.push(context)
  }
  timer()
}
const stopWork = () => {
  contexts.forEach(($1) => {
    $1.stopWorkChain()
  })
  contexts.length = 0
}
const showCode = () => {
  console.log(codeDome.toString())
  if (codeRef.value.innerText.length === 0) {
    codeRef.value.innerText = `${codeDome.toString()}`
  } else {
    codeRef.value.innerText = ''
  }
}
</script>
<style scoped lang="less">
.box {
  background-image: linear-gradient(
    180deg,
    rgb(115 120 129 / 38%) 0%,
    rgb(159 163 170 / 53%) 100%
  );
  border-radius: 4px;
  input {
    padding: 5px;
    margin-right: 10px;
  }
  margin-bottom: 20px;
}
</style>
