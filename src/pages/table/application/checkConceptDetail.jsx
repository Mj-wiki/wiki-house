import React, { useState, useEffect, useRef } from 'react';
import styles from './checkConceptDetail.less';
import { Form, Input, Breadcrumb, Icon, Button, Divider } from 'antd';
import { connect } from 'umi';
import graph from './realData.js';
import * as echarts from 'echarts';
import Dialog from '@/components/DiaLog';
import listData from './listData.js';
const { Search } = Input;
const buttonAddStyle = {
  color: '#fff',
  borderRadius: '5px',
  marginRight: '10px',
  fontSize: '25px',
  lineHeight: '20px',
  padding: '4px 12px',
};
const buttonMinusStyle = {
  color: '#fff',
  borderRadius: '5px',
  marginRight: '10px',
  fontSize: '25px',
  lineHeight: '20px',
};
function CheckConceptDetail(props) {
  const { history, onInit } = props;
  const chartRef = useRef(null);
  const [diglogConfig, setDiglogConfig] = useState({
    diglogHidden: false, //是否展示右键弹出层
    diglogItems: {}, //弹出层数据对象
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const myChart = echarts.init(chartRef.current);
    myChart.showLoading();
    // 干掉浏览器默认右键事件
    document.oncontextmenu = function() {
      return false;
    };
    if (Array.isArray(graph['nodes'])) {
      graph['nodes'].map((v, k) => {
        if (Array.isArray(v.labels) && v.labels[0] === '标准词') {
          if (v.properties.class === '分类;二级分类') {
            v.itemStyle = { normal: { color: 'rgb(236,81,72)' } };
            v.symbolSize = 18.685715;
          }
          if (v.properties.class === '分类;一级分类') {
            v.itemStyle = { normal: { color: 'blue' } };
            v.symbolSize = 28.685715;
          }
          if (v.properties.class === '顶级节点') {
            v.itemStyle = { normal: { color: 'orange' } };
            v.symbolSize = 48.685715;
          }
        } else {
          v.itemStyle = { normal: { color: 'lightBlue' } };
          v.symbolSize = 28.685715;
        }
      });
    }
    myEcharts(graph['nodes'], myChart);

    //初始化方法
  }, []);

  const myEcharts = (data, myChart) => {
    var categories = [];
    for (var i = 0; i < 9; i++) {
      categories[i] = {
        name: '类目' + i,
      };
    }
    //setCacheData(data);
    data.forEach(function(node, index) {
      //node.itemStyle = null;
      node.value = node.symbolSize;
      //node.fixed = true;
      node.symbolSize /= 1.5;
      node.label = {
        show: node.symbolSize > 1,
      };
      node.category = node.properties.code;
      // node.dataIndex = index;
    });

    myChart.setOption({
      tooltip: {},
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      animation: false,
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'force',
          data,
          links: graph['rels'],
          categories: categories,
          roam: true,
          focusNodeAdjacency: true,
          draggable: true,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
          },
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
          force: {
            repulsion: 100,
            layoutAnimation: false,
          },

          emphasis: {
            lineStyle: {
              width: 2,
            },
          },
        },
      ],
    });

    // 右键元素
    myChart.on('contextmenu', function(params) {
      console.log(params);
      if (typeof params === 'object') {
        setDiglogConfig({
          diglogHidden: true,
          diglogItems: params,
          x: params.event.offsetX + 400,
          y: params.event.offsetY + 200,
        });
      }
    });
    // 点击元素
    myChart.getZr().on('click', function(params) {
      setDiglogConfig({
        diglogHidden: false,
        diglogItems: params,
        x: params.event.offsetX,
        y: params.event.offsetY,
      });
      if (
        myChart.getOption()?.series?.[0].data[params.target?.dataIndex] ==
        undefined
      )
        return;
    });

    // 拖动中
    myChart.on('mousemove', function(params) {});
    // 松开元素
    myChart.on('mouseup', function(params) {
      if (myChart.getOption()?.series?.[0].data[params.dataIndex] == undefined)
        return;
      var optionS = myChart.getOption();
      if (myChart.getOption()) {
        optionS.series[0].data[params.dataIndex].x = params.event.offsetX;
        optionS.series[0].data[params.dataIndex].y = params.event.offsetY;
        optionS.series[0].data[params.dataIndex].fixed = true;
      }
      myChart.setOption(optionS);
    });

    // 关闭loding
    setTimeout(() => {
      myChart.hideLoading();
    }, 1200);
  };
  //点击按钮放大或缩小
  const zoomGraph = v => {
    const myChart = echarts.init(chartRef.current);
    let currentZoom = myChart.getOption().series[0].zoom;
    let increaseAmplitude = 1.2;
    if (v == 1) {
      increaseAmplitude = 0.8;
    }
    myChart.setOption({
      series: [
        {
          zoom: currentZoom * increaseAmplitude,
        },
      ],
    });
  };

  return (
    <div className={styles.content}>
      <Breadcrumb style={{ marginTop: '40px' }}>
        <Breadcrumb.Item
          href="#"
          onClick={() => {
            history.push('/table/checkAppDetail/' + props.match.params.appId);
          }}
        >
          <span>归一查询</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>概念详情</Breadcrumb.Item>
      </Breadcrumb>
      <Divider style={{ background: '#353d58' }}></Divider>
      <div className={styles.bigBox}>
        <div className={styles.informationBox}>
          <div className={styles.lecturerLayout}>
            <div className={styles.lecturerLeft}>
              <span title={listData[0].conceptName}>
                {listData[0].conceptName}
              </span>
            </div>
          </div>
          <div className={styles.bottomBox}>
            <div className={styles.lectureHospital}>
              <span className={styles.projectName}>所属项目:</span>
              <span title={listData[0].projectName}>
                {listData[0].projectName}
              </span>
            </div>
            <div className={styles.lectureHospital}>
              <span className={styles.projectName}>项目描述:</span>
              <span title={listData[0].projectName}>
                {
                  '这是项目描述这是项目描述这是项目描述这是项目balablabalbalabalbalalabalb这是项目描述这是项目描述这是项目描述这是项目balablabalbalabalbalalabalb...'
                }
              </span>
            </div>
            <div className={styles.lectureHospital}>
              <span className={styles.projectName}>领域类型:</span>
              <span title={listData[0].fieldType}>{listData[0].fieldType}</span>
            </div>
            <div className={styles.lectureHospital}>
              <span className={styles.projectName}>标准词:</span>
              <span title={listData[0].standardWord}>
                {listData[0].standardWord}
              </span>
            </div>
            <div className={styles.lectureHospital}>
              <div style={{ display: 'flex' }}>
                <div className={styles.synonym}>同义词:</div>
                <span title={listData[0].synonym.join('; ')}>
                  {listData[0].synonym.join('; ')
                    ? listData[0].synonym.join('; ').length > 50
                      ? listData[0].synonym.join('; ').slice(0, 50) + '...'
                      : listData[0].synonym.join('; ')
                    : undefined}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.echartsBox}>
          <div style={{ textAlign: 'right' }}>
            <Search
              placeholder="请输入关键词搜索"
              prefix={
                <Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              style={{ width: 200, height: '100px !important' }}
              maxLength={30}
            />
          </div>
          <div>
            <Button
              type="primary"
              style={buttonAddStyle}
              onClick={zoomGraph.bind(this, 0)}
            >
              +
            </Button>
            <Button
              type="primary"
              style={buttonMinusStyle}
              onClick={zoomGraph.bind(this, 1)}
            >
              -
            </Button>
            <div
              id="main"
              ref={chartRef}
              style={{
                width: '100%',
                minHeight: '500px',
                height: '100%',
                margin: '0 auto',
              }}
            ></div>
          </div>
        </div>
      </div>

      <Dialog
        item={diglogConfig.diglogItems}
        hidden={diglogConfig.diglogHidden}
        x={diglogConfig.x}
        y={diglogConfig.y}
      ></Dialog>
    </div>
  );
}
const mapStateProps = ({}) => {
  return {};
};
const mapDispatchProps = dispatch => {
  return {
    onInit: () => {
      dispatch({ type: 'detail/onInit' });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(CheckConceptDetail);
