const Tap = {
  namespace: 'TapIndex',
  state: {
    TapIndex: '1',
  },
  effects: {
    *changeTapIndex({}, { put }) {
      yield put({
        type: 'chnageindex',
        payload: {
          TapIndex: '2',
        },
      });
    },
  },
  reducers: {
    chnageindex(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default Tap;
