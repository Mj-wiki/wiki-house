import request from '@/utils/request';
// import request from './request';
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
// /api/project/queryConceptInfo/
//http://127.0.0.1:8000/api/project/selectProjectConceptInfo/?project_id=PJ1dacfe724fc411ebb771fa163eac98f2&concept_name=某些传染病和寄生虫病9740
export const queryConcept = data => {
  return request(`/api/project/selectProjectConceptInfo/`, {
    method: 'get',
    params: data,
  });
};
export const queryProjectConceptInfo = data => {
  return request(`/api/project/queryProjectConceptInfo/`, {
    method: 'get',
    params: data,
  });
};

export const copyProjectId = data => {
  return request(`/api/project/copy/`, {
    method: 'get',
    params: data,
  });
};

export const focusProjectConceptInfo = data => {
  return request(`/api/project/focusProjectConceptInfo/`, {
    method: 'get',
    params: data,
  });
};
///base/util/UploadFile?contentTypeCode=36

export const uploadImg = data => {
  return request(`/apc/api/base/util/UploadFile`, {
    method: 'post',
    data: data,
  });
};

export const updatePrijectImg = data => {
  return request(`/api/project/updatePhoto/`, {
    method: 'post',
    data: data,
  });
};
//http://127.0.0.1:8000/api/project/focusProjectConceptInfo/?project_id=PJ1dacfe724fc411ebb771fa163eac98f2&node_id=8540670
