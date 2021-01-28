import React, { useState, useEffect } from 'react';
import styles from './application.less';
import { Tabs, Form, Tag, Breadcrumb, Modal, Message } from 'antd';
import { connect } from 'umi';
import ColumnLayout from '@/components/ColumnLayout';
import ContentCard from '@/components/ContentCard';
import appImg from '../../../assets/layouticon/icon_search1.png';
import moment from 'moment';
const { CheckableTag } = Tag;
const { TabPane } = Tabs;
//mock数据
const listData = [
  {
    appName: '归一查询',
    appIntroduction: '在公开的项目中查询归一词并查看图谱',
    coverUrl: appImg,
    appId: 1,
  },
  {
    appName: '敬请期待~',
    appIntroduction: '',
    coverUrl: appImg,
    appId: 2,
  },
];
function Application(props) {
  const { editData, history, onInit } = props;
  const {
    query: { uid },
  } = history.location;

  const [form] = Form.useForm();

  useEffect(() => {
    onInit();
  }, [editData]);
  const skipDetailLecture = appId => {
    if (appId === 2) {
      // Modal.info({
      //   title: '提示',
      //   content: '敬请期待后续的应用项目~',
      //   okText: '知道了',
      // });
      Message.info('敬请期待后续的应用项目~');
      return;
    }
    if (!appId) appId = 1;
    //history.push('/table/checkAppDetail/' + appId);
    window.open('#/table/checkAppDetail/' + appId);
  };
  const changeItemLecture = (record, index) => {
    return (
      <div>
        <ContentCard
          imgUrl={record.coverUrl}
          appName={record.appName}
          appIntroduction={record.appIntroduction}
          onClick={skipDetailLecture.bind(this, record.appId)}
        />
      </div>
    );
  };
  return (
    <div className={styles.content}>
      {/* <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item
          href="#"
          onClick={() => {
            history.push('/table/homePage');
          }}
        >
          <span>首页</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>应用</Breadcrumb.Item>
      </Breadcrumb> */}
      <div style={{ marginTop: '40px' }}>
        <ColumnLayout
          list={listData}
          renderItem={changeItemLecture}
          column={4}
          direction={'horizontal'}
        />
      </div>
    </div>
  );
}
const mapStateProps = ({}) => {
  return {};
};
const mapDispatchProps = dispatch => {
  return {
    onInit: () => {
      dispatch({ type: 'detail/onInit' });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(Application);
