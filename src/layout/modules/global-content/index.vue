<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition mode="out-in" appear>
      <Component :is="Component" class="context"/>
    </Transition>
  </RouterView>
</template>

<style scoped>
.context{
  flex: 1;
}
</style>