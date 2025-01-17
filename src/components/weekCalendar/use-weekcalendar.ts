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


function timeProportion(timeList: any[], time: string) {
  let proportion: timePropor[] = []
  for(let i in timeList) {
    let start = dayjs(timeList[i].timeStart)
    let end = dayjs(timeList[i].timeEnd)
    let minute = end.diff(start) / 60000
    console.log(`minute=${minute}`)
    console.log(`fulltime = ${fullTime}`)
    const proportion =    minute / fullTime 
    console.log(proportion)
  }
}
export {
  timeProportion
}