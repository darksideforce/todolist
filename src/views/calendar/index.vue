<script setup lang='ts'>
import { ref, reactive } from 'vue'
import calendarSelect from './modules/calendarSelect/index.vue'
</script>

<template>
  <div class="calendar-box">
    <Card class="calendar-box-slider">
        <calendarSelect></calendarSelect>
    </Card>
    <Card class="calendar-box-content">
      
    </Card>
  </div>
</template>

<style scoped lang="less">
.calendar-box {
  width: 100px;
  height: 100%;


  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  &-slider {
    background-color: #fafbfc;
    width: 30%;
    min-width: 300px;
    max-width: 400px;
    border-radius: 40px;
    padding: 30px 0px;
    box-sizing: content-box;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
}
</style>