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
import EachartsImage from '../EachartsImage/EachartsImage';
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
      project_fieldname,
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
            <EachartsImage />
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
    const { id } = this.props.location.state;
    if (id && this.props.location.state) {
      this.initPrijectId(id);
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
      } else {
        return;
      }
    });
  };
}
