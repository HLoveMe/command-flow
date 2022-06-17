<template>
  <div>
    A
  </div>
</template>
<script setup lang="ts">
import { Context,TimeoutWork } from 'command-flow'

const a = new Context();
const aa = new TimeoutWork(1000)
console.log(a)
debugger
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
