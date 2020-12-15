/**
 * 随机从一个数组中取出部分元素
 * @param {*} arr 数组
 * @param {*} rank 取出数组元素与数组长度的比例，默认为1
 * @param {*} count 取出数量，设置之后覆盖rank，默认为null
 * @param {*} initArr 累积数组，将筛选后的元素放入其中，计算长度时会考虑在内，即数组补足到某一数量的功能
 */
export function arrRandom(arr, rank = 1, count = null, initArr = []) {
  if (!arr || arr.length === 0) {
    return [...initArr];
  }
  let length = Math.floor(arr.length * rank);
  if (count) {
    length = count;
  }
  let arrCache = [...arr];
  let result = [...initArr];
  if ([...arrCache, ...result].length <= length) {
    return [...arrCache, ...result];
  }
  while (true) {
    if (result.length >= length) {
      break;
    }
    let index = Math.floor(Math.random() * arrCache.length);
    let item = arrCache.splice(index, 1)[0];
    result.push(item);
  }
  return result;
}

/**
 * 数组去重
 */
export function arrDeDuplication(arr) {
  return [...new Set(arr)];
}
