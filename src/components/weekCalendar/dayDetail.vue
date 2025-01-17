<script setup lang='ts'>
import { ref, reactive } from 'vue'
import {timeProportion} from './use-weekcalendar'
import { getCurrentDate } from '../../utils/time'
defineOptions({
  name:'DayDetail'
})
const dayItemList = reactive([
  {
    timeStart:'2025-01-08 10:00',
    timeEnd:'2025-01-08 12:00',
    detail:'1'
  },
  {
    timeStart:'2025-01-08 14:00',
    timeEnd:'2025-01-08 15:00',
    detail:'2'
  },
])
timeProportion(dayItemList,dayItemList[0].timeStart)
</script>

<template>
  <div class="day-detail-root">
    <div class="day-detail-root-item" v-for="item in dayItemList">
      <!-- <div class="day-detail-root-item-content"></div> -->
      <div class="day-detail-root-item-uncontent"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.day-detail-root{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-item{
    // height: 150px;
    margin-bottom: 10px;
    // border-radius: 10px;
    // background-color: #90eaf0;
    &-uncontent{
      height: 150px;
      border: 1px dashed #0eb665;
      border-width: 2px;
      border-radius: 10px ;
    }
  }
}
</style>