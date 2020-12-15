const getStrLength = function(str) {
  if (str == null) return 0;
  if (typeof str != 'string') {
    str += '';
  }
  // eslint-disable-next-line
  return str.replace(/[^\x00-\xff]/g, '01').length;
};

const subStringMixByLength = function(str, len) {
  // eslint-disable-next-line
  var regexp = /[^\x00-\xff]/g; // 正在表达式匹配双字节
  // 当字符串字节长度小于指定的字节长度时
  if (str.replace(regexp, 'aa').length <= len) {
    return str;
  }
  // 假设指定长度内都是中文
  var m = Math.ceil(len / 2);
  for (var i = m, j = str.length; i < j; i++) {
    // 当截取字符串字节长度满足指定的字节长度
    if (str.substring(0, i).replace(regexp, 'aa').length >= len) {
      return str.substring(0, i);
    }
  }
  return str;
};

const randomString = (length = 8) =>
  Math.random()
    .toString(36)
    .slice(-length);

const objToSearchUrl = obj =>
  Object.keys(obj)
    .reduce(
      (a, b) =>
        `${a}${b}=${![undefined, null].includes(obj[b]) ? obj[b] : ''}&`,
      `?`,
    )
    .replace(/(&)$/, '');

export { randomString, subStringMixByLength, getStrLength, objToSearchUrl };

// export const subStringMixByStartEnd = function(str, start, end){
//     let startIndex = 0, endIndex = str.length,
// 	for (var i = 0, j = str.length; i < j; i++) {
//         let strCache = str.substring(startIndex, i);
// 		if(getStrLength(strCache) >= start){
//             startIndex = i;
//             continue;
//         }
//         if(getStrLength(strCache) >= end){
//             endIndex = i
//         }

// 	}
// 	return str;
// }
