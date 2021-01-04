import React, { Component } from 'react';
import ProjectMap from './ProjectMap/ProjectMap'; //项目图谱页面
import Graph from '@/components/eachartstable/graph';
import ProjectOverview from './ProjectOverview/ProjectOverview'; //项目概览页面

import Styles from './index.less';
import { Tabs } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
export default class projectDetail extends Component {
  render() {
    return (
      <div className={Styles.projectBox}>
        <div className={Styles.Header}>
          <ArrowLeftOutlined onClick={() => this.blundeventreturn()} /> 项目详情
        </div>
        <div className={Styles.Main}>
          <Tabs
            defaultActiveKey="1"
            onChange={this.callback}
            centered={true}
            size={'default'}
            tabBarGutter={100}
          >
            <TabPane tab="项目概览" key="1">
              <ProjectOverview {...this.props} />
            </TabPane>
            <TabPane tab="项目图谱" key="2">
              <ProjectMap {...this.props} />
              {/* <Graph/> */}
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
  blundeventreturn = () => {
    this.props.history.push('/table/projectManagement');
  };
  callback = val => {
    console.log(val);
  };
}
