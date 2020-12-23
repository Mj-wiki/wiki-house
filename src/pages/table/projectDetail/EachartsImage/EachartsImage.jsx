import React, { Component } from 'react';
import * as echarts from 'echarts';
import graphData from '../../../table/application/mock';
import graphLinks from '../../../table/application/data';

export default class graph extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          id="main"
          ref="main"
          style={{ width: '100%', height: '100%' }}
        ></div>
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
    });
    // 点击元素
    myChart.getZr().on('click', function(params) {
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
