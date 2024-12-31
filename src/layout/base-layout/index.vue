<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
defineOptions({
  name: 'BaseLayout'
})
// type SlotFn = (props?: Record<string, unknown>) => any;
type slots = {
  default: any,
  header:any,
  slider:any,

}
const slots = defineSlots()
const showHeader = computed(()=> Boolean(slots.header))
const showSlider = computed(()=> Boolean(slots.slider))
</script>

<template>
  <div class="relative-layout">
    <template v-if="showHeader">
      <slot name="header">
      </slot>
    </template>
    <template v-if="showSlider">
      <slot name="slider"></slot>
    </template>
    <main class="content">
      <slot></slot>
    </main>
  </div>
</template>

<style  scoped>
.relative-layout{
  width: 100%;
  height: 100%;
  display: flex;
}
.content{
  display: flex;
  flex: 1;
  padding-left: 10px;
}
</style>