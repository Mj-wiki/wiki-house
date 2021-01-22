import { numAdd, numSub, numMulti, numDiv } from './mathUtil';
/**
 * 数字转换成带单位的数字，并且四舍五入保留位数
 *  length 小数位数，默认2，两位小数，0为整数
 */
const getNumAndUnit = function(num, length = 2) {
  let k = 10000,
    sizes = ['', '万', '亿', '万亿'],
    i;
  if (num < k) {
    return {
      num,
      unit: '个',
      num1: '',
      unit1: '',
      num2: '',
      unit2: '',
    };
  }
  i = Math.floor(numDiv(Math.log(num), Math.log(k)));
  if (num >= k && num < 100000000) {
    return {
      num: Math.floor(num / 10000),
      unit: sizes[i],
      num1: num % 10000,
      unit1: '个',
      num2: '',
      unit2: '',
    };
  }
  if (num >= 100000000) {
    return {
      num: Math.floor(num / 100000000),
      unit: sizes[i],
      num1: Math.floor((num % 100000000) / 10000),
      unit1: '万',
      num2: (num % 100000000) % 10000,
      unit2: '个',
    };
  }
  // return {
  //   num: numDiv(num, Math.pow(k, i)),
  //   unit: sizes[i],
  // };
};

/**
 * 末尾进位函数，只要末尾不为0，则强制进位
 * length 小数位数，默认0，为整数
 */
const numToFixedWithUp = function(num, length = 0) {
  return numDiv(
    Math.ceil(numMulti(num, Math.pow(10, length))),
    Math.pow(10, length),
  );
};

/**
 * 末尾省去函数, 强制截取位数
 * length 小数位数，默认0，省略小数点后, 为整数
 */
const numToFixedWithoutUp = function(num, length = 0) {
  return numDiv(
    Math.floor(numMulti(num, Math.pow(10, length))),
    Math.pow(10, length),
  );
};

/**
 * 修复toFixed精度问题
 * (0.245).toFixed(2) 结果为0.24
 * length 小数位数
 */
const numToFixedUp = function(num, length = 0) {
  return numDiv(
    Math.round(numMulti(num, Math.pow(10, length))),
    Math.pow(10, length),
  );
};

/**
 * 补零函数
 * length 小数位数
 */
const numAddZero = function(num, length) {
  let numberArr = String(num).split('.'),
    decimal = numberArr[1] || '';
  return (
    (decimal.length < length &&
      `${numberArr[0]}.${new Array(length - decimal.length)
        .fill(0)
        .reduce((a, b) => a + b, decimal)}`) ||
    num
  );
};

/**
 * 分隔符
 * length 分隔长度，默认3
 * symbol 分隔字符标示，默认用,分隔
 */
const numSeparator = function(num, length = 3, symbol = ',') {
  let i = String(num),
    j = i.length > length ? i.length % length : 0,
    reg = new RegExp(`(\\S{${length}})(?=\\S)`, 'g');
  return (
    (j ? `${i.substr(0, j)}${symbol}` : '') +
    i.substr(j).replace(reg, '$1' + symbol)
  );
};

/**
 * 数字格式化
 * length 小数位数
 * format 格式化方式  round四舍五入, floor向下取整, ceil向上取整， 默认向下取整
 * separator 是否有分隔符 默认为false 即不分隔 如果传入对象，length代表几位分隔 symbol代表分隔符号
 * unZeroize 是否补零，默认为false 不补零
 * addUnit 是否添加单位，默认为false 不添加
 */
const numformatHandle = function(
  num,
  {
    length = 0,
    format = 'floor',
    separator = false,
    addZero = false,
    addUnit = false,
  } = {},
) {
  let absNum = Math.abs(num);
  // 是否添加单位
  let unit = '',
    numCache = absNum;
  if (addUnit) {
    let obj = getNumAndUnit(absNum);
    numCache = obj.num;
    unit = obj.unit;
  }
  // 格式化处理
  let obj = {
    floor: numToFixedWithoutUp,
    round: numToFixedUp,
    ceil: numToFixedWithUp,
  };
  let formatNum = obj[format](numCache, length);
  // 将数字转化为字符串，小于6位小数会变成科学技术法，需要用toFixed转换
  let numberString = numToString(formatNum);
  // 分成数组进行分隔符等的添加
  let numberArr = numberString.split('.');
  if (numberArr.length === 1) {
    numberArr.push('');
  }
  let [integer, decimal] = numberArr;
  let numberStr = `${integer}.${decimal}`;
  // 需要分隔符
  if (separator) {
    numberStr = `${numSeparator(
      integer,
      separator.length,
      separator.symbol,
    )}.${decimal}`;
  }
  // 是否补零
  if (addZero) {
    numberStr = numAddZero(numberStr, length);
  }
  // 是否有符号
  if (num < 0) {
    // 添加正负号
    numberStr = `-${numberStr}`;
  }
  return `${numberStr.replace(/\.$/, '')}${unit}`;
};

/**
 * 生成随机整数，
 * max为大，
 * min为小，不传则为0
 */
const numIntRandom = function(max, min = 0) {
  if (!max) {
    return 0;
  }
  return parseInt(Math.random() * numAdd(numSub(max, min), 1, min), 10);
};
/**
 * 根据数字生成字符串，主要是去除科学技术法
 */
const numToString = function(num) {
  let min = num < 0 ? '-' : '',
    absNum = Math.abs(num);
  if (absNum < 0.000001 && absNum !== 0) {
    return `${min}${absNum.toFixed(20)}`.replace(/0+$/, '');
  }
  return String(num);
};

/**
 * 判断是不是数字
 */
const isNumber = val => {
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }
};

export { numIntRandom, numToString, numformatHandle, isNumber, getNumAndUnit };
