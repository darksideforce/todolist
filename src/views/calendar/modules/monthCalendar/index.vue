<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { generateMonthsList } from './utils';
import dayjs from 'dayjs';
import { computed } from 'vue';
import { watch } from 'vue';
import { it } from 'element-plus/es/locale';

defineOptions({
  name: 'MonthCalendar'
})
interface Props {
  calendarMission?: calendarType.dateMission[] | any
}
// const Props = defineProps<Props>()
const Props = withDefaults(
  defineProps<Props>(),
  {
    calendarMission: []
  }
)
const currentDate = ref(new Date())
let monthDataList = ref<calendarType.dateItem[]>([])
const getMonth = computed(() => {
  return dayjs(currentDate.value).month() + 1
})
const getYear = computed(() => {
  return dayjs(currentDate.value).year()
})
onMounted(() => {
  monthDataList.value = generateMonthsList(currentDate.value, Props.calendarMission)
})
watch(currentDate, () => {
  monthDataList.value = generateMonthsList(currentDate.value, Props.calendarMission)
})
const labelItemClassName = computed(() => (item: any) => {
  let className = ''
  className += item.isCurrentMonth ? 'currrent-month ' : 'nocurrent-month '
  className += item.isCurrent ? ' current-day' : ' nocurrent-day'
  return className
})
//初始化时候获取当前月份
const handlePre = function () {
  const previousMonth = dayjs(currentDate.value).subtract(1, 'month');
  currentDate.value = previousMonth.toDate();
}
const handleNext = function () {
  const nextMonth = dayjs(currentDate.value).add(1, 'month');
  currentDate.value = nextMonth.toDate();
}
</script>

<template>
  <div class="calendar-select">
    <div class="calendar-select-header">
      <div class="calendar-select-header-left">
        <span>{{ getMonth }}</span>
        <span>-</span>
        <span>{{ getYear }}</span>
      </div>
      <div class="calendar-select-header-right">
        <ButtonIcon name="button-right" size="20px" :plain="false" @click="handlePre"></ButtonIcon>
        <ButtonIcon name="button-left" size="20px" :plain="false" @click="handleNext"></ButtonIcon>
      </div>
    </div>
    <div class="calendar-select-body">
      <div class="calendar-body">
        <div class="calendar-body-header">
          <p>M</p>
          <p>T</p>
          <p>W</p>
          <p>T</p>
          <p>F</p>
          <p>S</p>
          <p>S</p>
        </div>
        <div class="calendar-body-loop">
          <div class="calendar-body-loop-item" v-for="(item, index) in monthDataList" :key="index">
            <div class="calendar-body-loop-item-date" v-for="(items, indexs) in item.children" :key="indexs">
              <p :class="labelItemClassName(items)">
                {{ items.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">
.calendar-select {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &-header {
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 10px 20px;
    border-bottom: 1px solid #e5e5e5;

    &-left {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      span {
        font-size: 20px;
        font-weight: bold;
        margin-right: 5px;
      }
    }

    &-right {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    // height: 00px;
    padding: 0px 0px;

    p {
      width: 30px;
      height: 30px;
    }

    &-header {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
}

.calendar-body {
  display: flex;
  flex-direction: column;
  padding: 10px 0px;

  p {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
  }

  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  &-loop {
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    border-bottom: 1px solid #e5e5e5;

    &-item {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 40px;
      margin-bottom: 10px;

      &-date {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;

        .nocurrent-month {
          color: #e5e5e5;
        }

        .current-day {
          background-color: #1d1d1d;
          border-radius: 50%;
          color: #fafbfc;
        }
      }
    }
  }
}
</style>