import { ref, reactive, onMounted } from 'vue'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
// interface filetMissionList = {
//   [key:string]:
// }
let selectDay = ref('')
const generateYear = (date:Date) => {
  const year = dayjs(date).year()
  const month = dayjs(date).month() + 1
  selectDay.value = `${year}-${month}-01`
}
const generateMonthsList = function(dateParams:Date,missionList:calendarType.dateMission[]):calendarType.dateItem[]{
  generateYear(dateParams)
  const weekDay = dayjs(selectDay.value).day() === 0 ? 6 : dayjs(selectDay.value).day() - 1
  const firstDay = dayjs(selectDay.value).subtract(weekDay, 'day')
  const dayList: calendarType.dateItem[] = [];
  // 遍历6周
  for (let i = 0; i < 6; i++) {
    const children: calendarType.dateItemChildRen[] = []
    for (let time = 0; time < 7; time++) {
      let day = dayjs(firstDay).add(i * 7 + time, 'day')
      const date = day.format('YYYY-MM-DD')
      children.push({
        label: day.format('D'),
        date,
        isCurrent: date === dayjs().format('YYYY-MM-DD'),
        expire: false,
        active: false,
        isCurrentMonth: day.month() === dayjs(dateParams).month(),
      })
    }
    dayList.push({
      time: dayjs(firstDay).add(i * 7, 'day').format('YYYY-MM-DD'),
      children
    })
  }
  return dayList
}
//先把数组处理成需要的结构，再进行返回，这样只需要操作一次数组
const operationDate = function(date:calendarType.dateItem[]){
  let map = new Map()
  for(let i in date){
    
  }
}
export {
  generateMonthsList,
  operationDate
}