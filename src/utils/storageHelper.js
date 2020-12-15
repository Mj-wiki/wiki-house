// var sizeStore = 0;
// if(window.localStorage) {
// // 遍历所有存储
// for(item in window.localStorage) {
// if(window.localStorage.hasOwnProperty(item)) {
// sizeStore += window.localStorage.getItem(item).length;
// }
// }
// }
// console.log((sizeStore / 1024 / 1024).toFixed(2) + 'M');
// 获取时间
const getCurrentTimeStamp = () => {
  return Date.now();
};
/**
 * 存localStorage
 * @param key 键
 * @param value 值
 * @param duration 持续时间（ms）
 */
export const setStorage = (key, value, duration = 0, expiryTime = 0) => {
  if (!value || !key) return false;
  let data = {
    value,
    expiryTime:
      expiryTime ||
      (!duration || isNaN(duration)
        ? 0
        : getCurrentTimeStamp() + parseInt(duration)),
  };
  localStorage[key] = JSON.stringify(data);
  return true;
};

/**
 *  取localStorage中的所有对象
 * @param key 键
 * @returns 存入localstorage的对象
 *    1.若set时有duration，则超出这个时间返回null
 *    2.返回为存入的value+时间
 */
export const getStorageAll = key => {
  if (!key) return null;
  let data = localStorage[key],
    now = getCurrentTimeStamp(),
    obj;
  if (!data || data === 'null') return null;
  try {
    obj = JSON.parse(data);
  } catch (e) {
    return null;
  }
  if (obj.expiryTime === 0 || obj.expiryTime > now) {
    return obj;
  }
  return null;
};

/**
 *  取localStorage
 * @param key 键
 * @returns value 存入的value
 *  注：若set时有duration，则超出这个时间返回null
 */
export const getStorage = key => {
  if (!key) return null;
  let data = getStorageAll(key);
  if (!data || data === 'null') return null;
  return getStorageAll(key).value;
};

/**
 * 删除 localStorage中某个键
 * @param key 键
 */
export const removeStorage = key => {
  if (!key) return false;
  localStorage.removeItem(key);
  return true;
};
