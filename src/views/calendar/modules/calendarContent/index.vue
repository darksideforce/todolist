<script setup lang='ts'>
import { ref, reactive } from 'vue'
import WeekCalendar from '../../../../components/weekCalendar/index.vue'
defineOptions({
  name:'CalendarContent'
})

</script>



<template>
  <div class="calendar-body">
    <WeekCalendar></WeekCalendar>
  </div>
</template>

<style scoped lang="less">
.calendar-body {
  height: 100%;
  width: 100%;
  padding: 0px 10px;
}
</style>