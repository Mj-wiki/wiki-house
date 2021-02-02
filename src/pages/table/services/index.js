import request from '@/utils/request';
import { objToSearchUrl } from '@/utils/stringUtil';

//领域下拉框列表
export function requestGetFieldList(values) {
  return request(`/apl/project/fieldList/`);
}
//归一查询项目列表（初始化列表）
export function requestGetList(values) {
  return request(`/apl/project/list/`);
}
//归一查询关键字搜索列表
export function requestGetCheckList(values) {
  return request(`/apl/project/queryConcept/${objToSearchUrl(values)}`);
}
//概念详情页信息接口
export function requestGetConceptInfo(values) {
  return request(`/apl/project/queryConceptInfo/${objToSearchUrl(values)}`);
}

//编辑保存用户
export function requestPostUserSave(values) {
  console.log(values);
  return request(`/apl/knowledge-graph/user-save?uid=${values['uid']}`, {
    method: 'post',
    data: {
      ...values,
    },
  });
}
