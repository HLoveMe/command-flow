<template>
  <div>
    <Base64></Base64>
    <OpenSourceUrl></OpenSourceUrl>
    <QR></QR>
    <QRRun2ForSetting></QRRun2ForSetting>
    <LoadFile></LoadFile>
    <RunCommand></RunCommand>
    <GroupCommand></GroupCommand>
    <Timer></Timer>
    <FetchWork></FetchWork>
    <TimerWorkLoopTest></TimerWorkLoopTest>
    <Operation></Operation>
  </div>
</template>
<script setup lang="ts">
import Base from "./components/base.vue";
import Base64 from "./components/Base64.vue";
import OpenSourceUrl from "./components/OpenSourceUrl.vue";
import QR from "./components/QRRun.vue";
import QRRun2ForSetting from './components/QRRun2ForSetting.vue'
import LoadFile from "./components/LoadFile.vue";
import RunCommand from './components/RunCommand.vue'
import GroupCommand from './components/GroupCommand.vue'
import Timer from './components/TimerWork.vue'
import FetchWork from './components/FetchWork.vue'
import TimerWorkLoopTest from './components/TimerWorkLoopTest.vue'
import Operation from './components/Operations/index.vue'
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>