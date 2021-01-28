import { extend } from 'umi-request';
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url, options) => {
  return {
    url: `${url}`,
    options: {
      ...options,
    },
  };
});

export default request;
