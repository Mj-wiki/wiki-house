import React, { useState, useEffect } from 'react';
import EachartsTable from '../../../components/eachartstable/eacharts';
import styles from './homePage.less';
import {
  ProfileOutlined,
  HourglassOutlined,
  FormatPainterOutlined,
} from '@ant-design/icons';

import { connect } from 'umi';
const Blundeventcount = () => {
  location.reload();
};
function TableList(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.auto}>
        <div className={styles.autotop}>
          <div className={styles.eachartleft}>
            <div className={styles.eacharslide}>
              <div className={styles.eachartsimg}>
                <FormatPainterOutlined />
              </div>
              <div className={styles.eacharstext}>
                <p onClick={() => Blundeventcount()}>项目总数</p>
                <p className={styles.eachrsp}>123个</p>
              </div>
            </div>
            <div className={styles.eacharslide}>
              {' '}
              <div className={styles.eachartsimg}>
                <HourglassOutlined />
              </div>
              <div className={styles.eacharstext}>
                <p>三元组数</p>
                <p className={styles.eachrsp}>21万9878个</p>
              </div>
            </div>
            <div className={styles.eacharslide}>
              {' '}
              <div className={styles.eachartsimg}>
                <ProfileOutlined />
              </div>
              <div className={styles.eacharstext}>
                <p>概念总数</p>
                <p className={styles.eachrsp}>20万1288个</p>
              </div>
            </div>
          </div>
          <div className={styles.eachartright}>
            <EachartsTable />
            <p className={styles.textadd}>项目数增涨图</p>
          </div>
        </div>
        <div className={styles.autobottom}>
          <div className={styles.bottomslide}>
            <div className={styles.slidetop}>归一项目</div>
            <div className={styles.xiangmu}>
              <div className={styles.xiangmuscroll}>
                <div className={styles.xiangmuwrapper}>
                  <div>归一项目1</div>
                  <div>
                    <span className={styles.colorgreen}>1万2千</span> 个概念
                  </div>
                </div>
                <div className={styles.xiangmuwrapper}>
                  <div>归一项目1</div>
                  <div>
                    <span className={styles.colorgreen}>1万2千</span> 个概念
                  </div>
                </div>
                <div className={styles.xiangmuwrapper}>
                  <div>归一项目1</div>
                  <div>
                    <span className={styles.colorgreen}>1万2千</span> 个概念
                  </div>
                </div>
                <div className={styles.xiangmuwrapper}>
                  <div>归一项目1</div>
                  <div>
                    <span className={styles.colorgreen}>1万2千</span> 个概念
                  </div>
                </div>
                <div className={styles.xiangmuwrapper}>
                  <div>归一项目1</div>
                  <div>
                    <span className={styles.colorgreen}>1万2千</span> 个概念
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomslide}>
            <div className={styles.slidetop}>我的应用</div>
          </div>
          <div className={styles.bottomslide}>
            <div className={styles.slidetop}>任务通知</div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateProps = ({ list }) => {
  return {};
};
const mapDispatchProps = dispatch => {
  return {};
};
export default connect(mapStateProps, mapDispatchProps)(TableList);
