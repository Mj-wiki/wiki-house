import request from '@/utils/request';
import { objToSearchUrl } from '@/utils/stringUtil';
//登录
export const Login = data => {
  console.log(data);
  request('/api/site/login', {
    method: 'post',
    data,
  });
};

//列表删除
export function requestGetUserDelete(values) {
  return request(`/api/knowledge-graph/user-delete${objToSearchUrl(values)}`);
}
//用户列表
export function requestGetUserList(values) {
  return request(`/api/knowledge-graph/user-list${objToSearchUrl(values)}`);
}
//用户详情
export function requestGetUserDetail(values) {
  return request(`/api/knowledge-graph/user-detail${objToSearchUrl(values)}`);
}

//添加用户(category,brand选一个)
export function requestPostUserAdd(values) {
  console.log(values);
  return request(`/api/knowledge-graph/user-save`, {
    method: 'post',
    data: {
      ...values,
    },
  });
}
//编辑保存用户
export function requestPostUserSave(values) {
  console.log(values);
  return request(`/api/knowledge-graph/user-save?uid=${values['uid']}`, {
    method: 'post',
    data: {
      ...values,
    },
  });
}
