const Tap = {
  namespace: 'TapIndex',
  state: {
    TapIndex: '1',
    project_fieldcode: '',
    project_name: '',
    project_id: '',
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
    *changeProjectStates({ params, val }, { put }) {
      yield put({
        type: 'changeProjectState',
        payload: {
          project_fieldcode: val.project_fieldcode,
          project_name: val.project_name,
          project_id: val.project_id,
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
    changeProjectState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default Tap;
