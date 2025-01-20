<script setup lang='ts'>
import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import { timeProportion } from './use-weekcalendar'
defineOptions({
  name: 'DayDetail'
})
interface Props {
  dayItemList?: any[]
  currentDate?: string
}
const props = defineProps<Props>()
//每日的事务
let dayItemList = reactive([
  {
    timeStart: dayjs(props.currentDate).format('YYYY-MM-DD 08:00'),
    timeEnd: dayjs(props.currentDate).format('YYYY-MM-DD 10:00'),
    detail: '1'
  },
  {
    timeStart: dayjs(props.currentDate).format('YYYY-MM-DD 10:00'),
    timeEnd: dayjs(props.currentDate).format('YYYY-MM-DD 20:00'),
    detail: '2'
  },
])
const { missionList ,fullHour} = timeProportion(dayItemList, props.currentDate)
const boxClass = (item: any) => {

  return {
    height: `calc(${item.height}% - 10px)`,
    top: item.top + '%',
  }
}
</script>

<template>
  <div class="day-detail-root">
    <div class="day-detail-root-uncontent" v-for="items in fullHour"></div>
    <div class="day-detail-root-item" v-for="item in missionList" :style="boxClass(item)">
    </div>
  </div>
</template>

<style scoped lang="less">
.day-detail-root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;
  height: 100%;
  &-uncontent{
      height: 150px;
      border-width: 2px;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    &-uncontent:hover{
      height: 150px;
      border: 1px dashed #0eb665;
      border-width: 2px;
      border-radius: 10px;
      margin-bottom: 10px;
    }
  &-item {
    // height: 150px;
    background-color: red;
    border-radius: 10px;
    width: 100%;
    position: absolute;
    z-index: 10;
  }
}
</style>