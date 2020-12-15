/**
 * 设置cookie
 */
export const setCookie = (key, value, domain, path = '/', time = false) => {
  if (!key) return false;
  let data = {
    value,
    domain,
    path,
    time,
  };
  let expires = 'Fri, 31 Dec 9999 23:59:59 GMT';
  if (time && time > 0) {
    let date = new Date();
    date.setTime(date.getTime() + time);
    expires = date;
  }
  document.cookie = `${key}=${JSON.stringify(
    data,
  )}; expires=${expires}; domain=${domain}; path=${path}`;
  return true;
};

/**
 * 获取某个cookie
 */
export const getCookie = key => {
  let reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)'),
    arr = document.cookie.match(reg),
    obj;
  if (arr) {
    try {
      obj = arr[2];
    } catch (e) {
      return null;
    }
    return obj;
  }
  return null;
};

/**
 * 删除某个cookie
 */
export const removeCookie = (key, domain, path = '/', time = false) => {
  if (!key) return false;
  document.cookie = `${key}=0; max-age=0; domain=${domain}; path=${path}`;
  return true;
};
