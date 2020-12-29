import React, { Component } from 'react';
import Style from './eacharts.less';
import ReactEcharts from 'echarts-for-react';
import { initEachartsData } from '@/api/Project.jsx';
export default class componentName extends Component {
  state = {
    X: [],
    xState: [],
    NUmberBig: '',
  };
  render() {
    const { X, xState, NUmberBig } = this.state;
    const option = {
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
          // lineHeight: -30
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
      yAxis: {
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
          lineHeight: 100,
          color: '#465054',
          fontWeight: 'bolder',
          fontSize: 14,
        },
      },
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
    };
    return (
      <div className={Style.eachwrapper}>
        <ReactEcharts
          option={option}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    );
  }
  componentDidMount() {
    initEachartsData().then(res => {
      if (res.result === 'success') {
        const data = res.data;
        const Arrlist = [];
        const timeX = Object.values(res.data);
        const NUmberBig = Math.max(...timeX); //左侧区域数
        for (const key in data) {
          Arrlist.push(key);
        }
        this.setState({
          X: Arrlist,
          xState: timeX,
          NUmberBig: 100,
        });
      } else {
        return;
      }
    });
  }
}
