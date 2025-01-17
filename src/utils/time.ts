import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(duration)
dayjs.extend(isBetween)

function isTimeRange(time:any,startTime:any,endTime:any):boolean{

  // const targetTime = dayjs(time);
  // const start = dayjs(startTime);
  // const end = dayjs(endTime);
  return time.isBetween(startTime, endTime);
}

function getCurrentDate(time?:any) {
  const currentDateTime = time?dayjs(time):dayjs()
  console.log(`cuurntTime:${currentDateTime}`)
  const year = currentDateTime.year();
  const month = currentDateTime.month() + 1; // 月份从0开始，所以需要加1
  const day = currentDateTime.date();
  const hour = currentDateTime.hour();
  const minute = currentDateTime.minute();
  return { year, month, day, hour, minute };
}
function getCurrentDateTime() {
  const currentDateTime = dayjs();
  const formattedDateTime = currentDateTime.format('YYYY-MM-DD HH:mm');
  return formattedDateTime;
}
function addHoursToCurrentTime(currentTime:any,hours: number) {
  const newTime = currentTime.add(hours, 'hour');

  return newTime;
}
function calculateHourDifference(startTime: any, endTime: any) {
  const dt1 = dayjs(startTime);
  const dt2 = dayjs(endTime);
  const duration = dt2.diff(dt1)
  const diff = dayjs.duration(duration)
  return diff.hours()
}
export {
  getCurrentDate,
  getCurrentDateTime,
  isTimeRange,
  addHoursToCurrentTime,
  calculateHourDifference
}