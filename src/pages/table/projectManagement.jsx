import React, { useState, useEffect } from 'react';
import styles from './projectManagement.less';
import { Tabs, Select, Tag, DatePicker, Breadcrumb } from 'antd';
import { connect } from 'umi';
import G6 from '@antv/g6';
import moment from 'moment';
const { Option } = Select;
const { CheckableTag } = Tag;
const { MonthPicker, RangePicker } = DatePicker;
const { TabPane } = Tabs;
//g6 创建边
const data = {
  nodes: [
    { id: 'node1', x: 350, y: 200 },
    { id: 'node2', x: 350, y: 250 },
    { id: 'node3', x: 100, y: 200 },
  ],
};
function TableDetail(props) {
  const { history } = props;
  useEffect(() => {
    drawCloth();
  }, []);

  const drawCloth = () => {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.innerHTML = '点击两个点画一条线';
    const container = document.getElementById('container');
    container.appendChild(descriptionDiv);
    const width = container.scrollWidth;
    const height = (container.scrollHeight || 500) - 20;
    const graph = new G6.Graph({
      container: 'container',
      width,
      height,
      linkCenter: true,
      modes: {
        default: ['create-edge'],
      },
      defaultEdge: {
        type: 'quadratic',
        style: {
          stroke: '#F6BD16',
          lineWidth: 2,
        },
      },
    });
    graph.data(data);
    graph.render();
    graph.on('aftercreateedge', e => {
      const edges = graph.save().edges;
      G6.Util.processParallelEdges(edges);
      graph.getEdges().forEach((edge, i) => {
        graph.updateItem(edge, edges[i]);
      });
    });
    // if (typeof window !== 'undefined') {
    //   window.onresize = () => {
    //     if (!graph || graph.get('destroyed')) return;
    //     if (!container || !container.scrollWidth || !container.scrollHeight)
    //       return;
    //     graph.changeSize(container.scrollWidth, container.scrollHeight - 20);
    //   };
    // }
  };

  return (
    <div className={styles.header}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item
          href="#"
          onClick={() => {
            history.push('/table/homePage');
          }}
        >
          <span>首页</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>项目管理</Breadcrumb.Item>
      </Breadcrumb>

      <div id="container" style={{ color: '#f40' }}></div>
    </div>
  );
}
const mapStateProps = ({ detail }) => {
  return {};
};
const mapDispatchProps = dispatch => {
  return {
    userAdd: values => {
      dispatch({ type: 'detail/userAdd', values });
    },

    onInit: () => {
      dispatch({ type: 'detail/onInit' });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(TableDetail);
