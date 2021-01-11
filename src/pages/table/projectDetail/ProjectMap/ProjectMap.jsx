import React, { Component } from 'react';
import Style from './index.less';
import * as echarts from 'echarts';
import { Input, Button, Empty, message } from 'antd';
import {
  CloseSquareOutlined,
  PlusOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { ProjectDetail, queryConcept } from '@/api/Project.jsx';
import { connect } from 'umi';
import { SetSolidData, SetLineData } from '@/utils/Config.js';
import InputDialog from '@/components/Addproject/Addproject';
const { Search } = Input;
class ProjectMap extends Component {
  state = {
    diglogHidden: false, //是否展示右键弹出层
    diglogItems: {}, //弹出层数据对象
    x: 0,
    y: 0,
    eachartBigorSmall: 1,
    lintData: [],
    nodesData: [],
    InputDialogShow: false,
    Addconcept: false,
    eidetText: false,
    isEidet: false,
    placeholderText: '使用搜索功能查看更多概念',
    SearchData: [],
  };
  render() {
    const {
      diglogHidden, //是否展示右键弹出层
      x,
      y,
      InputDialogShow,
      isEidet,
      placeholderText,
      Addconcept,
      SearchData,
      eidetText,
    } = this.state;
    return (
      <div className={Style.atlasWrapper}>
        <div className={Style.ProjectMap}>
          <div className={Style.projecttext}>
            <div className={Style.Account}>占位</div>
            <div className={Style.detailtext}>
              <p className={Style.gainian}>概念名：</p>
              <p className={Style.gainian}>路径：</p>
              <p className={Style.gainian}>标准词：</p>
              <p className={Style.gainian}>同义词：</p>
            </div>
          </div>
          <div className={Style.promap}>
            {isEidet ? (
              <Button
                type="primary"
                onClick={() => this.blundeventAddconcept()}
                className={Style.Addconcept}
              >
                + 添加概念
              </Button>
            ) : null}
            <div
              className={Style.promapAdd}
              onClick={() => this.blundmapbigadd(0)}
            >
              +
            </div>
            <div
              className={Style.promapRemove}
              onClick={() => this.blundmapbigadd(1)}
            >
              -
            </div>
            <div className={Style.EachartsState}>
              <p className={Style.borderslide}>
                <span className={Style.borderblue}></span>
                标准词
              </p>
              <p className={Style.borderslide}>
                <span className={Style.borderred}></span>
                原始词
              </p>
            </div>
            <div className={Style.atlasTop}>
              {isEidet ? (
                <Button
                  type="primary"
                  onClick={() => this.blundeventeidetRemove()}
                  style={{ width: '100px' }}
                  className={Style.Endediting}
                >
                  结束编辑
                </Button>
              ) : (
                <Button
                  type="primary"
                  onClick={() => this.blundeventeidetstate(true)}
                  style={{ width: '100px' }}
                  className={Style.Endediting}
                >
                  编辑模式
                </Button>
              )}
              {isEidet ? (
                <Button
                  type="primary"
                  onClick={() => this.blundeventFocuseRemove()}
                  style={{ width: '100px' }}
                  className={Style.EndFocus}
                >
                  结束聚焦
                </Button>
              ) : null}
              <div className={Style.ipt_box}>
                <Search
                  placeholder={placeholderText}
                  onSearch={this.onSearch}
                  style={{ width: 300 }}
                />
                {eidetText && SearchData.length ? (
                  <div className={Style.SelectList}>
                    {SearchData.map(item => {
                      return (
                        <div
                          className={Style.Selectborder}
                          key={item.node_id}
                          onClick={() => this.BlunndEventFocusing(item)}
                        >
                          <p className={Style.Selectslide}>
                            {item.node_name}：阿斯顿 阿斯顿 奥迪
                          </p>
                          <p className={Style.Selectslide}>
                            路径： 奥迪 阿斯顿 阿斯顿 阿斯顿
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
            <div
              className={Style.Graphwrapper}
              id="main"
              ref="main"
              style={{ width: '100%', height: '100%' }}
            ></div>
            {diglogHidden ? (
              <div
                className={Style.editEacharts}
                style={{ top: y + 80 + 'px', left: x + 'px' }}
              >
                <p
                  className={Style.editslide}
                  onClick={() => this.BlundEventFocus()}
                >
                  <CloseSquareOutlined className={Style.iconRight} />
                  聚焦
                </p>
                <p
                  className={Style.editslide}
                  onClick={() => this.BlundeventshowDialog()}
                >
                  <PlusOutlined className={Style.iconRight} />
                  添加关系
                </p>
                <p className={Style.editslide}>
                  <DeleteOutlined className={Style.iconRight} />
                  删除概念
                </p>
              </div>
            ) : null}
            {isEidet ? (
              <Button
                type="primary"
                onClick={() => this.blundeventeidetstate(true)}
                className={Style.BtnPreServaTion}
              >
                保存
              </Button>
            ) : null}
          </div>
        </div>
        <InputDialog
          isModalVisible={InputDialogShow}
          Blundeventcloseproject={() => this.BlundeventPreservation()}
          Blundeventcancelproject={() => this.BlundeventCancel()}
          cancelText={'返回'}
          okText={'保存'}
          title={'添加关系'}
          closable={false}
          centered={true}
          width={620}
          forceRender={true}
        ></InputDialog>
        <InputDialog
          isModalVisible={Addconcept}
          Blundeventcloseproject={() => this.AddconceptClose()}
          Blundeventcancelproject={() => this.AddconceptShow()}
          cancelText={'返回'}
          okText={'保存'}
          title={'添加概念'}
          closable={false}
          centered={true}
          width={620}
          forceRender={true}
        ></InputDialog>
      </div>
    );
  }
  BlunndEventFocusing = item => {
    let graph = item.graph;
    const myChart = echarts.init(this.refs.main);
    myChart.setOption({
      series: [
        {
          links: SetLineData(graph.rels),
          data: SetSolidData(graph.nodes),
        },
      ],
    });
    this.setState({
      eidetText: false,
    });
  };
  BlundEventFocus = () => {
    //弹框聚焦
    this.setState({
      diglogHidden: false,
    });
    const { diglogItems } = this.state;
    if (!diglogItems.data) return;
    console.log(diglogItems.data);
    this.FocusDatas(diglogItems.data.name);
  };
  FocusDatas = text => {
    const { project_fieldcode, project_name, project_id } = this.props;
    queryConcept({
      project_fieldcode,
      project_name,
      project_id,
      concept_name: text,
    }).then(res => {
      if (res.result == 'success') {
        let data = res.data[0].graph;
        const myChart = echarts.init(this.refs.main);
        myChart.setOption({
          series: [
            {
              links: SetLineData(data.rels),
              data: SetSolidData(data.nodes),
            },
          ],
        });
      } else {
        return;
      }
    });
  };
  AddconceptClose = () => {
    this.setState({
      Addconcept: false,
    });
  };
  AddconceptShow = () => {
    this.setState({
      Addconcept: false,
    });
  };
  blundeventAddconcept = () => {
    //添加概念
    this.setState({
      Addconcept: true,
    });
  };
  blundeventeidetstate = () => {
    //编辑模式
    this.setState({
      isEidet: true,
    });
  };
  blundeventFocuseRemove = () => {
    const { lintData, nodesData } = this.state;
    const myChart = echarts.init(this.refs.main);
    myChart.setOption({
      series: [
        {
          links: SetSolidData(lintData),
          data: SetLineData(nodesData),
        },
      ],
    });
  };
  blundeventeidetRemove = () => {
    //结束编辑
    this.setState({
      isEidet: false,
      diglogHidden: false,
    });
  };
  BlundeventshowDialog = () => {
    this.setState({
      InputDialogShow: true,
      diglogHidden: false,
    });
  };
  BlundeventPreservation = () => {
    this.setState({
      InputDialogShow: false,
    });
  };
  BlundeventCancel = () => {
    this.setState({
      InputDialogShow: false,
    });
  };
  componentDidMount() {
    if (this.props.match.params) {
      const { ID } = this.props.match.params;
      this.initEachartsID(ID);
      this.setState({
        Id: ID,
      });
    }
  }
  initEachartsID = ID => {
    ProjectDetail(ID).then(res => {
      if (res.result == 'success') {
        const { trees } = res.data;
        let nodesData = trees.nodes;
        let relsData = trees.rels;
        this.setState({
          lintData: relsData,
          nodesData: nodesData,
        });
        const myChart = echarts.init(this.refs.main);
        if (myChart) {
          myChart.showLoading();
          this.myEcharts(
            SetSolidData(nodesData),
            myChart,
            SetLineData(relsData),
          );
        }

        document.oncontextmenu = function() {
          return false;
        };
      } else {
        return;
      }
    });
  };
  myEcharts = (data, myChart, arr) => {
    let that = this;
    data.forEach(function(node, index) {
      node.dataIndex = index;
      node.value = node.symbolSize;
      node.symbolSize /= 1.5;
      node.label = {
        show: node.symbolSize > 1,
      };
      // node.category = node.attributes.modularity_class;
      node.category = node.properties.code;
    });

    myChart.setOption({
      tooltip: {
        formatter: function(x) {
          return x.data.name; //设置提示框的内容和格式 节点和边都显示name属性
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
          links: arr,
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
            repulsion: 400,
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
      const { isEidet } = that.state;
      if (typeof params === 'object') {
        if (!isEidet) return;
        that.setState(state => {
          return {
            diglogHidden: true, //是否展示右键弹出层
            diglogItems: params, //弹出层数据对象
            x: params.event.offsetX,
            y: params.event.offsetY,
          };
        });
      }
    });
    // 点击元素
    myChart.getZr().on('click', function(params) {
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
          dataIndex: dataIndex,
        });
        //  that.GetPrijectState(text)
      }
    });
    // 拖动中
    myChart.on('mousemove', function(params) {});
    myChart.on('mouseup', function(params) {});

    // 关闭loding
    setTimeout(() => {
      myChart.hideLoading();
    }, 1200);
  };
  onSearch = val => {
    this.setState({
      placeholderText: '输入概念名',
      eidetText: true,
    });
    this.GetPrijectState(val);
  };
  blundmapbigadd = v => {
    const myChart = echarts.init(this.refs.main);
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
  GetPrijectState = text => {
    const { project_fieldcode, project_name, project_id } = this.props;
    queryConcept({
      project_fieldcode,
      project_name,
      project_id,
      concept_name: text,
    }).then(res => {
      if (res.result == 'success') {
        let data = res.data;
        if (data.length) {
          this.setState({
            SearchData: data,
          });
        } else {
          message.warning('未查询到相关概念！');
        }
      } else {
        return;
      }
    });
  };
}
// 135201711712016086
const mapStateProps = ({ TapIndex }) => {
  return {
    project_fieldcode: TapIndex.project_fieldcode,
    project_name: TapIndex.project_name,
    project_id: TapIndex.project_id,
  };
};
const mapDispatchProps = dispatch => {
  return {};
};
export default connect(mapStateProps, mapDispatchProps)(ProjectMap);
