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

//领域下拉框列表
export function requestGetFieldList(values) {
  return request(`/api/project/fieldList/`);
}
//归一查询项目列表（初始化列表）
export function requestGetList(values) {
  return request(`/api/project/list/`);
}
//归一查询关键字搜索列表
export function requestGetCheckList(values) {
  return request(`/api/project/queryConcept/${objToSearchUrl(values)}`);
}

//添加用户
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
