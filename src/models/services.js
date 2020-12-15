import request from '@/utils/request';
//登陆状态检测
export const heartbeat = params => {
  return request('/api/site/check');
};
