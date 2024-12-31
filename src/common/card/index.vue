<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<template>
  <div class="card-content">
    <div v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card-content{
  display: flex;
}
.card-body{
  width: 100%;
  flex: 1;
}
</style>