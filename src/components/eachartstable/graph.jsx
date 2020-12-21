import React, { Component } from 'react';
import Style from './eacharts.less';
import * as echarts from 'echarts';
import graphData from '../../pages/table/application/mock.js';
import graphLinks from '../../pages/table/application/data';
import Dialog from '../DiaLog/index';

export default class graph extends Component {
  state = {
    diglogHidden: false, //是否展示右键弹出层
    diglogItems: {}, //弹出层数据对象
    x: 0,
    y: 0,
    eachartBigorSmall: 1,
  };
  render() {
    const {
      diglogHidden, //是否展示右键弹出层
      diglogItems, //弹出层数据对象
      x,
      y,
    } = this.state;
    return (
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
            onClick={() => this.blundmapbigadd()}
          >
            +
          </div>
          <div
            className={Style.promapRemove}
            onClick={() => this.blundmapbigrenove()}
          >
            -
          </div>
          <div className={Style.Graphwrapper} id="main" ref="main"></div>
        </div>
        <Dialog item={diglogItems} hidden={diglogHidden} x={x} y={y}></Dialog>
      </div>
    );
  }
  componentDidMount() {
    const myChart = echarts.init(this.refs.main);
    myChart.showLoading();
    document.oncontextmenu = function() {
      return false;
    };
    this.myEcharts(graphData, myChart, this);
  }
  blundmapbigadd = () => {
    console.log(1);
    this.setState({
      eachartBigorSmall: this.state.eachartBigorSmall + 1,
    });
  };
  blundmapbigrenove = () => {};
  myEcharts = (data, myChart) => {
    let that = this;
    const { eachartBigorSmall } = this.state;
    var categories = [];
    for (var i = 0; i < 9; i++) {
      categories[i] = {
        name: '类目' + i,
      };
    }
    data.forEach(function(node) {
      node.itemStyle = null;
      node.value = node.symbolSize;
      node.fixed = true;
      node.symbolSize /= 1.5;
      node.label = {
        show: node.symbolSize > 1,
      };
      node.category = node.attributes.modularity_class;
    });

    myChart.setOption({
      tooltip: {},
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      animation: false,
      series: [
        {
          center: [0, 0],
          zoom: eachartBigorSmall,
          type: 'graph',
          layout: 'force',
          data,
          links: graphLinks,
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
            repulsion: 1000,
            gravity: 0.1,
            edgeLength: 400,
            layoutAnimation: false,
            friction: 0.3,
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
}
