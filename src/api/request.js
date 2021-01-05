import { extend } from 'umi-request';
import { message } from 'antd';
/**
 * 配置request请求时的默认参数
 */
const request = extend({
  // timeout: 10000,
  errorHandler,
});

function errorHandler(error) {
  const codeMap = {
    500: '系统异常',
    404: '请求无效',
    403: '请求403',
  };
  if (error.response) {
    let status = codeMap[error.response.status];
    if (status) {
      message.error(status);
    } else {
      throw error;
    }
  } else {
    throw error;
  }
  //
}
request.interceptors.request.use((url, options) => {
  return {
    url: `${url}`,
    options: {
      ...options,
      interceptors: true,
    },
  };
});
request.interceptors.response.use((response, options) => {
  return response;
});

export default request;
