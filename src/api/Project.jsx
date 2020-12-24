import request from '@/utils/request';
import axios from './request';
//新增项目
export const CreateProject = data => {
  return request('/api/project/create/', {
    method: 'post',
    data,
  });
};
//项目列表
export const GetProjectList = data => {
  const { projectFieldcode, projectName } = data;
  return request(
    `/api/project/list/?projectFieldcode=${projectFieldcode}&projectName=${projectName}`,
    {
      method: 'get',
    },
  );
};

//删除项目
export const deleteProject = data => {
  const { ProjectId, userName } = data;
  return request(
    `/api/project/delete/?id=${ProjectId}&update_user=${userName}`,
    {
      method: 'get',
    },
  );
};

export const initHomeStatistics = data => {
  return request(`/api/statistics/`, {
    method: 'get',
  });
};
// /api/project/delete/?id=1&update_user=kangjun  /api/statistics/
// http://127.0.0.1:8000/api/project/list/?projectFieldcode=kangjun&projectName=kangjun
