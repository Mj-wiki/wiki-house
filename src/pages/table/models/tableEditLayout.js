import { requestGetUserDetail } from '../services';
import { Message } from 'antd';
const initState = {
  dataSource: [],
  total: 0,
  pageSize: 10,
  pageNum: 1,
  search: '',
};

export default {
  namespace: 'edit',
  state: initState,
  effects: {
    *onInit({ effectTypes }, { all, put, select }) {},
    *getSearchValues(action, { select }) {
      const { uid, editData, dim } = yield select(state => state.edit);
      const { dimension } = yield select(state => state.detail);
      return {
        dimension,
        uid,
        editData,
      };
    },
    *recordDim({ dim }, { select, put }) {
      yield put({
        type: 'changeState',
        payload: {
          dim: dim,
        },
      });
    },

    // *getEdit({ uid }, { select, put, call }) {
    //   const data = yield call(requestGetUserDetail, { uid });
    //   if (data.code === 0) {
    //     yield put({
    //       type: 'changeState',
    //       payload: {
    //         editData: data.data,
    //         uid: uid,
    //       },
    //     });
    //   }
    //   return data;
    // },
  },
  reducers: {
    changeState: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
};
