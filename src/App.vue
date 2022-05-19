<template>
  <div>
    <!-- <Base></Base> -->
    <Base64></Base64>
    <OpenSourceUrl></OpenSourceUrl>
    <QR></QR>
    <LoadFile></LoadFile>
    <RunCommand></RunCommand>
    <GroupCommand></GroupCommand>
    <Timer></Timer>
  </div>
</template>
<script setup lang="ts">
import Base from "./components/base.vue";
import Base64 from "./components/Base64.vue";
import OpenSourceUrl from "./components/OpenSourceUrl.vue";
import QR from "./components/QRRun.vue";
import LoadFile from "./components/LoadFile.vue";
import RunCommand from './components/RunCommand.vue'
import GroupCommand from './components/GroupCommand.vue'
import Timer from './components/TimerWork.vue'
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
