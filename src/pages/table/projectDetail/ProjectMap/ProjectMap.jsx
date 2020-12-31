import React, { Component } from 'react';
import Style from './index.less';
import * as echarts from 'echarts';
import Dialog from '@/components/DiaLog/index';
import { Input, Button } from 'antd';
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
  };
  render() {
    const {
      diglogHidden, //是否展示右键弹出层
      diglogItems, //弹出层数据对象
      x,
      y,
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
            <Dialog
              item={diglogItems}
              hidden={diglogHidden}
              x={x}
              y={y}
            ></Dialog>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const myChart = echarts.init(this.refs.main);
    myChart.showLoading();
    document.oncontextmenu = function() {
      return false;
    };
    this.myEcharts(SolidData, myChart, lint);
  }
  blundmapbigadd = v => {
    const myChart = echarts.init(this.refs.main);
    let currentZoom = myChart.getOption().series[0].zoom;
    console.log(currentZoom);
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
  myEcharts = (data, myChart, arr) => {
    let that = this;
    const { eachartBigorSmall } = this.state;
    var categories = [];

    data.forEach(function(node, index) {
      node.itemStyle = null;
      node.dataIndex = index;
      // node.fixed = true;
      // node.symbolSize /= 1.5;
      node.label = {
        show: node.symbolSize > 1,
      };
      //  node.category = node.attributes.modularity_class;
      // node.category = node.name;
    });

    myChart.setOption({
      tooltip: {
        formatter: function(x) {
          return x.data.name; //设置提示框的内容和格式 节点和边都显示name属性
        },
      },
      toolbox: {
        show: true, //是否显示工具箱
        feature: {
          magicType: ['line', 'bar'], // 图表类型切换，当前仅支持直角系下的折线图、柱状图转换，上图icon左数6/7，分别是切换折线图，切换柱形图
          restore: true, // 还原，复位原始图表，
          saveAsImage: true, // 保存为图片，
        },
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
            // initLayout:'circular',
            repulsion: 200,
            gravity: 0.1,
            edgeLength: 300,
            layoutAnimation: true,
            friction: 0.3,
            initLayout: 'none',
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
      console.log(params.event.offsetX, params.event.offsetY);
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
  onSearch = () => {};
}
// 135201711712016086
