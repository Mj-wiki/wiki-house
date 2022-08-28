import { Login } from '../services';

const initState = {
  dataSource: [],
  total: 0,
  pageSize: 10,
  pageNum: 1,
  search: '',
  sort: '',
  sortValue: '',
};

export default {
  namespace: 'list',
  state: initState,
  effects: {
    *onInit({ effectTypes }, { all, put, select }) {
      yield put({ type: 'userList' });
    },

    *changeList({ key, value }, { select, call, put }) {
      const v = yield put({ type: 'getSearchValues' });
      const { sort } = yield v;
      yield put({
        type: 'changeState',
        payload: {
          [key]: value,
          sort: !value ? '' : key === 'pageNum' ? '' : 'expire_date',
        },
      });

      yield put({ type: 'userList' });
    },
    // *searchList({ value }, { select, call, put }) {
    //   const v = yield put({ type: 'getSearchValues' });
    //   const { sort, length, sortValue } = yield v;

    //   const listQuery = {
    //     search: value,
    //     start: 0,
    //     length,
    //     sort,
    //     sortValue,
    //   };

    //   const data = yield call(requestGetUserList, listQuery);
    //   if (data.code === 0) {
    //     yield put({
    //       type: 'changeState',
    //       payload: {
    //         dataSource: data.data.data,
    //         total: data.data.total,
    //         search: value,
    //         pageNum: 1,
    //       },
    //     });
    //   } else {
    //     yield put({
    //       type: 'changeState',
    //       payload: {
    //         dataSource: [],
    //         total: 0,
    //         search: value,
    //       },
    //     });
    //   }
    // },
    *getSearchValues(action, { select }) {
      const {
        total,
        pageSize,
        pageNum,
        search,
        sort,
        sortValue,
      } = yield select(state => state.list);

      const length = pageSize;
      const start = (pageNum - 1) * length;
      return {
        total,
        pageSize,
        pageNum,
        search,
        sort,
        sortValue,
        start,
        length,
      };
    },

    *login({ values }, { select, put, call }) {
      const data = yield call(Login, values);
    },
  },
  reducers: {
    changeState: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
};
