import React, { useState, useEffect } from 'react';
import styles from './checkAppDetail.less';
import { Form, Input, Icon, Message, Select } from 'antd';
import { connect } from 'umi';
import ColumnLayout from '@/components/ColumnLayout';
import ContentCard from '@/components/ContentCard';
import appImg from '../../../assets/layouticon/detail_count_percent_1.png';
const { Option } = Select;
const { Search } = Input;
//mock数据
const itemData = [
  { projectId: '0', projectName: '全部领域' },
  { projectId: '1', projectName: '领域1' },
  { projectId: '2', projectName: '领域2' },
];
const listData = [
  {
    appName: '归一查询',
    appIntroduction: '在公开的项目中查询归一词并查看图谱',
    coverUrl: appImg,
    appId: 1,
  },
  {
    appName: '归一查询',
    appIntroduction: '在公开的项目中查询归一词并查看图谱',
    coverUrl: appImg,
    appId: 2,
  },
  {
    appName: '归一查询',
    appIntroduction: '在公开的项目中查询归一词并查看图谱',
    coverUrl: appImg,
    appId: 3,
  },
  {
    appName: '归一查询',
    appIntroduction: '在公开的项目中查询归一词并查看图谱',
    coverUrl: appImg,
    appId: 4,
  },
  {
    appName: '归一查询',
    appIntroduction: '在公开的项目中查询归一词并查看图谱',
    coverUrl: appImg,
    appId: 5,
  },
  {
    appName: '归一查询',
    appIntroduction: '在公开的项目中查询归一词并查看图谱',
    coverUrl: appImg,
    appId: 6,
  },
  {
    appName: '归一查询',
    appIntroduction: '在公开的项目中查询归一词并查看图谱',
    coverUrl: appImg,
    appId: 7,
  },
  {
    appName: '归一查询',
    appIntroduction: '在公开的项目中查询归一词并查看图谱',
    coverUrl: appImg,
    appId: 8,
  },
];
function CheckAppDetail(props) {
  const { editData, history, onInit } = props;
  const [items, setItems] = useState(undefined);
  const [searchNumber, setSearchNumber] = useState(0);
  const {
    query: { uid },
  } = history.location;
  useEffect(() => {
    //初始化方法
  }, []);
  const [form] = Form.useForm();
  //查询
  const changeSearch = value => {
    let sliceValue = value;
    if (value?.length > 30) {
      sliceValue = value.slice(0, 30);
      Message.error('不能输入超过30个字符~');
    }
    setSearchNumber(1);
    console.log('点击查询');
  };
  const changeItem = value => {
    setItems(value);
  };
  const skipDetailLecture = () => {};
  const changeItemLecture = (record, index) => {
    return (
      <div style={{ cursor: 'pointer' }}>
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
      <div className={styles.checkTitle}>归一查询</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.searchArea}>
          <Select
            placeholder="领域"
            value={items}
            style={{ width: '215px' }}
            onChange={changeItem}
          >
            {itemData.map((v, k) => {
              return (
                <Option key={k} value={v.projectId}>
                  {v.projectName}
                </Option>
              );
            })}
          </Select>
          <div className={styles.line}></div>
          <Search
            placeholder="请输入关键词搜索"
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
            style={{ width: 380, height: '100px !important' }}
            onSearch={changeSearch}
            enterButton="搜索"
            maxLength={30}
          />
        </div>
      </div>
      {searchNumber ? (
        <div style={{ textAlign: 'left' }}>查询到10086条概念</div>
      ) : null}
      {searchNumber ? (
        <ColumnLayout
          list={listData}
          renderItem={changeItemLecture}
          column={4}
          direction={'horizontal'}
        />
      ) : null}
    </div>
  );
}
const mapStateProps = ({ detail, edit }) => {
  return {};
};
const mapDispatchProps = dispatch => {
  return {
    onInit: () => {
      dispatch({ type: 'detail/onInit' });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(CheckAppDetail);
