declare namespace calendarType {
  interface dateItemChildRen {
    label: string
    date: string
    active: boolean
    expire: boolean
    isCurrent: boolean,
    isCurrentMonth: boolean
  }
  interface dateItem{
    time: string,
    children: dateItemChildRen[]
  }
  //传入calendar的mission项
  interface dateMission {
    date:Date,
    mission:missionItem []
  }
  interface missionItem {
    id:number,
    missionName:'',
    startTime:Date,
    endTime:Date,
    status:number
  }
}