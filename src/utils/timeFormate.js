// 日期時間格式
export const timeFormate = (timeStamp) => {
    const data = {
        nowTime: '',
        nowDay: '',
        time: ''
    }

    const newdate = new Date(timeStamp);
    const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const year = newdate.getFullYear();
    const month =
      newdate.getMonth() + 1 < 10
        ? "0" + (newdate.getMonth() + 1)
        : newdate.getMonth() + 1;
    const date =
      newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate();
    const hh =
      newdate.getHours() < 10 ? "0" + newdate.getHours() : newdate.getHours();
    const mm =
      newdate.getMinutes() < 10
        ? "0" + newdate.getMinutes()
        : newdate.getMinutes();

    data.nowDay = `${week[newdate.getDay()]} ,${month} 月 ${date} ${year}`;
    data.nowTime = `${hh}：${mm} , GMT+8:00`;
    data.time = `${year}-${month}-${date} ${hh}:${mm}`;

    return data
  }