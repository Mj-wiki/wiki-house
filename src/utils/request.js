import { extend } from 'umi-request';
import qs from 'qs';
import { loadingPublisher } from '../components/Loading/Loading';
/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url, options) => {
  if (url) {
    loadingPublisher.add();
  }
  return {
    url: `${url}`,
    options: {
      ...options,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
});

request.interceptors.response.use(res => {
  if (res && res.url) {
    loadingPublisher.sub();
  }
  return res;
});

// request.use(async (ctx, next) => {
//   await next();
//   const { res } = ctx;
//   if (res.code !== 0) {
//     // 错误公共部分
//     console.log(res.msg)
//   }
// })

export default request;
