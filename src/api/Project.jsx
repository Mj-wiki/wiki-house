// import request from '@/utils/request';
import request from './request';
//新增项目
export const CreateProject = data => {
  return request('/api/project/create/', {
    method: 'post',
    data: data,
  });
};
//项目列表
export const GetProjectList = data => {
  return request(`/api/project/list/`, {
    method: 'get',
    params: data,
  });
};

//删除项目
export const deleteProject = data => {
  const { ProjectId, username } = data;
  return request(
    `/api/project/delete/?id=${ProjectId}&update_user=${username}`,
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

export const initEachartsData = data => {
  return request(`/api/chart/`, {
    method: 'get',
  });
};

export const uploadFile = data => {
  return request(`/api/project/upload/`, {
    method: 'post',
    data: data,
  });
};

export const ProjectDetail = data => {
  return request(`/api/project/detail/?id=${data}`, {
    method: 'get',
  });
};

export const Getfield = data => {
  return request(`/api/project/fieldList/`, {
    method: 'get',
  });
};

export const PrijectUpdate = data => {
  return request(`/api/project/update/`, {
    method: 'post',
    data: data,
  });
};
