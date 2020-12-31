import React, { Component } from 'react';
import * as echarts from 'echarts';
import SolidData from '../../../../../mock/solide';
import Lindein from '../../../../../mock/lint';
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
    let lintData = Lindein.map(item => {
      item.lineStyle = { normal: { width: 3 } };
      return item;
    });
    this.myEcharts(solidda, myChart, lintData);
  }

  blundmapbigrenove = () => {};
  myEcharts = (data, myChart, Lindein) => {
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
      tooltip: {},
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      animation: false,
      legendHoverLink: true,
      series: [
        {
          zoom: 0.1,
          type: 'graph',
          layout: 'force',
          data,
          links: Lindein,
          roam: true,
          focusNodeAdjacency: true,
          draggable: true,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 100,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
          },
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
            curveness: 1,
          },
          force: {
            // initLayout:'circular',
            repulsion: 1000,
            gravity: 0.1,
            edgeLength: 2000,
            layoutAnimation: false,
            friction: 1,
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
