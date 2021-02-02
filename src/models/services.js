import request from '@/utils/request';
//登陆状态检测
export const heartbeat = () => {
  return request('/apl/check_login/', {
    method: 'post',
  });
};
