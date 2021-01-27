import {
  requestGetFieldList,
  //requestGetList,
  requestGetCheckList,
} from '../../services';
import { Message } from 'antd';

const initState = {
  fieldData: [],
  dataSource: -1,
  total: 0,
  pageSize: 10,
  pageNum: 1,
  project_fieldcode: '',
  project_name: '',
};

export default {
  namespace: 'checkAppDetail',
  state: initState,
  effects: {
    *onInit({ effectTypes }, { all, put, call }) {
      try {
        const fieldList = yield call(requestGetFieldList);
        const fieldAll = { id: 0, field_code: '', field_name: '全部领域' };
        if (fieldList.result === 'success') {
          const fieldData = fieldList.data;
          yield put({
            type: 'changeState',
            payload: {
              fieldData: [fieldAll, ...fieldData],
            },
          });
        }
      } catch (error) {
        console.log(error);
        Message.error('接口异常');
      }
    },
    //归一查询搜索列表
    *searchList(search, { select, call, put }) {
      try {
        yield put({
          type: 'changeState',
          payload: {
            project_fieldcode: search.code,
            project_name: search.name,
          },
        });
        const values = yield put({ type: 'getSearchValues' });
        const { project_fieldcode, project_name } = yield values;
        const searchObj = {
          project_fieldcode,
          concept_name: project_name,
          //search: encodeURIComponent(search),
        };

        const data = yield call(requestGetCheckList, searchObj);
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

    *getSearchValues(action, { select }) {
      const {
        dataSource,
        total,
        project_fieldcode,
        project_name,
      } = yield select(state => state.checkAppDetail);
      return {
        dataSource,
        total,
        project_fieldcode,
        project_name,
      };
    },
  },
  reducers: {
    changeState: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
};
