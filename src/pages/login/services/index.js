import request from '@/utils/request';
//登录
export const Login = data => {
  return request('/apl/login/', {
    method: 'post',
    data,
  });
};

//退出登陆
export const logout = () => {
  return request('/apl/logout', {
    method: 'post',
  });
};
