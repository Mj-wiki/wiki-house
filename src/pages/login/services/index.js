import request from '@/utils/request';
//登录
export const Login = data => {
  return request('/api/login/', {
    method: 'post',
    data,
  });
};

//退出登陆
export const logout = () => {
  return request('/api/logout', {
    method: 'post',
  });
};
