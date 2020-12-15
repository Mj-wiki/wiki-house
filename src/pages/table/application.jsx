import React, { useState, useEffect } from 'react';
import styles from './application.less';
import { Tabs, Form, Tag, Breadcrumb } from 'antd';
import { connect } from 'umi';

import moment from 'moment';
const { CheckableTag } = Tag;

const { TabPane } = Tabs;
function TableEdit(props) {
  const { editData, history, onInit } = props;
  const {
    query: { uid },
  } = history.location;

  const [form] = Form.useForm();

  useEffect(() => {
    onInit();
  }, [editData]);

  return (
    <div className={styles.header}>
      <Breadcrumb style={{ marginBottom: 20 }}>
        <Breadcrumb.Item
          href="#"
          onClick={() => {
            history.push('/table/homePage');
          }}
        >
          <span>首页</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>应用</Breadcrumb.Item>
      </Breadcrumb>
      <span style={{ color: '#f40' }}>这是应用页 </span>
    </div>
  );
}
const mapStateProps = ({ detail, edit }) => {
  return {
    uid: edit.uid,
    dim: edit.dim,
  };
};
const mapDispatchProps = dispatch => {
  return {
    onInit: () => {
      dispatch({ type: 'detail/onInit' });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(TableEdit);
