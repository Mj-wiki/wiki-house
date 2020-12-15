import React, { useState, useEffect } from 'react';
import styles from './homePage.less';
import LoginLogs from '@/components/LoginLogs';
import { Card, Table, Button, Input } from 'antd';

import { connect } from 'umi';
const { Search } = Input;
function TableList(props) {
  const { changeList, onInit, userLoginLogs, logObject } = props;
  const [visible, setVisible] = useState(false);
  const [LoginLogData, setLoginLogData] = useState({});
  useEffect(() => {
    onInit();
  }, []);

  useEffect(() => {
    setLoginLogData(logObject);
  }, [logObject]);
  //日志
  const log = record => {
    return () => {
      const uid = record.id;
      setVisible(true);
      userLoginLogs({ uid });
    };
  };

  const onFilter = ({ target }) => {
    console.log(target);
    changeList('sortValue', target.value || '');
  };

  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  //分页跳转
  const changePage = ({ current }) => {
    changeList('pageNum', current);
  };

  return (
    <div className={styles.wrap}>
      这是首页
      <LoginLogs
        visible={visible}
        title={'登录日志'}
        onOk={handleOk}
        onCancel={handleCancel}
        data={LoginLogData}
      ></LoginLogs>
    </div>
  );
}
const mapStateProps = ({ list }) => {
  return {
    search: list.search,
    sort: list.sort,
    sortValue: list.sortValue,
    start: list.start,
    length: list.length,
    dataSource: list.dataSource,
    total: list.total,
    logObject: list.logObject,
    pageSize: list.pageSize,
    pageNum: list.pageNum,
  };
};
const mapDispatchProps = dispatch => {
  return {
    onInit: () => {
      dispatch({ type: 'list/onInit' });
    },
    userDelete: values => {
      dispatch({ type: 'list/userDelete', values });
    },
    userList: search => {
      dispatch({ type: 'list/userList', search });
    },
    changeList: (key, value) => {
      dispatch({ type: 'list/changeList', key, value });
    },
    searchList: value => {
      dispatch({ type: 'list/searchList', value });
    },
    login: values => {
      dispatch({ type: 'list/login', values });
    },
    userLoginLogs: values => {
      dispatch({ type: 'list/userLoginLogs', values });
    },
    getEdit: uid => {
      dispatch({ type: 'edit/getEdit', uid });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(TableList);
