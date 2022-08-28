import { extend } from 'umi-request';
import qs from 'qs';
import { loadingPublisher } from '../components/Loading/Loading';
/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
});
// /apl/project/upload/
request.interceptors.request.use((url, options) => {
  if (
    url &&
    (url.indexOf('apl/chart') > -1 ||
      url.indexOf('apl/statistics') > -1 ||
      url.indexOf('apl/project/copy/') > -1 ||
      url.indexOf('apl/project/upload/') > -1)
  ) {
    return {
      url: `${url}`,
      options: {
        ...options,
      },
    };
  } else {
    loadingPublisher.add();
    return {
      url: `${url}`,
      options: {
        ...options,
      },
    };
  }
});
request.interceptors.response.use(res => {
  if (
    res &&
    res.url &&
    (res.url.indexOf('apl/chart') > -1 ||
      res.url.indexOf('apl/statistics') > -1 ||
      res.url.indexOf('apl/project/copy/') > -1 ||
      res.url.indexOf('apl/project/upload/') > -1)
  ) {
    return res;
  } else {
    loadingPublisher.sub();
    return res;
  }
});
export default request;
