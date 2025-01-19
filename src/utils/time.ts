import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween'
import weekday from 'dayjs/plugin/weekday'
dayjs.extend(duration)
dayjs.extend(isBetween)
dayjs.extend(weekday)
//是否在指定时间内
function isTimeRange(time:any,startTime:any,endTime:any):boolean{
  // const targetTime = dayjs(time);
  // const start = dayjs(startTime);
  // const end = dayjs(endTime);
  return time.isBetween(startTime, endTime);
}

//获取当前时间
function getCurrentDate(time?:any) {
  const currentDateTime = time?dayjs(time):dayjs()
  const year = currentDateTime.year();
  const month = currentDateTime.month() + 1; // 月份从0开始，所以需要加1
  const day = currentDateTime.date();
  const hour = currentDateTime.hour();
  const minute = currentDateTime.minute();
  return { year, month, day, hour, minute };
}
//获取当前的时分秒
function getCurrentDateTime() {
  const currentDateTime = dayjs();
  const formattedDateTime = currentDateTime.format('YYYY-MM-DD HH:mm');
  return formattedDateTime;
}
function getCurrentWeek() {
  const currentDateTime = dayjs();
  const startOfWeek = currentDateTime.startOf('week');
  // const endOfWeek = currentDateTime.endOf('week');
  const week = [];
  for(let i = 0;i<7;i++) {
    const date = startOfWeek.subtract(i, 'day');
    week.push(date.format('YYYY-MM-DD'));
  }
  return week.reverse();
}
//使当前时间+小时
function addHoursToCurrentTime(currentTime:any,hours: number) {
  const newTime = currentTime.add(hours, 'hour');

  return newTime;
}
//计算时间差
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
  calculateHourDifference,
  getCurrentWeek
}