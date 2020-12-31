import React, { Component } from 'react';
import Style from './index.less';
import * as echarts from 'echarts';
import { Input, Button } from 'antd';
import {
  CloseSquareOutlined,
  PlusOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import InputDialog from '@/components/Addproject/Addproject';
import SolidData from '../../../../../mock/solide';
import lint from '../../../../../mock/lint';
const { Search } = Input;
export default class ProjectMap extends Component {
  state = {
    diglogHidden: false, //是否展示右键弹出层
    diglogItems: {}, //弹出层数据对象
    x: 0,
    y: 0,
    eachartBigorSmall: 1,
    lintData: [],
    InputDialogShow: false,
  };
  render() {
    const {
      diglogHidden, //是否展示右键弹出层
      diglogItems, //弹出层数据对象
      x,
      y,
      InputDialogShow,
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
            <div className={Style.atlasTop}>
              <Button type="primary">编辑模式</Button>
              <Search
                placeholder="输入概念名"
                onSearch={this.onSearch}
                style={{ width: 200 }}
              />
            </div>
            <div className={Style.Graphwrapper} id="main" ref="main"></div>
            {diglogHidden ? (
              <div
                className={Style.editEacharts}
                style={{ top: y + 80 + 'px', left: x + 'px' }}
              >
                <p className={Style.editslide}>
                  {' '}
                  <CloseSquareOutlined />
                  聚焦
                </p>
                <p
                  className={Style.editslide}
                  onClick={() => this.BlundeventshowDialog()}
                >
                  {' '}
                  <PlusOutlined /> 添加关系
                </p>
                <p className={Style.editslide}>
                  {' '}
                  <DeleteOutlined />
                  删除概念
                </p>
              </div>
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
        />
      </div>
    );
  }
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
    const myChart = echarts.init(this.refs.main);
    myChart.showLoading();
    document.oncontextmenu = function() {
      return false;
    };

    let solidda = SolidData.map(item => {
      if (item.labels == '标准词') {
        (item.attributes = { modularity_class: 0 }), (item.symbolSize = 50);
        item.itemStyle = { normal: { color: '#BD731A' } };
      } else {
        (item.attributes = { modularity_class: 1 }), (item.symbolSize = 30);
        item.itemStyle = { normal: { color: '#508F97' } };
      }
      return item;
    });
    let lintData = lint.map(item => {
      item.lineStyle = { normal: { width: 3 } };
      return item;
    });
    this.myEcharts(solidda, myChart, lintData);
  }
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
        // show: true,
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
          focusNodeAdjacency: true,
          draggable: true,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 0,
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
      console.log(params);
      if (typeof params === 'object') {
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
      that.setState(state => {
        return {
          diglogHidden: false, //是否展示右键弹出层
          diglogItems: params, //弹出层数据对象
          x: params.event.offsetX,
          y: params.event.offsetY,
        };
      });
    });
    // 拖动中
    myChart.on('mousemove', function(params) {});
    // 松开元素
    myChart.on('mouseup', function(params) {
      // if (myChart.getOption()?.series?.[0].data[params.dataIndex] == undefined)
      //   return;
      // var optionS = myChart.getOption();
      // if (myChart.getOption()) {
      //   optionS.series[0].data[params.dataIndex].x = params.event.offsetX;
      //   optionS.series[0].data[params.dataIndex].y = params.event.offsetY;
      //   optionS.series[0].data[params.dataIndex].fixed = true;
      // }
      // myChart.setOption(optionS);
    });

    // 关闭loding
    setTimeout(() => {
      myChart.hideLoading();
    }, 1200);
  };
  onSearch = () => {};
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
}
// 135201711712016086
