import { requestGetConceptInfo } from '../../services';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const initState = {
  dataSource: [],
  total: 0,
  node_id: '',
  concept_name: '',
  project_id: '',
  project_fieldcode: '',
  project_name: '',
  endFocusStatus: 0,
};

export default {
  namespace: 'checkConceptDetail',
  state: initState,
  effects: {
    *onInit(effectTypes, { all, put, call }) {
      const { search } = effectTypes;
      if (search) {
        yield put({ type: 'searchConceptInfo', search });
      }
    },
    *getSearchValues(action, { select }) {
      const {
        dataSource,
        node_id,
        concept_name,
        project_id,
        project_fieldcode,
        project_name,
        endFocusStatus,
      } = yield select(state => state.checkConceptDetail);

      return {
        dataSource,
        node_id,
        concept_name,
        project_id,
        project_fieldcode,
        project_name,
        endFocusStatus,
      };
    },
    *onFocus({ nodeId }, { put }) {
      const values = yield put({ type: 'getSearchValues' });
      const { dataSource } = yield values;
      const handleData = JSON.parse(JSON.stringify(dataSource));
      const focusNodesList = handleData[0]?.graph?.nodes;
      const focusRelsList = handleData[0]?.graph?.rels;
      const nodeData = focusNodesList.filter((v, k) => {
        return v.id === nodeId || v.labels[0] === '标准词';
      });
      const relsData = focusRelsList.filter((v, k) => {
        return nodeId === Number(v.source);
      });
      handleData[0].graph.nodes = nodeData;
      handleData[0].graph.rels = relsData;
      if (relsData.length > 0 && nodeData.length > 1) {
        yield put({
          type: 'changeState',
          payload: {
            dataSource: handleData,
            endFocusStatus: 1,
          },
        });
      } else {
        yield put({
          type: 'changeState',
          payload: {
            dataSource: [...dataSource],
            endFocusStatus: 1,
          },
        });
      }
    },
    *searchKeyword({ keyword }, { put }) {
      const values = yield put({ type: 'getSearchValues' });
      const { dataSource } = yield values;
      const handleData = JSON.parse(JSON.stringify(dataSource));
      const focusNodesList = handleData[0]?.graph?.nodes;
      const focusRelsList = handleData[0]?.graph?.rels;
      const nodeData = focusNodesList.filter((v, k) => {
        return v.name === keyword || v.labels[0] === '标准词';
      });
      let itemId = '';
      focusNodesList.map((v, k) => {
        if (v.name === keyword) {
          itemId = v.id;
          return itemId;
        }
      });
      const relsData = focusRelsList.filter((v, k) => {
        return itemId === Number(v.source);
      });
      handleData[0].graph.nodes = nodeData;
      handleData[0].graph.rels = relsData;
      if (relsData.length === 0) {
        // const config = {
        //   title: '聚焦提示',
        //   icon: <ExclamationCircleOutlined />,
        //   content: (
        //     <>
        //       <div>未查询到相应聚焦图例！</div>
        //     </>
        //   ),
        //   okText: '确定',
        //   cancelText: '取消',
        // };
        // Modal.confirm(config);
        yield put({
          type: 'changeState',
          payload: {
            dataSource,
            endFocusStatus: 0,
          },
        });
        return;
      }
      if (relsData.length > 0 && nodeData.length > 1) {
        yield put({
          type: 'changeState',
          payload: {
            dataSource: handleData,
            endFocusStatus: 1,
          },
        });
      } else {
        yield put({
          type: 'changeState',
          payload: {
            dataSource: [...dataSource],
            endFocusStatus: 1,
          },
        });
      }
    },
    //归一查询搜索列表
    *searchConceptInfo({ search }, { select, call, put }) {
      try {
        yield put({
          type: 'changeState',
          payload: {
            node_id: search.itemId,
            concept_name: search.conceptName,
            project_id: search.projectId,
            project_fieldcode: search.code,
            project_name: search.name,
          },
        });
        const values = yield put({ type: 'getSearchValues' });
        const {
          node_id,
          concept_name,
          project_id,
          project_fieldcode,
          project_name,
        } = yield values;

        const searchObj = {
          node_id,
          concept_name,
          project_id,
          project_fieldcode,
          project_name,
          //search: encodeURIComponent(search),
        };

        const data = yield call(requestGetConceptInfo, searchObj);
        if (data.result === 'success') {
          yield put({
            type: 'changeState',
            payload: {
              dataSource: data.data,
              total: data.total,
              endFocusStatus: 0,
            },
          });
        } else {
          yield put({
            type: 'changeState',
            payload: {
              dataSource: [],
              total: 0,
              endFocusStatus: 0,
            },
          });
        }
        return data;
      } catch (error) {
        console.log(error);
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
