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
export default class ProjectOverview extends Component {
  render() {
    return (
      <div className={Style.OverViewWrapper}>
        <div className={Style.OverViewLeft}>
          <h1 className={Style.overviewtile}>项目名称</h1>
          <p className={Style.overTime}>最近由张三修改于 2020/11/23</p>
          <div className={Style.introduction}>
            放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方放项目简介的地方
          </div>
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
              <p>2333个</p>
            </div>
            <div>
              <div className={Style.Concep}>
                <ApiTwoTone className={Style.icon} />
                <p>三元组数</p>
              </div>
              <p>2323个</p>
            </div>
          </div>
          <div className={Style.linheight}>
            <div className={Style.zuzhi}>
              <AlertTwoTone className={Style.icon} />
              <p className={Style.postionright}>组织</p>
            </div>
            <p className={Style.bordertop}>组织名称</p>
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
            <p className={Style.bordertop}>所属领域</p>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* <HddTwoTone  className={Style.icon}/> 
           <p>概念数</p>

           <ApiTwoTone /> 三元组数 */
}
