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
import { ProjectDetail, uploadImg, updatePrijectImg } from '@/api/Project.jsx';
import { transformationTime } from '@/utils/dateUtil.js';
import { connect } from 'umi';
import { SetSolidData, SetLineData } from '@/utils/Config.js';
import { getNumAndUnit } from '@/utils/numberUtil';
import HomeLoading from '../../../../components/homeLoading/homeLoading';
class ProjectOverview extends Component {
  state = {
    project_code: '',
    project_fieldcode: '',
    project_fieldname: '',
    project_introduction: '',
    project_name: '',
    create_user: '',
    update_user: '',
    Image: '',
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
      <div className={Style.OverViewWrapper} ref="wrapper">
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
          <div className={Style.eachartsbox} ref="box">
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
              {/* <p>{project_concepts}个</p> */}
              <div className={Style.textLeft}>
                {project_concepts ? (
                  <span>{`${getNumAndUnit(project_concepts, 0).num}${
                    getNumAndUnit(project_concepts, 0).unit
                  }${getNumAndUnit(project_concepts, 0).num1}${
                    getNumAndUnit(project_concepts, 0).unit1
                  }${getNumAndUnit(project_concepts, 0).num2}${
                    getNumAndUnit(project_concepts, 0).unit2
                  }`}</span>
                ) : (
                  // <span>加载中···</span>
                  <div className={Style.homeLoading}>
                    {' '}
                    <span>加载中</span> <HomeLoading />
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className={Style.Concep}>
                <ApiTwoTone className={Style.icon} />
                <p>三元组数</p>
              </div>
              {/* <p>{project_triples}个</p> */}
              <div className={Style.textLeft}>
                {project_triples ? (
                  <span>{`${getNumAndUnit(project_triples, 0).num}${
                    getNumAndUnit(project_triples, 0).unit
                  }${getNumAndUnit(project_triples, 0).num1}${
                    getNumAndUnit(project_triples, 0).unit1
                  }${getNumAndUnit(project_triples, 0).num2}${
                    getNumAndUnit(project_triples, 0).unit2
                  }`}</span>
                ) : (
                  <div className={Style.homeLoading}>
                    {' '}
                    <span>加载中</span> <HomeLoading />
                  </div>
                )}
              </div>
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
          project_photo,
        } = res.data;
        this.setState({
          Image: project_photo,
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
    let that = this;
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
          zoom: 0.2,
          type: 'graph',
          layout: 'force',
          data,
          links: Lindein,
          roam: true,
          focusNodeAdjacency: false,
          animation: true,
          animationEasing: 'quinticInOut',
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
    }, 1000);
    setTimeout(() => {
      let pageData = myChart.getConnectedDataURL({
        pixelRatio: 2,
        backgroundColor: '#fff',
      });
      that.bluneventimg(pageData);
    }, 1500);
  };
  bluneventimg = base64String => {
    const { Image } = this.state;
    if (Image) return;
    let bytes = window.atob(base64String.split(',')[1]);
    let array = [];
    for (let i = 0; i < bytes.length; i++) {
      array.push(bytes.charCodeAt(i));
    }
    let blob = new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    // 生成FormData对象
    let fd = new FormData();
    // 注：此处 file 应和后台接收参数匹配
    fd.append('file', blob, Date.now() + '.jpg');
    fd.append('contentTypeCode', '36');

    this.uploadImg(fd);
  };
  uploadImg = fd => {
    const { Id } = this.state;
    uploadImg(fd).then(res => {
      if (res.code == 0) {
        const { fileUrl, envPath } = res.data;
        let url = envPath + '/' + fileUrl;
        updatePrijectImg({
          photo: url,
          id: Id,
        }).then(res => {
          if (res.result == 'success') {
          } else {
            return;
          }
        });
      } else {
        return;
      }
    });
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
