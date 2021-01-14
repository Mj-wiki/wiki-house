import React, { useState, useEffect, useRef } from 'react';
import styles from './checkConceptDetail.less';
import { Form, Input, Breadcrumb, Icon, Button, Divider } from 'antd';
import { connect } from 'umi';
import * as echarts from 'echarts';
import Dialog from '@/components/DiaLog';

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
const HEIGHT = 120;

function CheckConceptDetail(props) {
  const { history, onInit, dataSource, onFocus, searchKeyword } = props;
  const chartRef = useRef(null);
  const [diglogConfig, setDiglogConfig] = useState({
    diglogHidden: false, //是否展示右键弹出层
    diglogItems: {}, //弹出层数据对象
    x: 0,
    y: 0,
  });
  const domList = useRef(null);
  const domListContent = useRef(null);
  const [listHeight, setListHeight] = useState(0); // 同义词的真实高度
  const [unfold, setUnfold] = useState(false);
  //存nodeId 原始词
  const [nId, setNId] = useState('');
  const [hotWord, setHotWord] = useState('');
  useEffect(() => {
    const search = props.match.params;
    onInit(search);
    const resize = () => {
      const listHeight = domListContent.current.offsetHeight;
      setListHeight(listHeight);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);
    myChart.showLoading();
    // 干掉浏览器默认右键事件
    document.oncontextmenu = function() {
      return false;
    };
    console.log(dataSource);
    const unifcList = dataSource[0]?.graph['nodes'];
    const unifcLinksData = dataSource[0]?.graph['rels'];
    if (Array.isArray(unifcList)) {
      unifcList.map((v, k) => {
        if (Array.isArray(v.labels) && v.labels[0] === '标准词') {
          v.itemStyle = { normal: { color: 'orange' } };
          v.symbolSize = 48.685715;
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
    myEcharts(unifcList, myChart, unifcLinksData);

    //初始化方法
  }, [dataSource, nId]);

  const myEcharts = (data, myChart, links) => {
    var categories = [];
    for (var i = 0; i < 9; i++) {
      categories[i] = {
        name: '类目' + i,
      };
    }

    data?.forEach(function(node, index) {
      node.dataIndex = index;
      node.value = node.symbolSize;
      node.symbolSize /= 1.5;
      node.label = {
        show: node.symbolSize > 1,
      };
      node.category = node.properties.code;
    });

    myChart.setOption({
      tooltip: {
        formatter: function(x) {
          return x.name; //设置提示框的内容和格式 节点和边都显示name属性
        },
      },
      toolbox: {},
      grid: {
        height: '100%',
        width: '100%',
      },
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      animation: false,
      series: [
        {
          // center: [0, 0],
          zoom: 0.5,
          type: 'graph',
          layout: 'force',
          data,
          links,
          roam: true,
          focusNodeAdjacency: false, //划过高亮
          draggable: true,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 0,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
          force: {
            // initLayout:'circular',
            repulsion: 1000,
            gravity: 0.1,
            edgeLength: 300,
            layoutAnimation: false,
            friction: 0.3,
            initLayout: 'none',
          },
          emphasis: {
            lineStyle: {
              width: 5,
            },
          },
        },
      ],
    });
    // 右键元素
    myChart.on('contextmenu', function(params) {
      if (typeof params === 'object') {
        setNId(params.data.id);
        setDiglogConfig({
          diglogHidden: true,
          diglogItems: params,
          x: params.event.offsetX + 520,
          y: params.event.offsetY + 200,
        });
      }
    });
    // 点击元素
    // myChart.getZr().on('click', function(params) {
    //   if (
    //     myChart.getOption()?.series?.[0].data[params.target?.dataIndex] ==
    //     undefined
    //   )
    //     return;
    // });
    myChart.getZr().on('click', function(params) {
      setDiglogConfig({
        diglogHidden: false,
        diglogItems: params,
        x: params.event.offsetX,
        y: params.event.offsetY,
      });
      setNId('');
      if (!params.target) {
        myChart.dispatchAction({
          type: 'unfocusNodeAdjacency',
        });
        return;
      } else {
        const { dataIndex } = params.target;
        if (!params.target.__cachedNormalStl) return;
        const { text } = params.target.__cachedNormalStl;
        myChart.dispatchAction({
          type: 'focusNodeAdjacency',
          dataIndex,
        });
        //  that.GetPrijectState(text)
      }
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
  //右键聚焦
  const FocusOperation = id => {
    onFocus(id);
    setDiglogConfig({
      diglogHidden: false,
      diglogItems: {},
      x: 0,
      y: 0,
    });
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
  //展开收起
  const clickUnfold = () => {
    domList.current.scrollTop = 0;
    setUnfold(!unfold);
  };
  //搜索聚焦
  const changeSearch = value => {
    console.log(hotWord);
    searchKeyword(hotWord);
  };

  const enterKeyword = e => {
    console.log(e.target.value);
    setHotWord(e.target.value);
  };

  return (
    <div className={styles.content}>
      <Breadcrumb style={{ marginTop: '40px' }}>
        <Breadcrumb.Item>
          <span
            onClick={() => {
              const appId = props.match.params.appId;
              history.push('/table/checkAppDetail/' + appId);
            }}
            style={{ cursor: 'pointer' }}
          >
            归一查询
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>概念详情</Breadcrumb.Item>
      </Breadcrumb>
      <Divider style={{ background: '#353d58' }}></Divider>
      <div className={styles.bigBox}>
        <div className={styles.informationBox}>
          <div className={styles.lecturerLayout}>
            <div className={styles.lecturerLeft}>
              <span title={dataSource[0]?.node_name}>
                {dataSource[0]?.node_name}
              </span>
            </div>
          </div>
          <div className={styles.bottomBox}>
            <div className={styles.lectureHospital}>
              <span className={styles.projectName}>所属项目 :</span>
              <span title={dataSource[0]?.prj_name}>
                {dataSource[0]?.prj_name}
              </span>
            </div>
            <div className={styles.lectureHospital}>
              <span className={styles.projectName}>项目描述 :</span>
              <span title={dataSource[0]?.prj_name}>
                {dataSource[0]?.prj_name}
              </span>
            </div>
            <div className={styles.lectureHospital}>
              <span className={styles.projectName}>领域类型 :</span>
              <span title={dataSource[0]?.area}>{dataSource[0]?.area}</span>
            </div>
            <div className={styles.lectureHospital}>
              <span className={styles.projectName}>标准词 :</span>
              <span title={dataSource[0]?.std_vocab}>
                {dataSource[0]?.std_vocab}
              </span>
            </div>
            <div className={styles.lectureHospital}>
              <div style={{ display: 'flex' }}>
                <div className={styles.synonym}>同义词 :</div>
                <div>
                  <div
                    title={dataSource[0]?.syn_vocab.join(', ')}
                    ref={domList}
                    style={{
                      height: unfold ? 'auto' : HEIGHT,
                      lineHeight: `30px`,
                    }}
                    className={
                      unfold
                        ? `${styles.synonymCotent} ${styles.unfold}`
                        : styles.synonymCotent
                    }
                  >
                    <div ref={domListContent}>
                      {/* {graph[0].syn_vocab.join(', ')
                      ? graph[0].syn_vocab.join(', ').length > 100
                        ? graph[0].syn_vocab.join(', ').slice(0, 100) + '...'
                        : graph[0].syn_vocab.join(', ')
                      : undefined} */}
                      <span>{dataSource[0]?.syn_vocab.join(', ')}</span>
                    </div>
                  </div>
                  {listHeight > HEIGHT ? (
                    <span
                      className={
                        unfold
                          ? `${styles.unfold_button} ${styles.unfold}`
                          : `${styles.unfold_button} ${styles.packup}`
                      }
                      onClick={clickUnfold}
                    >
                      {unfold ? '收起' : '展开'}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.echartsBox}>
          <div className={styles.legend}>
            <div style={{ display: 'flex', width: '400px' }}>
              <div style={{ width: '80px' }}>图例说明 -</div>
              <div style={{ width: '100px' }}>
                标准词 : <span className={styles.stand}></span>
              </div>
              <div style={{ width: '100px' }}>
                原始词 : <span className={styles.origin}></span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Search
                placeholder="请输入关键词搜索"
                prefix={
                  <Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                style={{ width: 200, height: '100px !important' }}
                maxLength={30}
                onSearch={changeSearch}
                onChange={enterKeyword}
              />
            </div>
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
        onClick={FocusOperation.bind(this, nId)}
      ></Dialog>
    </div>
  );
}
const mapStateProps = ({ checkConceptDetail }) => {
  return {
    dataSource: checkConceptDetail.dataSource,
  };
};
const mapDispatchProps = dispatch => {
  return {
    onInit: search => {
      dispatch({ type: 'checkConceptDetail/onInit', search });
    },
    onFocus: nodeId => {
      dispatch({ type: 'checkConceptDetail/onFocus', nodeId });
    },
    searchKeyword: keyword => {
      dispatch({ type: 'checkConceptDetail/searchKeyword', keyword });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(CheckConceptDetail);
