import { requestGetUserList } from '../services';
import { Message } from 'antd';

const initState = {
  dataSource: [],
  total: 0,
  pageSize: 10,
  pageNum: 1,
  search: '',
  editData: {},
};

export default {
  namespace: 'detail',
  state: initState,
  effects: {
    *onInit({ effectTypes }, { all, put, select }) {
      yield put({
        type: 'changeState',
        payload: {
          dataSource: [],
          total: 0,
          date_type: 0,
        },
      });
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
    //     yield put({
    //       type: 'changeState',
    //       payload: {
    //         dataSource: [],
    //         total: 0,
    //       },
    //     });
    //   }
    // },

    *getSearchValues(action, { select }) {
      const { uid } = yield select(state => state.detail);

      return {
        uid,
      };
    },
    *changeDi({ e }, { select, put, call }) {
      yield put({
        type: 'changeState',
        payload: {
          dataSource: [],
          dimension: e,
        },
      });
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
