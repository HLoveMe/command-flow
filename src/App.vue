<template>
  <div>
    <!-- <Base></Base> -->
    <Base64></Base64>
    <OpenSourceUrl></OpenSourceUrl>
    <QR></QR>
    <LoadFile></LoadFile>
  </div>
</template>
<script setup lang="ts">
import Base from "./components/base.vue";
import Base64 from "./components/Base64.vue";
import OpenSourceUrl from "./components/OpenSourceUrl.vue";
import QR from "./components/QRRun.vue";
import LoadFile from "./components/LoadFile.vue";
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
