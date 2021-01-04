import {
  requestGetFieldList,
  requestGetList,
  requestGetCheckList,
} from '../../services';
import { Message } from 'antd';

const initState = {
  fieldData: [],
  dataSource: [],
  total: 0,
  pageSize: 10,
  pageNum: 1,
  search: '',
};

export default {
  namespace: 'checkAppDetail',
  state: initState,
  effects: {
    *onInit({ effectTypes }, { all, put, call }) {
      try {
        const list = yield call(requestGetList);
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
        if (list.result === 'success') {
          yield put({
            type: 'changeState',
            payload: {
              dataSource: list.data,
              total: list.total,
            },
          });
        }
      } catch (error) {
        console.log(error);
        Message.error('接口异常');
      }
    },

    // *userList({ search }, { select, call, put }) {
    //   try {
    //     const values = yield put({ type: 'getSearchValues' });
    //     const { sort, start, length, sortValue } = yield values;

    //     const searchObj = {
    //       start: keywords ? 0 : start,
    //       length,
    //       sort,
    //       sortValue,
    //       search: !search ? null : encodeURIComponent(search),
    //     };

    //     const data = yield call(requestGetUserList, searchObj);
    //     if (data.code === 0) {
    //       yield put({
    //         type: 'changeState',
    //         payload: {
    //           dataSource: data.data.data,
    //           total: data.data.total,
    //           search,
    //         },
    //       });
    //     } else {
    //       yield put({
    //         type: 'changeState',
    //         payload: {
    //           dataSource: [],
    //           total: 0,
    //           search,
    //         },
    //       });
    //     }
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    *getSearchValues(action, { select }) {
      const { dataSource, total } = yield select(state => state.checkAppDetail);
      return {
        dataSource,
        total,
      };
    },

    *sendDate({ date }, { put }) {
      if (date) {
        yield put({
          type: 'changeState',
          payload: {
            dataSource: [],
            expire_date: date,
          },
        });
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
