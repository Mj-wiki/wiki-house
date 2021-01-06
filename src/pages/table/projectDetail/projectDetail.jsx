import React, { Component } from 'react';
import ProjectMap from './ProjectMap/ProjectMap'; //项目图谱页面
// import Graph from '@/components/eachartstable/graph';
import ProjectOverview from './ProjectOverview/ProjectOverview'; //项目概览页面
import { connect } from 'umi';
import Styles from './index.less';
import { Tabs } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
class projectDetail extends Component {
  state = {
    TapIndex: '1',
  };
  render() {
    const { TapIndex } = this.state;
    return (
      <div className={Styles.projectBox}>
        <div className={Styles.Header}>
          <ArrowLeftOutlined onClick={() => this.blundeventreturn()} /> 项目详情
        </div>
        <div className={Styles.Main}>
          <Tabs
            defaultActiveKey="1"
            activeKey={TapIndex}
            onChange={this.callback}
            centered={true}
            size={'default'}
            tabBarGutter={100}
          >
            <TabPane tab="项目概览" key="1">
              <ProjectOverview {...this.props} SetTapIndex={this.SetTapIndex} />
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
    this.setState({
      TapIndex: val,
    });
  };
  SetTapIndex = () => {
    this.setState({
      TapIndex: '2',
    });
  };
}
const mapStateProps = ({ TapIndex }) => {
  return {};
};
const mapDispatchProps = dispatch => {
  return {};
};
export default connect(mapStateProps, mapDispatchProps)(projectDetail);
