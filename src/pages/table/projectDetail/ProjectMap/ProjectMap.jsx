import React, { Component } from 'react';
import Style from './index.less';
import * as echarts from 'echarts';
import { Input, Button, Empty, message, Form, Select, Modal } from 'antd';
import {
  CloseSquareOutlined,
  PlusOutlined,
  DeleteOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import {
  ProjectDetail,
  queryConcept,
  queryProjectConceptInfo,
  focusProjectConceptInfo,
  PreservationAtlas,
} from '@/api/Project.jsx';
import { connect } from 'umi';
import { SetSolidData, SetLineData, randomString } from '@/utils/Config.js';
import InputDialog from '@/components/Addproject/Addproject';
import { getNumAndUnit } from '@/utils/numberUtil';
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
    AddRelationship: false,
    InputDialogShow: false,
    Addconcept: false,
    eidetText: false,
    isEidet: false,
    OverFocus: false,
    deleteProject: false,
    listshow: true,
    balbelflage: true,
    nameflage: false,
    x: 0,
    y: 0,
    eachartBigorSmall: 1,
    lintData: [],
    nodesData: [],
    lintArray: [],
    nodeArray: [],
    placeholderText: '使用搜索功能查看更多概念',
    SearchData: [],
    syn_vocab: [], //同义词
    path: [],
    edit_list: [],
    solidName: '',
    ClasName: '',
    properties: '',
    dataIndex: '',
    sourename: '',
    node_ID: '', //弹出层数据对象
    ConceptName: '', //概念名
    std_vocab: '', //标准词
    SolidId: '', //概念ID
    RightBtnId: '',
    Id: '',
    U_ID: '',
    source: '',
    target: '',
    type: '',
    Uid: '',
    ProjectId: '',
    triples: '',
    concepts: '',
    codeData: '',
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
      properties,
      solidName,
      ClasName,
      balbelflage,
      sourename,
      nameflage,
      triples,
      concepts,
      codeData,
    } = this.state;
    return (
      <div className={Style.atlasWrapper}>
        <div className={Style.ProjectMap}>
          <div className={Style.projecttext}>
            <div className={Style.Account}></div>
            <div className={Style.detailtext}>
              <p className={Style.gainian}>概念名：{ConceptName}</p>
              <p className={Style.gainian}>
                属性：
                {codeData ? <span>code：{codeData}</span> : ''}
                {properties ? (
                  <p style={{ margin: '0px 0px 0px 35px' }}>
                    class：{properties}
                  </p>
                ) : (
                  ''
                )}
              </p>
              <p className={Style.gainian}>
                路径：
                {path.map((item, index) => {
                  if (index == path.length - 1) {
                    return (
                      <span key={index}>
                        <span className={Style.routeMargin}>{item}</span>
                      </span>
                    );
                  } else {
                    return (
                      <span key={index}>
                        <span className={Style.routeMargin}> {item}</span> /
                      </span>
                    );
                  }
                })}
              </p>
              <p className={Style.gainian}>标准词：{std_vocab}</p>
              <div className={Style.gainian} style={{ display: 'flex' }}>
                {/* syn_vocab */}
                <span>同义词：</span>{' '}
                <div className={Style.openwrapper}>
                  {syn_vocab.length > 8 ? (
                    <div>
                      {this.state.listshow ? (
                        <div className={Style.overhoddin}>
                          {syn_vocab.map((item, i) => {
                            if (i < 12) {
                              return (
                                <span key={i}>
                                  <span className={Style.routeMargin}>
                                    {item}
                                  </span>{' '}
                                  /
                                </span>
                              );
                            } else {
                              return;
                            }
                          })}
                          <div
                            onClick={() => this.bluneeventopen()}
                            className={Style.postionhis}
                          >
                            展开
                          </div>
                        </div>
                      ) : (
                        <div className={Style.showbtn}>
                          {syn_vocab.map((item, val) => {
                            return (
                              <span key={val}>
                                <span className={Style.routeMargin}>
                                  {item}
                                </span>{' '}
                                /
                              </span>
                            );
                          })}
                          <div
                            onClick={() => this.bluneeventclose()}
                            className={Style.postionhis}
                          >
                            收起
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      {syn_vocab.map((item, box) => {
                        return (
                          <span key={box}>
                            <span className={Style.routeMargin}>{item}</span>/
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={Style.promap}
            style={{ border: isEidet ? '1px solid red' : '' }}
          >
            <div className={Style.EachartsState}>
              <p className={Style.borderslide}>
                <span className={Style.borderredtop}></span>
                顶级节点
              </p>
              <p className={Style.borderslide}>
                <span className={Style.borderblue}></span>
                标准词
              </p>
              <p className={Style.borderslide}>
                <span className={Style.borderred}></span>
                原始词
              </p>
              <p className={Style.borderslide}>
                <ArrowRightOutlined style={{ color: '#5B5FFE' }} />{' '}
                <span className={Style.marginrrr}>属于</span>
              </p>
              <p className={Style.borderslide}>
                <ArrowRightOutlined style={{ color: '#43AC61' }} />{' '}
                <span className={Style.marginrrr}>标准化为</span>
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
                  开始编辑
                </Button>
              )}
              <Button
                className={Style.promapAdd}
                onClick={() => this.blundmapbigadd(0)}
              >
                +
              </Button>
              <Button
                className={Style.promapRemove}
                onClick={() => this.blundmapbigadd(1)}
              >
                -
              </Button>
              {concepts && triples ? (
                <div className={Style.ProjectTotal}>
                  <span className={Style.ProjectTotalTitle}>三元组数</span> ：
                  {`${getNumAndUnit(triples, 0).num}${
                    getNumAndUnit(triples, 0).unit
                  }${getNumAndUnit(triples, 0).num1}${
                    getNumAndUnit(triples, 0).unit1
                  }${getNumAndUnit(triples, 0).num2}${
                    getNumAndUnit(triples, 0).unit2
                  }`}{' '}
                  <span
                    className={Style.ProjectTotalTitle}
                    style={{ marginLeft: '10px' }}
                  >
                    概念总数
                  </span>
                  ：
                  {`${getNumAndUnit(concepts, 0).num}${
                    getNumAndUnit(concepts, 0).unit
                  }${getNumAndUnit(concepts, 0).num1}${
                    getNumAndUnit(concepts, 0).unit1
                  }${getNumAndUnit(concepts, 0).num2}${
                    getNumAndUnit(concepts, 0).unit2
                  }`}
                </div>
              ) : (
                ''
              )}
              {OverFocus ? (
                <Button
                  type="primary"
                  onClick={() => this.blundeventFocuseRemove()}
                  style={{
                    background: isEidet ? '#ccc' : '',
                    border: isEidet ? '#ccc' : '',
                  }}
                  className={Style.EndFocus}
                >
                  返回初始状态
                </Button>
              ) : null}
              <div className={Style.ipt_box}>
                <Search
                  placeholder={placeholderText}
                  onSearch={this.onSearch}
                  style={{ width: 230 }}
                  onFocus={this.blundOnFocus}
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
                          {/* //肠道传染病9855 */}
                          <p className={Style.Selectslidename}>
                            {item.node_name}：
                          </p>
                          <p className={Style.Selectslideclass}>
                            {item.properties.class}
                          </p>
                          <p className={Style.Selectslide}>
                            路径：
                            {item.path.map((val, i) => {
                              if (i == item.path.length - 1) {
                                return (
                                  <span key={i} className={Style.routeMargin}>
                                    {val}
                                  </span>
                                );
                              } else {
                                return (
                                  <span key={i} className={Style.routeMargin}>
                                    {val}/
                                  </span>
                                );
                              }
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
                {!isEidet ? (
                  <p
                    className={Style.editslide}
                    onClick={() => this.BlundEventFocus()}
                  >
                    <CloseSquareOutlined className={Style.iconRight} />
                    聚焦
                  </p>
                ) : null}
                {isEidet ? (
                  <div>
                    {balbelflage ? (
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
                      </div>
                    ) : null}
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
                  onClick={() => this.BlundeventDeleteRelationship()}
                >
                  <DeleteOutlined className={Style.iconRight} />
                  删除关系
                </p>
              </div>
            ) : null}
            {isEidet ? (
              <Button
                type="primary"
                onClick={() => this.blundeventpreservationeidet()}
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
        >
          <div className={Style.InputWrapper}>
            <div className={Style.InputSlide}>
              <span className={Style.InputText}>源节点</span>
              <span className={Style.InputTextname}>{sourename}</span>
            </div>
            <div className={Style.InputSlide}>
              <span className={Style.InputText}>目标节点</span>
              <span className={Style.InputTextname}>{solidName}</span>
            </div>
            <div className={Style.InputSlide}>
              <span className={Style.InputText}>关系类型</span>
              <span className={Style.InputTextname}>{ClasName}</span>
            </div>
          </div>
        </InputDialog>
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
              <Input onBlur={() => this.blundBlur()} />
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
              <Select onChange={this.blundSelect} disabled={nameflage}>
                <Option value="is">标准化为</Option>
                <Option value="belong_to">属于</Option>
              </Select>
            </Form.Item>
          </Form>
        </InputDialog>
      </div>
    );
  }
  bluneeventopen = () => {
    // alert(1)
    this.setState({
      listshow: false,
    });
  };
  bluneeventclose = () => {
    this.setState({
      listshow: true,
    });
  };
  blundSelect = val => {};
  validateServiceName = (rule, val, callback) => {
    //正则校验输入框首尾去空格
    var pattern = new RegExp(/^[\s　]|[ ]$/gi);
    if (pattern.test(val)) {
      return Promise.reject('开头结尾不允许使用空格');
    }
    return Promise.resolve();
  };
  BlunndEventFocusing = item => {
    const { node_id } = item;
    this.setState({
      OverFocus: true,
      eidetText: false,
      SearchData: [],
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
        const { node_name, std_vocab, syn_vocab, path, properties } = data;
        this.setState({
          ConceptName: node_name,
          std_vocab,
          syn_vocab,
          path,
          properties: properties.class,
          codeData: properties.code,
          lintArray: data.rels,
          nodeArray: data.nodes,
          triples: data.rels.length,
          concepts: data.nodes.length,
        });
        const myChart = echarts.init(this.refs.main);
        myChart.dispatchAction({
          type: 'unfocusNodeAdjacency',
        });
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
    const form = this.formRef.current;
    form.resetFields();
    this.setState({
      Addconcept: false,
    });
  };
  AddconceptShow = async () => {
    //保存添加概念接口
    const { node_ID, edit_list, U_ID } = this.state;
    const random = randomString();
    const form = this.formRef.current;
    try {
      let value = await form.validateFields(['conceptName', 'conceptType']);
      const { conceptName, conceptType } = value;
      const myChart = echarts.init(this.refs.main);
      let option = myChart.getOption().series[0];
      let node = option.data;
      let links = option.links;
      let labeltype = '';
      if (conceptType == 'belong_to') {
        labeltype = '标准词';
      } else {
        labeltype = '原始词';
      }
      let nodedata = {
        id: random,
        labels: [labeltype],
        name: conceptName,
        properties: { class: '' },
      };
      let linksdata = {
        type: conceptType,
        source: random,
        target: String(node_ID),
      };
      links.push(linksdata);
      node.push(nodedata);
      myChart.setOption({
        series: [
          {
            links: SetLineData(links),
            data: SetSolidData(node),
          },
        ],
      });
      let obj = {
        edit_type: 'add',
        obj_type: 'node',
        node: {
          uid: random,
          name: conceptName,
          label: labeltype,
        },
        rel: {
          name: conceptType,
          source_uid: random,
          target_uid: U_ID,
        },
      };
      let arr = edit_list;
      arr.push(obj);
      this.setState({
        Addconcept: false,
        edit_list: arr,
      });
      form.resetFields();
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
  //保存
  blundeventpreservationeidet = () => {
    const { ProjectId, edit_list } = this.state;
    if (!edit_list.length) {
      message.warning('请编辑后在保存数据！');
      return;
    }
    let obj = {
      prj_id: ProjectId,
      edit_list: edit_list,
    };
    PreservationAtlas(obj).then(res => {
      if (res.result == 'success') {
        const myChart = echarts.init(this.refs.main);
        myChart.dispatchAction({
          type: 'unfocusNodeAdjacency',
        });
        let option = myChart.getOption().series[0];
        let node = option.data;
        let links = option.links;
        this.setState({
          isEidet: false,
          edit_list: [],
          triples: links.length,
          concepts: node.length,
        });
      } else {
        return;
      }
    });
  };
  blundeventFocuseRemove = () => {
    const { isEidet } = this.state;
    if (isEidet) {
      message.warning('编辑模式下无法返回初始化页;');
      return;
    }
    this.EndEditing();
    this.Setstateinnerhtml();
    this.setState({
      OverFocus: false,
    });
  };
  handleOk = () => {
    const { lintArray, nodeArray } = this.state;
    //结束编辑
    const myChart = echarts.init(this.refs.main);
    myChart.setOption({
      series: [
        {
          links: SetLineData(lintArray),
          data: SetSolidData(nodeArray),
        },
      ],
    });
    this.Setstateinnerhtml();
    this.setState({
      isEidet: false,
      diglogHidden: false,
      deleteProject: false,
      edit_list: [],
      triples: lintArray.length,
      concepts: nodeArray.length,
    });
  };
  blundeventeidetRemove = () => {
    const { edit_list } = this.state;
    if (edit_list.length) {
      Modal.confirm({
        title: '修改的信息尚未保存，您确定要离开吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          this.handleOk(); //确认按钮的回调方法，在下面
        },
        onCancel() {},
      });
      return;
    }
    this.Setstateinnerhtml();
    // //结束编辑
    this.setState({
      isEidet: false,
      diglogHidden: false,
      deleteProject: false,
      edit_list: [],
    });
  };
  BlundeventshowDialog = () => {
    const { dataIndex } = this.state;
    const myChart = echarts.init(this.refs.main);
    myChart.dispatchAction({
      type: 'unfocusNodeAdjacency',
    });
    myChart.dispatchAction({
      type: 'highlight',
      dataIndex: dataIndex,
    });
    this.setState({
      diglogHidden: false,
      AddRelationship: true,
    });
  };
  BlundeventPreservation = () => {
    this.setState({
      InputDialogShow: false,
      AddRelationship: false,
    });
  };
  BlundeventCancel = () => {
    const {
      SolidId, //概念ID
      RightBtnId,
      ClasName,
      U_ID,
      Uid,
      edit_list,
    } = this.state;
    let type = '',
      name = '';
    if (ClasName == '标准词') {
      type = 'belong_to';
      name = '属于';
    } else {
      type = 'is';
      name = '标准化为';
    }
    let obj = {
      name: name,
      source: String(SolidId),
      target: String(RightBtnId),
      type: type,
    };
    const myChart = echarts.init(this.refs.main);
    let option = myChart.getOption().series[0];
    let links = option.links;
    links.push(obj);
    myChart.setOption({
      series: [
        {
          links: SetLineData(links),
        },
      ],
    });
    let project = {
      edit_type: 'add',
      obj_type: 'rel',
      node: {
        uid: '',
        name: '',
        label: '',
      },
      rel: {
        name: type,
        source_uid: String(Uid),
        target_uid: String(U_ID),
      },
    };
    let str = edit_list;
    str.push(project);
    this.setState({
      InputDialogShow: false,
      AddRelationship: false,
      edit_list: str,
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
        const { trees, project_id, project_triples } = res.data;
        let nodesData = trees.nodes;
        let relsData = trees.rels;
        let count = nodesData.length;
        let relsDataCount = relsData.length;
        this.setState({
          lintData: relsData,
          nodesData: nodesData,
          lintArray: relsData,
          nodeArray: nodesData,
          ProjectId: project_id,
          triples: relsDataCount,
          concepts: count,
        });
        const myChart = this.refs.main ? echarts.init(this.refs.main) : null;
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
        window.onresize = function() {
          myChart.resize();
        };
      } else {
        return;
      }
    });
  };

  EndEditing = () => {
    const { Id } = this.state;
    const myChart = echarts.init(this.refs.main);
    ProjectDetail(Id).then(res => {
      if (res.result == 'success') {
        const { trees, project_triples, project_concepts } = res.data;
        let nodesData = trees.nodes;
        let relsData = trees.rels;
        let count = nodesData.length;
        let relsDataCount = relsData.length;
        this.setState({
          lintArray: relsData,
          nodeArray: nodesData,
          triples: relsDataCount,
          concepts: count,
        });
        myChart.setOption({
          series: [
            {
              links: SetLineData(relsData),
              data: SetSolidData(nodesData),
            },
          ],
        });
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
          zoom: 0.1,
          type: 'graph',
          layout: 'force',
          data: data,
          links: arr,
          roam: true,
          draggable: true,
          //  animation: true,
          //animationEasing: 'quinticInOut',
          edgeSymbol: [null, 'arrow'],
          edgeSymbolSize: [0, 10],
          labelLayout: {
            hideOverlap: true,
          },
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
            fontStyle: 'oblique',
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
          force: {
            repulsion: 1000,
            gravity: 0,
            edgeLength: 800,
            layoutAnimation: false,
            friction: 0.3,
            initLayout: 'none',
          },
          emphasis: {
            // scale:true,
            // focus:'adjacency',
            itemStyle: {
              borderColor: '#E261C1',
              color: '#E261C1',
              borderWidth: 5,
            },
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
        const { dataIndex } = params;
        let id = params.data.id; //id
        let uid = params.data.properties ? params.data.properties.uid : '';
        let source = params.data.source ? params.data.source : '';
        let target = params.data.target ? params.data.target : '';
        let type = params.data.type ? params.data.type : '';
        let sourceId = params.data.source ? params.data.source : '';
        if (params.data.labels) {
          let labels = params.data.labels[0];
          if (labels == '标准词') {
            that.setState(state => {
              return {
                balbelflage: true,
                dataIndex: dataIndex,
                RightBtnId: id,
              };
            });
          } else {
            that.setState(state => {
              return {
                balbelflage: false,
                dataIndex: dataIndex,
                RightBtnId: id,
              };
            });
          }
        }
        let solidName = params.data.name;
        let ClasName = params.data.labels ? params.data.labels[0] : '';
        let Typelabel = '';
        if (ClasName == '标准词') {
          Typelabel = '属于';
        } else {
          Typelabel = '标准化为';
        }
        if (id) {
          if (ClasName == '标准词') {
            Typelabel = '属于';
          } else {
            Typelabel = '标准化为';
          }
          that.setState(state => {
            return {
              diglogHidden: true, //是否展示右键弹出层
              node_ID: id, //弹出层数据对象
              U_ID: uid,
              x: params.event.offsetX,
              y: params.event.offsetY,
              ClasName: Typelabel,
              solidName: solidName,
              source: source,
              target: target,
              type: type,
            };
          });
        } else {
          that.setState(state => {
            return {
              deleteProject: true, //是否展示右键弹出层
              x: params.event.offsetX,
              y: params.event.offsetY,
              source: source,
              target: target,
              type: type,
              node_ID: sourceId,
            };
          });
        }
      }
    });
    // 点击元素
    myChart.getZr().on('click', function(params) {
      const { RightBtnId, dataIndex } = that.state;
      that.setState({
        diglogHidden: false,
        deleteProject: false,
      });
      if (!params.target) {
        myChart.setOption({
          series: [
            {
              focusNodeAdjacency: false,
            },
          ],
        });
        myChart.dispatchAction({
          type: 'unfocusNodeAdjacency',
        });
        that.Setstateinnerhtml();
        return;
      } else {
        const dataInd = params.target.dataIndex;
        let seriesdata = myChart.getOption().series
          ? myChart.getOption().series[0].data
          : null;
        let id = seriesdata[dataInd] ? seriesdata[dataInd].id : '';
        let Uid = seriesdata[dataInd] ? seriesdata[dataInd].properties.uid : '';
        let sourename = seriesdata[dataInd].name;
        if (that.state.AddRelationship) {
          if (RightBtnId == id) {
            message.warning('不能与自己添加关系请重新选择');
            return;
          }
          myChart.dispatchAction({
            type: 'downplay',
            dataIndex: dataIndex,
          });
          that.setState(state => {
            return {
              InputDialogShow: true,
              sourename: sourename,
              SolidId: id,
              Uid: Uid,
            };
          });
          myChart.setOption({
            series: [
              {
                focusNodeAdjacency: false,
              },
            ],
          });
          return;
        }
        if (!params.target.__cachedNormalStl) return;
        if (params.target.dataType == 'edge') {
          return;
        }
        myChart.dispatchAction({
          type: 'focusNodeAdjacency',
          dataIndex: dataInd,
        });
        that.GetPrijectStateDelete(id, sourename);
      }
    });
    // 拖动中
    myChart.on('mousemove', function(params) {});
    myChart.on('mouseup', function(params) {});
    // 关闭loding
    setTimeout(() => {
      myChart.hideLoading();
    }, 500);
  };
  blundOnFocus = () => {
    const { isEidet } = this.state;
    if (isEidet) {
      message.warning('编辑模式下无法搜索!');
      return;
    }
  };
  onSearch = val => {
    const { isEidet } = this.state;
    if (isEidet) {
      message.warning('编辑模式下无法搜索!');
      return;
    }
    this.setState({
      placeholderText: '请输入关键字',
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
        const { node_name, std_vocab, syn_vocab, path, properties } = data;
        this.setState({
          ConceptName: node_name,
          std_vocab,
          syn_vocab,
          path,
          properties: properties.class,
          codeData: properties.code,
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
      properties: '',
      codeData: '',
      AddRelationship: false,
    });
  };
  BlundeventDeleteRelationship = () => {
    //删除关系
    const { source, target, type, edit_list, node_ID } = this.state;
    this.setState({
      diglogHidden: false,
      deleteProject: false,
    });
    const myChart = echarts.init(this.refs.main);
    let linkss = myChart.getOption().series[0].links;
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
    let obj = {
      edit_type: 'del',
      obj_type: 'rel',
      node: {
        uid: '',
        name: '',
        label: '',
      },
      rel: {
        name: type,
        source_uid: this.selectProjectId(source),
        target_uid: this.selectProjectId(target),
      },
    };
    let arr = edit_list;
    arr.push(obj);
    this.setState({
      edit_list: arr,
    });
  };

  selectProjectId = Id => {
    // const myChart = echarts.init(this.refs.main);
    // let data = myChart.getOption().series[0].data;
    const { nodeArray } = this.state;
    let count = '';
    nodeArray.forEach(item => {
      if (item.id == Id) {
        count = item.properties.uid;
        return;
      }
    });
    return count;
  };
  blundeventRemoverelationship = () => {
    //删除概念
    const { edit_list } = this.state;
    this.setState({
      diglogHidden: false,
      deleteProject: false,
    });

    const myChart = echarts.init(this.refs.main);
    let linkss = myChart.getOption().series[0].links;
    const { node_ID, U_ID } = this.state;
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
    let obj = {
      edit_type: 'del',
      obj_type: 'node',
      node: {
        uid: U_ID,
        name: '',
        label: '',
      },
      rel: {
        name: '',
        source_uid: '',
        target_uid: '',
      },
    };
    let arr = edit_list;
    arr.push(obj);
    this.setState({
      edit_list: arr,
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
    // this.setState({
    //   nodeArray: data,
    // });
    myChart.setOption({
      series: [
        {
          data: SetSolidData(data),
          // data:data,
        },
      ],
    });
  };
  blundBlur = () => {
    const { project_id } = this.props;
    const form = this.formRef.current;
    const myChart = echarts.init(this.refs.main);
    let val = form.getFieldValue(['conceptName']);
    let option = myChart.getOption().series[0];
    let node = option.data;
    let flage = node.some(item => {
      if (item.name == val) {
        return true;
      }
    });
    if (flage) {
      message.info('概念名称已重复请重新填写！');
      this.setState({
        nameflage: true,
      });
    } else {
      this.setState({
        nameflage: false,
      });
    }
    queryConcept({
      project_id,
      concept_name: val,
    }).then(res => {
      if (res.result == 'success') {
        let data = res.data;
        if (data.length) {
          message.info('概念名称已重复请重新填写！');
          this.setState({
            nameflage: true,
          });
        } else {
          this.setState({
            nameflage: false,
          });
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
