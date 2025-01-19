import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';

import { getCurrentDate, isTimeRange, calculateHourDifference } from '../../utils/time'
dayjs.extend(duration)

const fullTime = 17 * 60//全天小时数
const startTime = 8
interface timePropor {
  top: Number,
  detail:string
}

function timeProportion(timeList: any[], time: any) {
  let array = []
  const dayStart = dayjs(time).hour(8)
  for(let i in timeList) {
    let missionStart = dayjs(timeList[i].timeStart)
    let missionEnd = dayjs(timeList[i].timeEnd)
    console.log(`diff=${missionEnd.diff(missionStart)}`)
    const heightProportion =   parseFloat((missionEnd.diff(missionStart) / 60000 / fullTime ).toFixed(4)) * 100
    const topProportion =  parseFloat((missionStart.diff(dayStart) / 60000 / fullTime).toFixed(4)) * 100
    console.log(`topProportion=${topProportion}`)
    console.log(`heightProportion=${heightProportion}`)
    array.push({
      top: topProportion,
      height: heightProportion,
      detail: timeList[i].detail
    })
  }
  return array
}
export {
  timeProportion
}