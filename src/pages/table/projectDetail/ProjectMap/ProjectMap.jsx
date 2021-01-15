import React, { Component } from 'react';
import Style from './index.less';
import * as echarts from 'echarts';
import { Input, Button, Empty, message, Form, Select } from 'antd';
import {
  CloseSquareOutlined,
  PlusOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import {
  ProjectDetail,
  queryConcept,
  queryProjectConceptInfo,
  focusProjectConceptInfo,
} from '@/api/Project.jsx';
import { connect } from 'umi';
import { SetSolidData, SetLineData, randomString } from '@/utils/Config.js';
import InputDialog from '@/components/Addproject/Addproject';
// import GetFromData from '../GetFrom/getFromData.jsx'
const { Search } = Input;
const { Option } = Select;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
class ProjectMap extends Component {
  state = {
    diglogHidden: false, //是否展示右键弹出层
    node_ID: '', //弹出层数据对象
    x: 0,
    y: 0,
    eachartBigorSmall: 1,
    lintData: [],
    nodesData: [],
    lintArray: [],
    nodeArray: [],
    InputDialogShow: false,
    Addconcept: false,
    eidetText: false,
    isEidet: false,
    placeholderText: '使用搜索功能查看更多概念',
    SearchData: [],
    ConceptName: '', //概念名
    std_vocab: '', //标准词
    syn_vocab: [], //同义词
    OverFocus: false,
    path: [],
    deleteProject: false,
    solidName: '',
    ClasName: '',
  };
  formRef = React.createRef();
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
      OverFocus,
      ConceptName,
      std_vocab,
      syn_vocab,
      path,
      deleteProject,
      solidName,
      ClasName,
    } = this.state;
    return (
      <div className={Style.atlasWrapper}>
        <div className={Style.ProjectMap}>
          <div className={Style.projecttext}>
            <div className={Style.Account}>占位</div>
            <div className={Style.detailtext}>
              <p className={Style.gainian}>概念名：{ConceptName}</p>
              <p className={Style.gainian}>
                路径：
                {path.map((item, index) => {
                  return (
                    <span key={index} className={Style.routeMargin}>
                      {item}
                    </span>
                  );
                })}
              </p>
              <p className={Style.gainian}>标准词：{std_vocab}</p>
              <p className={Style.gainian}>
                同义词：
                {/* {
                  syn_vocab.map(item => {
                    return <span className={Style.routeMargin}>{item}</span>;
                  })
                } */}
                {path.map((item, index) => {
                  return (
                    <span key={index} className={Style.routeMargin}>
                      {item}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className={Style.promap}>
            {/* {isEidet ? (
              <Button
                type="primary"
                onClick={() => this.blundeventAddconcept()}
                className={Style.Addconcept}
              >
                + 添加概念
              </Button>
            ) : null} */}
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
              {OverFocus ? (
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
                    {SearchData.map((item, index) => {
                      return (
                        <div
                          className={Style.Selectborder}
                          key={index}
                          onClick={() => this.BlunndEventFocusing(item)}
                        >
                          <p className={Style.Selectslide}>
                            {item.node_name}：{item.properties.class}
                          </p>
                          <p className={Style.Selectslide}>
                            路径：{' '}
                            {item.path.map((val, i) => {
                              return (
                                <span className={Style.routeMargin} key={i}>
                                  {val}
                                </span>
                              );
                            })}
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
                {isEidet ? (
                  <div>
                    <p
                      className={Style.editslide}
                      onClick={() => this.BlundeventshowDialog()}
                    >
                      <PlusOutlined className={Style.iconRight} />
                      添加关系
                    </p>
                    <p
                      className={Style.editslide}
                      onClick={() => this.blundeventAddconcept()}
                    >
                      <DeleteOutlined className={Style.iconRight} />
                      添加概念
                    </p>
                    <p
                      className={Style.editslide}
                      onClick={() => this.blundeventRemoverelationship()}
                    >
                      <DeleteOutlined className={Style.iconRight} />
                      删除概念
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}
            {deleteProject && isEidet ? (
              <div
                className={Style.editEacharts}
                style={{ top: y + 80 + 'px', left: x + 'px' }}
              >
                <p
                  className={Style.editslide}
                  onClick={() => this.blundeventRemoverelationship()}
                >
                  <DeleteOutlined className={Style.iconRight} />
                  删除关系
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
        >
          <Form
            {...layout}
            name="basic"
            ref={this.formRef}
            initialValues={{
              remember: true,
            }}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="概念名称"
              name="conceptName"
              rules={[
                {
                  required: true,
                  message: '概念名称不能为空！',
                },
                {
                  validator: this.validateServiceName,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="概念类型"
              name="conceptType"
              rules={[
                {
                  required: true,
                  message: '概念类型不能为空',
                },
              ]}
            >
              <Select onChange={this.blundSelect}>
                <Option value="0">原始词</Option>
                <Option value="1">标准词</Option>
              </Select>
            </Form.Item>
          </Form>
        </InputDialog>
      </div>
    );
  }
  blundSelect = val => {
    console.log(val);
  };
  validateServiceName = (rule, val, callback) => {
    //正则校验输入框首尾去空格
    var pattern = new RegExp(/^[\s　]|[ ]$/gi);
    if (pattern.test(val)) {
      return Promise.reject('开头结尾不允许使用空格');
    }
    return Promise.resolve();
  };
  BlunndEventFocusing = item => {
    // let graph = item.graph;
    console.log(item);
    const { node_id } = item;
    this.setState({
      OverFocus: true,
      eidetText: false,
    });
    this.FocusDatas(node_id);
  };
  BlundEventFocus = () => {
    //弹框聚焦
    this.setState({
      diglogHidden: false,
      OverFocus: true,
    });
    const { node_ID } = this.state;
    this.FocusDatas(node_ID);
  };
  FocusDatas = text => {
    const { project_id } = this.props;
    focusProjectConceptInfo({
      project_id,
      node_id: text,
    }).then(res => {
      if (res.result == 'success') {
        let data = res.data;
        const { node_name, std_vocab, syn_vocab, path } = data;
        this.setState({
          ConceptName: node_name,
          std_vocab,
          syn_vocab,
          path,
        });
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
  AddconceptShow = async () => {
    //保存添加概念接口
    const { node_ID } = this.state;
    const random = randomString();
    console.log(random, node_ID);
    const form = this.formRef.current;
    try {
      let value = await form.validateFields(['conceptName', 'conceptType']);
      const { conceptName, conceptType } = value;
      console.log(conceptName, conceptType);
      // this.setState({
      //   Addconcept: false,
      // });
    } catch (err) {}
  };
  blundeventAddconcept = () => {
    //添加概念
    this.setState({
      Addconcept: true,
      diglogHidden: false,
    });
  };
  blundeventeidetstate = () => {
    //编辑模式
    this.setState({
      isEidet: true,
      diglogHidden: false,
      deleteProject: false,
    });
  };
  blundeventFocuseRemove = () => {
    const { lintData, nodesData } = this.state;
    const myChart = echarts.init(this.refs.main);
    myChart.setOption({
      series: [
        {
          links: SetLineData(lintData),
          data: SetSolidData(nodesData),
        },
      ],
    });
    this.Setstateinnerhtml();
    this.setState({
      OverFocus: false,
    });
  };
  blundeventeidetRemove = () => {
    const { lintData, nodesData } = this.state;
    const myChart = echarts.init(this.refs.main);
    myChart.setOption({
      series: [
        {
          links: SetLineData(lintData),
          data: SetSolidData(nodesData),
        },
      ],
    });
    this.Setstateinnerhtml();
    //结束编辑
    this.setState({
      isEidet: false,
      diglogHidden: false,
      deleteProject: false,
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
          lintArray: relsData,
          nodeArray: nodesData,
        });
        if (this.refs.main) {
          const myChart = echarts.init(this.refs.main);
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
    data.forEach(function(node) {
      node.id = node.id;
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
          zoom: 0.5,
          type: 'graph',
          layout: 'force',
          data,
          links: arr,
          roam: true,
          focusNodeAdjacency: false, //划过高亮
          draggable: true,
          edgeSymbol: [null, 'arrow'],
          edgeSymbolSize: [0, 10],
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 0,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
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
    // 右键元素 肠道传染病9811      3799272  3799273
    myChart.on('contextmenu', function(params) {
      if (typeof params === 'object') {
        // const { dataIndex } = params.target;
        let id = params.data.id;
        let source = params.data.source;
        console.log(params);
        let solidName = params.data.name;
        let ClasName = params.data.properties
          ? params.data.properties.class
          : '';
        if (id) {
          that.setState(state => {
            return {
              diglogHidden: true, //是否展示右键弹出层
              node_ID: id, //弹出层数据对象
              x: params.event.offsetX,
              y: params.event.offsetY,
              ClasName: ClasName,
              solidName: solidName,
            };
          });
        } else {
          that.setState(state => {
            return {
              deleteProject: true, //是否展示右键弹出层
              node_ID: source, //弹出层数据对象
              x: params.event.offsetX,
              y: params.event.offsetY,
            };
          });
        }
      }
    });
    // 点击元素
    myChart.getZr().on('click', function(params) {
      that.setState({
        diglogHidden: false,
        deleteProject: false,
      });
      console.log(params);
      if (!params.target) {
        myChart.dispatchAction({
          type: 'unfocusNodeAdjacency',
        });
        that.Setstateinnerhtml();
        return;
      } else {
        const { dataIndex } = params.target;
        console.log(params);
        if (!params.target.__cachedNormalStl) return;
        myChart.dispatchAction({
          type: 'focusNodeAdjacency',
          dataIndex: dataIndex,
        });
        //  let origidata= myChart.getOption.series ? myChart.getOption.series[0].data :null;
        // let id = origidata[dataIndex].id;
        // console.log()
        let seriesdata = myChart.getOption().series
          ? myChart.getOption().series[0].data
          : null;
        let id = seriesdata[dataIndex].id;
        that.GetPrijectStateDelete(id);
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
    const { project_id } = this.props;
    queryConcept({
      project_id,
      concept_name: text,
    }).then(res => {
      if (res.result == 'success') {
        let data = res.data;
        console.log(data);
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
  GetPrijectStateDelete = text => {
    const { project_id } = this.props;
    queryProjectConceptInfo({
      project_id,
      node_id: text,
    }).then(res => {
      if (res.result == 'success') {
        let data = res.data;
        const { node_name, std_vocab, syn_vocab, path } = data;
        this.setState({
          ConceptName: node_name,
          std_vocab,
          syn_vocab,
          path,
        });
      } else {
        return;
      }
    });
  };
  Setstateinnerhtml = () => {
    this.setState({
      ConceptName: '',
      std_vocab: '',
      syn_vocab: [],
      path: [],
    });
  };
  blundeventRemoverelationship = () => {
    // lintArray:relsData,
    // nodeArray:nodesData,
    this.setState({
      diglogHidden: false,
      deleteProject: false,
    });

    const myChart = echarts.init(this.refs.main);
    let linkss = myChart.getOption().series[0].links;
    const { node_ID } = this.state;
    this.setdadadad(node_ID);
    linkss.forEach((item, index) => {
      if (item.target == node_ID) {
        this.setdadadad(item.source);
        linkss.forEach(val => {
          if (val.target == item.source) {
            this.setdadadad(val.source);
            return;
          }
        });
        return;
      }
    });
  };
  setdadadad = node_ID => {
    const myChart = echarts.init(this.refs.main);
    let Datas = myChart.getOption().series[0].data;
    // const {
    //   nodeArray,
    // } = this.state
    let data = Datas;
    Datas.forEach((val, index) => {
      if (val.id == node_ID) {
        data.splice(index, 1);
        return;
      }
    });
    this.setState({
      nodeArray: data,
    });
    myChart.setOption({
      series: [
        {
          data: SetSolidData(data),
          // data:data,
        },
      ],
    });
  };
  // componentWillUnmount() {
  //   this.myEcharts.dispose();
  // }
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
