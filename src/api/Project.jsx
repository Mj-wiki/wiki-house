import request from '@/utils/request';
// import request from './request';
import { url } from '../../env';

//新增项目
export const CreateProject = data => {
  return request('/apl/project/create/', {
    method: 'post',
    data: data,
  });
};
//项目列表
export const GetProjectList = data => {
  return request(`/apl/project/list/`, {
    method: 'get',
    params: data,
  });
};

//删除项目
export const deleteProject = data => {
  const { ProjectId, username } = data;
  return request(
    `/apl/project/delete/?id=${ProjectId}&update_user=${username}`,
    {
      method: 'get',
    },
  );
};

export const initHomeStatistics = data => {
  return request(`/apl/statistics/`, {
    method: 'get',
  });
};

export const initEachartsData = data => {
  return request(`/apl/chart/`, {
    method: 'get',
  });
};

export const uploadFile = data => {
  return request(`/apl/project/upload/`, {
    method: 'post',
    data: data,
  });
};

export const ProjectDetail = data => {
  return request(`/apl/project/detail/?id=${data}`, {
    method: 'get',
  });
};

export const Getfield = data => {
  return request(`/apl/project/fieldList/`, {
    method: 'get',
  });
};

export const PrijectUpdate = data => {
  return request(`/apl/project/update/`, {
    method: 'post',
    data: data,
  });
};
// /apl/project/queryConceptInfo/
//http://127.0.0.1:8000/apl/project/selectProjectConceptInfo/?project_id=PJ1dacfe724fc411ebb771fa163eac98f2&concept_name=某些传染病和寄生虫病9740
export const queryConcept = data => {
  return request(`/apl/project/selectProjectConceptInfo/`, {
    method: 'get',
    params: data,
  });
};
export const queryProjectConceptInfo = data => {
  return request(`/apl/project/queryProjectConceptInfo/`, {
    method: 'get',
    params: data,
  });
};

export const copyProjectId = data => {
  return request(`/apl/project/copy/`, {
    method: 'get',
    params: data,
  });
};

export const focusProjectConceptInfo = data => {
  return request(`/apl/project/focusProjectConceptInfo/`, {
    method: 'get',
    params: data,
  });
};
///base/util/UploadFile?contentTypeCode=36

export const uploadImg = data => {
  return request(`${url}/api/base/util/UploadFile`, {
    method: 'post',
    data: data,
  });
};

export const updatePrijectImg = data => {
  return request(`/apl/project/updatePhoto/`, {
    method: 'post',
    data: data,
  });
};
export const PreservationAtlas = data => {
  return request(`/apl/project/updateProjectConcepts/`, {
    method: 'post',
    data: data,
  });
};
///apl/project/updateProjectConcepts/
//http://127.0.0.1:8000/api/project/focusProjectConceptInfo/?project_id=PJ1dacfe724fc411ebb771fa163eac98f2&node_id=8540670
