import { history } from 'umi';
import { Login, logout } from '../services/index';
const Model = {
  namespace: 'login',
  state: {
    userName: '',
    passWord: '',
    errorInfo: '',
    email: '',
    isLogin: false,
  },
  effects: {
    *changeState({ key, value }, { put }) {
      yield put({
        type: 'save',
        payload: {
          [key]: value,
        },
      });
    },
    *signIn({ payload }, { put, select, call }) {
      const values = yield select(state => state.login);
      const { passWord, userName } = yield values;
      //密码为空时
      if (!userName) {
        yield put({
          type: 'save',
          payload: {
            errorInfo: 'Username不能为空。',
          },
        });
        return;
      }
      //账号为空时
      if (!passWord) {
        yield put({
          type: 'save',
          payload: {
            errorInfo: 'PassWord不能为空。',
          },
        });
        return;
      }
      const result = yield call(Login, {
        username: userName,
        password: passWord,
      });
      if (result.result === 'success') {
        yield put({
          type: 'save',
          payload: {
            errorInfo: '',
          },
        });
        localStorage.setItem('username', result.data);
        history.replace('/table/homePage');
      } else {
        yield put({
          type: 'save',
          payload: {
            errorInfo: '登录账号或密码错误,请重新登录!',
          },
        });
      }

      // if (result.code === 0) {
      //   yield put({
      //     type: 'save',
      //     payload: {
      //       errorInfo: '',
      //     },
      //   });
      //   history.replace('/table/homePage');
      // } else {
      //   yield put({
      //     type: 'save',
      //     payload: {
      //       errorInfo: result.msg,
      //     },
      //   });
      // }
    },
    *signout({ payload }, { call }) {
      const result = yield call(logout);
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default Model;
