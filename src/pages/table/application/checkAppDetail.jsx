import React, { useState, useEffect } from 'react';
import styles from './checkAppDetail.less';
import { Form, Input, Icon, Message, Select } from 'antd';
import { connect } from 'umi';
import ColumnLayout from '@/components/ColumnLayout';
import SearchNormalizeCard from '@/components/SearchNormalizeCard';
import xhs_lls_1 from '../../../assets/layouticon/KG_2.jpg';
import SearchModal from '@/components/SearchModal';
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
    conceptName: '概念名1',
    projectName: '项目名称',
    fieldType: '领域类型名称',
    standardWord: '标注词',
    synonym: ['同义词1', '同义词2', '同义词3', '同义词4', '同义词5'],
    coverUrl: xhs_lls_1,
    itemId: 1,
  },
  {
    conceptName: '概念名1',
    projectName: '项目名称',
    fieldType: '领域类型名称',
    standardWord: '标注词',
    synonym: ['同义词1', '同义词2', '同义词3', '同义词4', '同义词5'],
    coverUrl: xhs_lls_1,
    itemId: 2,
  },
  {
    conceptName: '概念名1',
    projectName: '项目名称',
    fieldType: '领域类型名称',
    standardWord: '标注词',
    synonym: ['同义词1', '同义词2', '同义词3', '同义词4', '同义词5'],
    coverUrl: xhs_lls_1,
    itemId: 3,
  },
  {
    conceptName: '概念名1',
    projectName: '项目名称',
    fieldType: '领域类型名称',
    standardWord: '标注词',
    synonym: ['同义词1', '同义词2', '同义词3', '同义词4', '同义词5'],
    coverUrl: xhs_lls_1,
    itemId: 4,
  },
];
function CheckAppDetail(props) {
  const { editData, history, onInit } = props;
  const [items, setItems] = useState(undefined);
  const [searchNumber, setSearchNumber] = useState(0);
  const [searchModalStatus, setSearchModalStatus] = useState(false);
  const [quitBlur, setQuitBlur] = useState(false);
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
  const skipDetailLecture = appId => {
    if (!appId) appId = 1;
    history.push('/table/checkConceptDetail/' + appId);
  };
  const getFocus = e => {
    console.log(e, '----鼠标获取焦点----');
    setQuitBlur(false);
    setSearchModalStatus(true);
    if (quitBlur) {
      setSearchModalStatus(false);
    }
  };
  const onOk = () => {
    setSearchModalStatus(false);
    setQuitBlur(true);
  };
  const onCancel = () => {
    setSearchModalStatus(false);
    setQuitBlur(true);
  };

  const changeItemLecture = (record, index) => {
    return (
      <div>
        <SearchNormalizeCard
          imgUrl={record.coverUrl}
          conceptName={record.conceptName}
          projectName={record.projectName}
          fieldType={record.fieldType}
          standardWord={record.standardWord}
          synonym={record.synonym}
          onClick={skipDetailLecture.bind(this, record.itemId)}
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
            onFocus={getFocus}
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
      <SearchModal
        visible={searchModalStatus}
        title={undefined}
        onOk={onOk}
        onCancel={onCancel}
        data={{}}
      />
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
