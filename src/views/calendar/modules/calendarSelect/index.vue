<script setup lang='ts'>
import monthCalendar from '../monthCalendar/index.vue'
import { ref, reactive } from 'vue'
defineOptions({
  name: 'calendarSelect'
})

const mission = ref<calendarType.dateMission[]>([
  {
    date: new Date(),
    mission: [
      {
        id: 1,
        missionName: '',
        startTime: new Date(),
        endTime: new Date(),
        status: 1
      }
    ]
  }
])
</script>

<template>
  <div class="calendar-select">
    <monthCalendar :calendar-mission="mission"></monthCalendar>
  </div>
</template>

<style scoped lang="less"></style>