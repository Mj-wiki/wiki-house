import { Reducer } from 'redux';
import { Effect } from 'dva';
import { history } from 'umi';
import { delay } from 'redux-saga';
import { heartbeat } from './services';

const Model = {
  namespace: 'Auth',
  state: {},
  effects: {
    // *auth({ payload }, { select, call }) {
    //   console.log('登录状态验证');
    //   const result = yield call(heartbeat);
    //   if (!result.data) {
    //     history.replace('/login');
    //   }
    // },
  },
};
export default Model;
