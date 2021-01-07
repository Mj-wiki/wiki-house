import { requestGetConceptInfo } from '../../services';
import { Message } from 'antd';
const initState = {
  dataSource: [],
  total: 0,
  concept_name: '',
  project_id: '',
  project_fieldcode: '',
  project_name: '',
};

export default {
  namespace: 'checkConceptDetail',
  state: initState,
  effects: {
    *onInit({ effectTypes }, { all, put, call }) {
      const values = yield put({ type: 'getSearchValues' });
      const {
        concept_name,
        project_id,
        project_fieldcode,
        project_name,
      } = yield values;
      const searchObj = {
        concept_name,
        project_id,
        project_fieldcode,
        project_name,
      };
    },
    *getSearchValues(action, { select }) {
      const {
        dataSource,
        concept_name,
        project_id,
        project_fieldcode,
        project_name,
      } = yield select(state => state.checkConceptDetail);

      return {
        dataSource,
        concept_name,
        project_id,
        project_fieldcode,
        project_name,
      };
    },
    //归一查询搜索列表
    *searchConceptInfo(search, { select, call, put }) {
      try {
        yield put({
          type: 'changeState',
          payload: {
            concept_name: search.conceptName,
            project_id: search.projectId,
            project_fieldcode: search.code,
            project_name: search.name,
          },
        });
        const values = yield put({ type: 'getSearchValues' });
        const {
          concept_name,
          project_id,
          project_fieldcode,
          project_name,
        } = yield values;

        const searchObj = {
          concept_name,
          project_id,
          project_fieldcode,
          project_name,
          //search: encodeURIComponent(search),
        };

        const data = yield call(requestGetConceptInfo, searchObj);
        console.log(data);
        if (data.result === 'success') {
          yield put({
            type: 'changeState',
            payload: {
              dataSource: data.data,
              total: data.total,
            },
          });
        } else {
          yield put({
            type: 'changeState',
            payload: {
              dataSource: [],
              total: 0,
            },
          });
        }
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  reducers: {
    changeState: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
};
