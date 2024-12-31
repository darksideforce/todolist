<script setup lang='ts'>
import { ref, reactive } from 'vue'
type slots = {
  default: any  
}
const slots = defineSlots()
const showheader = Boolean(true)
</script>

<template>
  <div class="relative-layout">
    <template v-if="showheader"></template>
  </div>
</template>

<style  scoped>

</style>