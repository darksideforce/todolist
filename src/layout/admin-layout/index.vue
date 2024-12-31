<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
import BaseLayout from '../base-layout/index.vue'
import GlobalSlider from '../modules/global-slider/index.vue'
import GlobalContent from '../modules/global-content/index.vue'
defineOptions({
  name: 'AdminLayout'
})

</script>

<template>
  <BaseLayout>
    <template #header>
      <header>
      </header>
    </template>
    <template #slider>
      <GlobalSlider />
    </template>
      <GlobalContent />
  </BaseLayout>
</template>

<style scoped ></style>