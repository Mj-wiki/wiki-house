import { Reducer } from 'redux';
import { Effect } from 'dva';
import { history } from 'umi';
import { delay } from 'redux-saga';
import { heartbeat } from './services';
import { Message } from 'antd';
const Model = {
  namespace: 'Auth',
  state: {},
  effects: {
    *auth({}, { call }) {
      const data = yield call(heartbeat);
      if (data.result === 'failure') {
        Message.error('账号已失效，请重新登录');
        history.replace('/login');
      }
    },
  },
};
export default Model;
