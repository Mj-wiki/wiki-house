import React, { useEffect, useRef } from 'react';
import { Modal, Card } from 'antd';
import styles from './index.less';
import ReactEcharts from 'echarts-for-react';
//import echartTheme from '../echartTheme'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

const LoginLogs = props => {
  const { visible, title, onOk, onCancel, data } = props;
  const chartRef = useRef(null);
  useEffect(() => {
    if (JSON.stringify(data) == '{}') {
      return;
    }
  }, [data]);

  const getOption = () => {
    let option = {
      title: {
        text: '账号有效期内该账号每天的登录次数',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: data['xData'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '超级管理员',
          type: 'line',
          data: data['yData'],
        },
      ],
    };
    return option;
  };
  return (
    <div className={styles.wrap}>
      <Modal
        title={title}
        visible={visible}
        centered={true}
        onOk={() => {
          onOk();
        }}
        onCancel={() => {
          onCancel();
        }}
      >
        <div id="container" ref={chartRef}>
          <Card title="登录次数图谱">
            <ReactEcharts
              option={getOption()}
              theme="后台登录次数"
              notMerge={true}
              lazyUpdate={true}
              style={{
                height: 500,
              }}
            />
          </Card>
        </div>
      </Modal>
    </div>
  );
};
export default LoginLogs;
