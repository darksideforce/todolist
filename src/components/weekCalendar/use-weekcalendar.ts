import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration)


const fullHour = 17
const fullTime = fullHour * 60//全天小时数
const startTime = 8
interface missionType {
  top: Number,
  height:Number,
  hour:Number
  detail:string
}
const missionList  = reactive<missionType[]>([])

//遍历数组，计算每个时间段的top值和高度，返回一个可渲染的数组
function timeProportion(timeList: any[], time: any) {
  const dayStart = dayjs(time).hour(startTime)
  for(let i in timeList) {
    let missionStart = dayjs(timeList[i].timeStart)
    let missionEnd = dayjs(timeList[i].timeEnd)
    let hour = missionEnd.diff(missionStart, 'hour') > 1?missionEnd.diff(missionStart, 'hour') -1:0

    const heightProportion =   parseFloat((missionEnd.diff(missionStart) / 60000 / fullTime ).toFixed(4)) * 100
    const topProportion =  parseFloat((missionStart.diff(dayStart) / 60000 / fullTime).toFixed(4)) * 100
    missionList.push({
      top: topProportion,
      hour,
      height: heightProportion,
      detail: timeList[i].detail
    })
  }
  return {missionList ,fullHour}
}
export {
  timeProportion
}