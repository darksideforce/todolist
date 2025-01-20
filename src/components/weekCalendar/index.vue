<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import DayDetail from './dayDetail.vue';
import { getCurrentWeek } from '../../utils/time';
defineOptions({
  name:'WeekCalendar'
})
const dayList = reactive([
  {
    day: 'Mon',
    week: '01',
    label:'01'
  },
  {
    day: 'Tue',
    week: '02',
    label:'02'
  },
  {
    day: 'Wed',
    week: '03',
    label:'03'
  },
  {
    day: 'Thu',
    week: '04',
    label:'04'
  },
  {
    day: 'Fri',
    week: '05',
    label:'05'
  },
  {
    day: 'Sat',
    week: '06',
    label:'06'
  },
  {
    day: 'Sun',
    week: '07',
    label:'07'
  }
])
onMounted(()=>{
  const week = getCurrentWeek()
  console.log(week)
  dayList.forEach((item,index)=>{
    item.week = week[index].date
    item.label =  week[index].label > 10? (week[index].label).toString() :  `0${week[index].label}`
  })
  console.log(dayList)
})
</script>

<template>
  <div class="calendar-body">
    <div class="calendar-body-title">
      <span class="calendar-body-title-zone">GMT-8</span>
      <div v-for="item in dayList" class="calendar-body-title-time">
        <span>{{ item.day }}</span>
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="calendar-body-content">
      <div class="calendar-body-content-slider">
        <span class="calendar-body-content-slider-time">8:00</span>
        <span class="calendar-body-content-slider-time">9:00</span>
        <span class="calendar-body-content-slider-time">10:00</span>
        <span class="calendar-body-content-slider-time">11:00</span>
        <span class="calendar-body-content-slider-time">12:00</span>
        <span class="calendar-body-content-slider-time">13:00</span>
        <span class="calendar-body-content-slider-time">14:00</span>
        <span class="calendar-body-content-slider-time">15:00</span>
        <span class="calendar-body-content-slider-time">16:00</span>
        <span class="calendar-body-content-slider-time">17:00</span>
        <span class="calendar-body-content-slider-time">18:00</span>
        <span class="calendar-body-content-slider-time">19:00</span>
        <span class="calendar-body-content-slider-time">20:00</span>
        <span class="calendar-body-content-slider-time">21:00</span>
        <span class="calendar-body-content-slider-time">22:00</span>
        <span class="calendar-body-content-slider-time">23:00</span>
        <span class="calendar-body-content-slider-time">24:00</span>
      </div>
      <div class="calendar-body-content-day" v-for="item in dayList" :key="item.label">
        <DayDetail  :currentDate="item.week" />
      </div>
    </div>
    
  </div>
</template>

<style lang="less" scoped>
.calendar-body{
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  &-title{
    display: grid;
    grid-template-columns: 100px repeat(7,1fr);
    column-gap: 10px;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    span{
      text-align: left;
      color: #1d1d1d;
      font-weight: bold;
      padding: 0px 10px;
      line-height: 40px;

    }
    .zone{
      width: 100px;
    }
    &-time{
      background-color: #f2f3f5;
      border-radius: 10px;
    }
  }
  &-content{
    margin-top: 10px;
    display: grid;
    grid-template-columns: 100px repeat(7,1fr);
    column-gap: 10px;
    width: 100%;
    flex: 1;
    justify-content: space-between;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none; // 隐藏滚动条
    }
    &-slider{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-time{
        height: 150px;
        width: 100%;
        padding: 0px 10px;
        vertical-align: top;
        margin-bottom: 10px;
      }
    }
    &-day{
      
    }
  }
}
</style>