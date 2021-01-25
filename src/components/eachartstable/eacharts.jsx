import React, { Component } from 'react';
import Style from './eacharts.less';
import * as echarts from 'echarts';
// import ReactEcharts from 'echarts-for-react';
import { initEachartsData } from '@/api/Project.jsx';
export default class componentName extends Component {
  render() {
    return (
      <div
        className={Style.eachwrapper}
        id="main"
        ref="main"
        style={{ width: '100%', height: '100%' }}
      ></div>
    );
  }
  componentDidMount() {
    const myChart = this.refs.main ? echarts.init(this.refs.main) : null;
    initEachartsData().then(res => {
      if (res?.result === 'success') {
        const data = res.data;
        const Arrlist = [];
        const timeX = Object.values(res.data);
        const NUmberBig = Math.max(...timeX); //左侧区域数
        let NUmberBigs = Math.ceil(NUmberBig / 10) * 10;
        for (const key in data) {
          Arrlist.push(key);
        }
        this.initEacharts(myChart, Arrlist, timeX, NUmberBigs);
      } else {
        return;
      }
    });
    window.onresize = function() {
      myChart.resize();
    };
  }
  initEacharts = (myChart, X, xState, NUmberBig) => {
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: X,
        axisLabel: {
          color: '#465054',
        },
        axisTick: {
          show: false,
        },
        name: '时间',
        nameLocation: 'middle',
        nameTextStyle: {
          fontStyle: 'normal',
          verticalAlign: 'bottom',
          color: '#526572',
          fontWeight: 'bolder',
          fontSize: 14,
        },
        nameGap: 42.5,
      },
      grid: {
        height: '76%',
        width: '90%',
        backgroundColor: '#fff',
        show: true,
        top: '5%',
        left: '8%',
      },
      yAxis: [
        {
          type: 'value',
          name: '项目数',
          nameLocation: 'middle',
          min: 0,
          max: NUmberBig,
          axisLabel: {
            margin: 15,
            color: '#465054',
          },
          axisTick: {
            show: false,
          },
          nameTextStyle: {
            fontStyle: 'normal',
            verticalAlign: 'bottom',
            lineHeight: 70,
            color: '#465054',
            fontWeight: 'bolder',
            fontSize: 14,
          },
          nameGap: 0,
        },
      ],
      series: [
        {
          data: xState,
          type: 'line',
          itemStyle: {
            color: '#4469BC',
            borderWidth: 5,
            borderType: 'solid',
          },
        },
      ],
    });
  };
}
