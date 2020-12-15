import {
  requestGetUserDelete,
  requestGetUserList,
  //requestGetUserStatus,
  //requestGetLoginLogs,
  //requestGetUserInfo,
  Login,
} from '../services';

const initState = {
  dataSource: [],
  total: 0,
  pageSize: 10,
  pageNum: 1,
  search: '',
  sort: '',
  sortValue: '',
  uid: 1,
  name: '',
  email: '',
  status: '1',
  password: 123456,
  login_count: 10,
  expire_date: [],
  date_type: 1,
  dimension: 1,
  industry: 1,
  category: 1,
  brand: [1, 2, 3],
  tactics: {},
  logObject: {},
  userName: '',
};

export default {
  namespace: 'list',
  state: initState,
  effects: {
    *onInit({ effectTypes }, { all, put, select }) {
      yield put({ type: 'userList' });
    },
    // *userInfo({}, { select, call, put }) {
    //   const data = yield call(requestGetUserInfo);
    //   if (data.code === 0) {
    //     yield put({
    //       type: 'changeState',
    //       payload: {
    //         userName: data.data,
    //       },
    //     });
    //   }
    // },
    *userList({}, { select, call, put }) {
      const values = yield put({ type: 'getSearchValues' });
      const { sort, start, length, sortValue, pageNum, search } = yield values;
      const listQuery = {
        search,
        start,
        length,
        sort,
        sortValue,
      };

      const data = yield call(requestGetUserList, listQuery);
      if (data.code === 0) {
        yield put({
          type: 'changeState',
          payload: {
            dataSource: data.data.data,
            total: data.data.total,
            search,
          },
        });
      } else {
        yield put({
          type: 'changeState',
          payload: {
            dataSource: [],
            total: 0,
            search,
          },
        });
      }
      return data;
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
    *searchList({ value }, { select, call, put }) {
      const v = yield put({ type: 'getSearchValues' });
      const { sort, length, sortValue } = yield v;

      const listQuery = {
        search: value,
        start: 0,
        length,
        sort,
        sortValue,
      };

      const data = yield call(requestGetUserList, listQuery);
      if (data.code === 0) {
        yield put({
          type: 'changeState',
          payload: {
            dataSource: data.data.data,
            total: data.data.total,
            search: value,
            pageNum: 1,
          },
        });
      } else {
        yield put({
          type: 'changeState',
          payload: {
            dataSource: [],
            total: 0,
            search: value,
          },
        });
      }
    },
    *getSearchValues(action, { select }) {
      const {
        total,
        pageSize,
        pageNum,
        search,
        sort,
        sortValue,
        uid,
        name,
        email,
        password,
        login_count,
        expire_date,
        date_type,
        dimension,
        industry,
        category,
        brand,
        tactics,
        status,
        logObject,
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
        uid,
        name,
        email,
        password,
        login_count,
        expire_date,
        date_type,
        dimension,
        industry,
        category,
        brand,
        tactics,
        status,
        logObject,
      };
    },
    *userDelete({ values }, { select, put, call }) {
      yield call(requestGetUserDelete, values);
      yield put({ type: 'userList' });
    },
    *login({ values }, { select, put, call }) {
      const data = yield call(Login, values);
    },
    // *userLoginLogs({ values }, { select, put, call }) {
    //   const data = yield call(requestGetLoginLogs, values);
    //   if (data.code === 0) {
    //     yield put({
    //       type: 'changeState',
    //       payload: {
    //         logObject: data.data,
    //       },
    //     });
    //   }
    // },
    // *userStaus({ values }, { select, put, call }) {
    //   const data = yield call(requestGetUserStatus, values);
    // },
  },
  reducers: {
    changeState: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
};
