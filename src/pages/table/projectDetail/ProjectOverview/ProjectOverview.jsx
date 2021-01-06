import React, { Component } from 'react';
import {
  FundTwoTone,
  HddTwoTone,
  ApiTwoTone,
  AlertTwoTone,
  UnlockTwoTone,
  TrophyTwoTone,
} from '@ant-design/icons';
import Style from './index.less';
import * as echarts from 'echarts';
import { ProjectDetail } from '@/api/Project.jsx';
import { transformationTime } from '@/utils/dateUtil.js';
export default class ProjectOverview extends Component {
  state = {
    project_code: '',
    project_fieldcode: '',
    project_fieldname: '',
    project_introduction: '',
    project_name: '',
    create_user: '',
    update_user: '',
  };
  render() {
    const {
      project_code,
      project_fieldcode,
      project_introduction,
      project_name,
      update_time,
      create_user,
      update_user,
      project_concepts,
      project_triples,
    } = this.state;
    return (
      <div className={Style.OverViewWrapper}>
        <div className={Style.OverViewLeft}>
          <h1 className={Style.overviewtile}>{project_name}</h1>
          <p className={Style.overTime}>
            最近由{create_user || update_user}修改于{' '}
            {transformationTime(update_time)}
          </p>
          <div className={Style.introduction}>{project_introduction}</div>
          <div className={Style.imageTitle}>
            <FundTwoTone />
            <span className={Style.imagespan}>图谱</span>
          </div>
          <div className={Style.eachartsbox}>
            <div style={{ width: '100%', height: '100%' }}>
              <div
                id="main"
                ref="main"
                style={{ width: '100%', height: '100%' }}
              ></div>
            </div>
          </div>
        </div>
        <div className={Style.OverViewRight}>
          <div className={Style.ConceptNumber}>
            <div>
              <div className={Style.Concep}>
                <HddTwoTone className={Style.icon} />
                <p>概念数</p>
              </div>
              <p>{project_concepts}个</p>
            </div>
            <div>
              <div className={Style.Concep}>
                <ApiTwoTone className={Style.icon} />
                <p>三元组数</p>
              </div>
              <p>{project_triples}个</p>
            </div>
          </div>
          <div className={Style.linheight}>
            <div className={Style.zuzhi}>
              <AlertTwoTone className={Style.icon} />
              <p className={Style.postionright}>组织</p>
            </div>
            <p className={Style.bordertop}>{project_code}</p>
          </div>
          <div className={Style.linheight}>
            <div className={Style.zuzhi}>
              <UnlockTwoTone className={Style.icon} />
              <p className={Style.postionright}>隐私</p>
            </div>
            <p className={Style.bordertop}>公开/私密</p>
          </div>
          <div className={Style.linheight}>
            <div className={Style.zuzhi}>
              <TrophyTwoTone className={Style.icon} />
              <p className={Style.postionright}>领域</p>
            </div>
            <p className={Style.bordertop}>{project_fieldcode}</p>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    if (this.props.location.state) {
      const { id } = this.props.location.state;
      this.initPrijectId(id);
      this.setState({
        Id: id,
      });
    }
  }
  initPrijectId = id => {
    ProjectDetail(id).then(res => {
      if (res.result == 'success') {
        const {
          project_code,
          project_fieldcode,
          project_fieldname,
          project_introduction,
          project_name,
          update_time,
          create_user,
          update_user,
          project_concepts,
          project_triples,
          trees,
        } = res.data;
        this.setState({
          project_code: project_code,
          project_fieldcode: project_fieldcode,
          project_fieldname: project_fieldname,
          project_introduction: project_introduction,
          project_name: project_name,
          update_time: update_time,
          create_user: create_user,
          update_user: update_user,
          project_concepts,
          project_triples,
          // nodesData: trees.nodes,
          // relsData: trees.rels
        });
        let nodesData = trees.nodes;
        let relsData = trees.rels;
        const myChart = echarts.init(this.refs.main);
        myChart.showLoading();
        document.oncontextmenu = function() {
          return false;
        };
        let solidda = nodesData.map(item => {
          if (item.labels == '标准词') {
            (item.attributes = { modularity_class: 0 }), (item.symbolSize = 50);
            item.itemStyle = { normal: { color: '#BD731A' } };
          } else {
            (item.attributes = { modularity_class: 1 }), (item.symbolSize = 30);
            item.itemStyle = { normal: { color: '#508F97' } };
          }
          return item;
        });
        let lintData = relsData.map(item => {
          item.lineStyle = { normal: { width: 3 } };
          return item;
        });

        this.myEcharts(solidda, myChart, lintData);
      } else {
        return;
      }
    });
  };
  myEcharts = (data, myChart, Lindein) => {
    const { SetTapIndex } = this.props;
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
      tooltip: {
        formatter: function(x) {
          return x.data.name; //设置提示框的内容和格式 节点和边都显示name属性
        },
      },
      toolbox: {},
      grid: {
        height: '100%',
        width: '100%',
        // show: true,
      },
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      animation: false,
      series: [
        {
          // center: [0, 0],
          zoom: 0.3,
          type: 'graph',
          layout: 'force',
          data,
          links: Lindein,
          roam: true,
          focusNodeAdjacency: false,
          draggable: true,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 0,
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
            repulsion: 600,
            gravity: 0.1,
            edgeLength: 300,
            layoutAnimation: false,
            friction: 0.3,
            initLayout: 'none',
          },
          emphasis: {
            lineStyle: {
              width: 5,
            },
          },
        },
      ],
    });
    myChart.getZr().on('click', function(params) {
      SetTapIndex();
    });
    setTimeout(() => {
      myChart.hideLoading();
    }, 1500);
  };
}
