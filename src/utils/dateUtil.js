/**
 * yyyy-MM-dd HH:mm:ss
 * 转化时间对象为特定格式时间
 * @returns {string}
 */
const dateHandle = (date, fmt) => {
  let fmtData = fmt || 'yyyy/MM/dd HH:mm:ss';
  let obj = {
    y: date.getFullYear(), // 年份，注意必须用getFullYear
    M: date.getMonth() + 1, // 月份，注意是从0-11
    d: date.getDate(), // 日期
    w: date.getDay(), // 星期
    H: date.getHours(), // 24小时制
    h: date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 12小时制
    m: date.getMinutes(), // 分钟
    s: date.getSeconds(), // 秒
    S: date.getMilliseconds(), // 毫秒
  };
  let week = ['日', '一', '二', '三', '四', '五', '六'];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      fmtData = fmtData.replace(new RegExp(i + '+', 'g'), wfy => {
        let val = obj[i] + '';
        if (i === 'w') return (wfy.length > 2 ? '星期' : '周') + week[val];
        for (let j = 0, len = val.length; j < wfy.length - len; j++)
          val = '0' + val;
        return wfy.length === 1 ? val : val.substring(val.length - wfy.length);
      });
    }
  }
  return fmtData;
};

/**
 * yyyy-MM-dd HH:mm:ss
 * 转化时间戳为特定格式时间
 * @returns {string}
 */
const dateNumberHandle = (dateNumber, fmt) => {
  let date = new Date(dateNumber);
  return dateHandle(date, fmt);
};

/**
 * yyyy-MM-dd HH:mm:ss
 * 转化一种时间格式到特定格式时间
 */
const dateStringHandle = (dateString, fmt) => {
  let date = new Date(dateString);
  return dateHandle(date, fmt);
};

/**
 * 根据指定间隔计算时间
 * y年, q季, M月，w周，d天，h小时，m分钟，s秒，S毫秒
 */

const getDateFromGapFunc = {
  y: (number, date) => {
    let month = date.getMonth();
    let day = date.getDate();
    date.setFullYear(date.getFullYear() + number, 1, 1);
    date.setMonth(month, 1);
    date.setDate(day);
  },
  q: (number, date) => {
    // TODO 此处中转极有问题，但是没有更好的办法，以后有待修改
    let day = date.getDate();
    date.setMonth(date.getMonth() + number * 3 + 1, 1);
    let maxMonthDay = new Date(Date.parse(date) - 1000 * 60 * 60 * 12);
    // date.setFullYear(maxMonthDay.getFullYear(), 1, 1);
    date.setMonth(maxMonthDay.getMonth(), 1);
    date.setDate(Math.min(maxMonthDay.getDate(), day));
  },
  M: (number, date) => {
    // TODO 此处中转极有问题，但是没有更好的办法，以后有待修改
    let day = date.getDate();
    date.setMonth(date.getMonth() + number + 1, 1);
    let maxMonthDay = new Date(Date.parse(date) - 1000 * 60 * 60 * 12);
    // console.log(maxMonthDay.toString())
    date.setFullYear(maxMonthDay.getFullYear(), 1, 1);
    date.setMonth(maxMonthDay.getMonth(), 1);
    date.setDate(Math.min(maxMonthDay.getDate(), day));
  },
  w: (number, date) => {
    date.setDate(date.getDate() + number * 7);
  },
  d: (number, date) => {
    date.setDate(date.getDate() + number);
  },
  h: (number, date) => {
    date.setHours(date.getHours() + number);
  },
  m: (number, date) => {
    date.setMinutes(date.getMinutes() + number);
  },
  s: (number, date) => {
    date.setSeconds(date.getSeconds() + number);
  },
  S: (number, date) => {
    date.setMilliseconds(date.getMilliseconds() + number);
  },
};

const getDateFromGap = (date, number, type) => {
  let newDate = new Date(date.toString());
  getDateFromGapFunc[type](number, newDate);
  return newDate;
};

/**
 * 计算两个时间的时间差
 */
const dateGapCalculate = (dateStringStart, dateStringEnd) => {
  let start = new Date(dateStringStart);
  let end = new Date(dateStringEnd);
  return start - end;
};

/**
 * 传入字符串时间返回年月日
 */
const dateStringSplit = dateString => {
  let date = new Date(dateString);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

export {
  dateHandle,
  dateNumberHandle,
  dateStringHandle,
  getDateFromGap,
  dateGapCalculate,
  dateStringSplit,
};
