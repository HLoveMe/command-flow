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
    <a class="name">QR-create-QRRun2ForSetting</a>
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
        :desc="'--'"
        :expect="'=='"
        :success="result"
      ></RunResult>
      <img ref="qrCodeRef" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  Context,
  StringObject,
  DataObject,
  ControlFlow,
  Base64DecodeWork,
  Base64EnCodeWork,
  LoadFileWork,
  OpenURLWork,
  QRCodeWork,
  NumberObject,
  ArrayObject,
  SetObject,
  ObjectTarget,
  InstructionOTO,
  unpackValue,
  registerWork,
  runCommandFlow,
} from '@/command'
import { computed, onMounted, ref } from 'vue'
import RunGroup from './RunGroup.vue'
import RunResult from './RunResult.vue'
import { Observable } from 'rxjs'
interface WorkStatus {
  content?: any
  work?: any | any[]
  desc?: any
  value?: any
  date?: Date
}
const result = ref<boolean>(true)
const codeRef = ref<HTMLDivElement>({} as any)
const qrCodeRef = ref<HTMLImageElement>({} as any)
const logInfo = ref<Map<string, Array<any>>>(new Map())
const disabled = ref<boolean>(false)

class ShowQR extends InstructionOTO {
  static NAME = 'ShowQRHandler'
  run(input: any): Observable<any> {
    return new Observable((subscriber) => {
      const value = unpackValue(input)
      qrCodeRef.value.src = `${value}`
      subscriber.complete()
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      }
    })
  }
}
const clearLog = () => {
  logInfo.value.clear()
  qrCodeRef.value.src = ''
}

async function codeDome() {}

const reRun = () => {
  logInfo.value.clear()
  startBegin()
}

class Log {
  context = null
  constructor(c: any) {
    this.context = c
  }
  nextLog(log: WorkStatus) {
    const {
      desc,
      value: { _value },
      work,
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
    })
  }
}
const startBegin = async () => {
  registerWork(ShowQR)
  await runCommandFlow({
    initSignal: 'www.baidu.com',
    works: [
      ['QRCodeWork', [{SideLength:400}]],
      ['ShowQRHandler', []],
    ],
    log:Log,
  })
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
