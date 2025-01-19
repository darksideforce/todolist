<script setup lang='ts'>
import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import { timeProportion } from './use-weekcalendar'
import { getCurrentDate } from '../../utils/time'
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
    timeStart: dayjs(props.currentDate).format('YYYY-MM-DD 14:00'),
    timeEnd: dayjs(props.currentDate).format('YYYY-MM-DD 18:00'),
    detail: '2'
  },
])
const list = timeProportion(dayItemList, props.currentDate)
const boxClass = (item: any) => {
  console.log(`top=${item.top}`)
  console.log(`height=${item.height}`)
  return {
    height: item.height + '%',
    top: item.top + '%',
  }
}
</script>

<template>
  <div class="day-detail-root">
    <div class="day-detail-root-item" v-for="item in list" :style="boxClass(item)">
      <!-- <div class="day-detail-root-item-content"></div> -->
      <!-- <div class="day-detail-root-item-uncontent">
      </div> -->
      <!-- <div class="day-detail-root-item-content" :></div> -->
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
  &-item {
    // height: 150px;
    background-color: red;
      border-radius: 10px;
      width: 100%;
      position: absolute;
    &-uncontent {
      height: 150px;
      border: 1px dashed #0eb665;
      border-width: 2px;
      border-radius: 10px;
    }

    &-content {
      
    }

  }
}
</style>