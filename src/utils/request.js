import { extend } from 'umi-request';
import qs from 'qs';

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url, options) => {
  console.log(options);
  return {
    url: `${url}`,
    options: {
      ...options,
      //data: qs.stringify(options.data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
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
