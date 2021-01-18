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
import { connect } from 'umi';
import { SetSolidData, SetLineData } from '@/utils/Config.js';
class ProjectOverview extends Component {
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
            <p className={Style.bordertop}>公开</p>
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
    if (this.props.match.params) {
      const { ID } = this.props.match.params;
      this.initPrijectId(ID);
      this.setState({
        Id: ID,
      });
    }
  }
  initPrijectId = id => {
    const { changeProjectState } = this.props;
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
          project_id,
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
        });
        changeProjectState('changeProjectState', {
          project_fieldcode,
          project_name,
          project_id,
        });
        let nodesData = trees.nodes;
        let relsData = trees.rels;
        const myChart = this.refs.main ? echarts.init(this.refs.main) : null;
        document.oncontextmenu = function() {
          return false;
        };
        if (myChart) {
          myChart.showLoading();
          this.myEcharts(
            SetSolidData(nodesData),
            myChart,
            SetLineData(relsData),
          );
        }
      } else {
        return;
      }
    });
  };
  myEcharts = (data, myChart, Lindein) => {
    if (!data && !Lindein) {
      return;
    }
    const { SetTapIndex } = this.props;
    data.forEach(function(node, index) {
      node.dataIndex = index;
      node.value = node.symbolSize;
      node.symbolSize /= 1.5;
      node.label = {
        show: node.symbolSize > 1,
      };
      // node.category = node.attributes.modularity_class;
      // node.category = node.properties.code;
    });

    myChart.setOption({
      tooltip: {
        formatter: function(x) {
          return x.data.name; //设置提示框的内容和格式 节点和边都显示name属性
        },
      },
      legend: {
        height: '100%',
        width: '100%',
      },
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
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [0, 10],
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
    // var img = new Image();
    // let image = myChart.getDataURL()
    // console.log(image)
    myChart.getZr().on('click', function(params) {
      SetTapIndex();
    });
    setTimeout(() => {
      myChart.hideLoading();
    }, 1500);
  };
  bluneventimg = () => {
    const myChart = echarts.init(this.refs.main);
    let image = myChart.getDataURL();
    console.log(image);
  };
}

const mapStateProps = ({ TapIndex }) => {
  return {};
};
const mapDispatchProps = dispatch => {
  return {
    changeProjectState(params, val) {
      dispatch({ type: 'TapIndex/changeProjectStates', params, val });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(ProjectOverview);
