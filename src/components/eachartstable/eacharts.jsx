import React, { Component } from 'react';
import Style from './eacharts.less';
import ReactEcharts from 'echarts-for-react';
export default class componentName extends Component {
  state = {
    option: {
      xAxis: {
        type: 'category',
        data: [
          '2020.12',
          '2020.12',
          '2020.12',
          '2020.12',
          '2020.12',
          '2020.12',
          '2020.12',
          '2020.12',
          '2020.12',
          '2020.12',
          '2020.12',
          '2020.12',
        ],
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
        max: 6000,
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
          data: [
            220,
            932,
            901,
            934,
            5290,
            1330,
            1320,
            820,
            932,
            901,
            934,
            1290,
          ],
          type: 'line',
          itemStyle: {
            color: '#4469BC',
            borderWidth: 5,
            borderType: 'solid',
          },
        },
      ],
    },
  };
  render() {
    const { option } = this.state;
    return (
      <div className={Style.eachwrapper}>
        <ReactEcharts
          option={option}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    );
  }
}
