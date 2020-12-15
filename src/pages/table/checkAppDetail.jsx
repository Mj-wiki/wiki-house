import React, { useState, useEffect } from 'react';
import styles from './checkAppDetail.less';
import { Form, Input, Icon, Message, Select } from 'antd';
import { connect } from 'umi';
const { Option } = Select;
const { Search } = Input;
//mock数据
const itemData = [
  { projectId: '0', projectName: '全部领域' },
  { projectId: '1', projectName: '领域1' },
  { projectId: '2', projectName: '领域2' },
];
function CheckAppDetail(props) {
  const { editData, history, onInit } = props;
  const [items, setItems] = useState(undefined);
  const {
    query: { uid },
  } = history.location;

  const [form] = Form.useForm();
  //查询
  const changeSearch = value => {
    let sliceValue = value;
    if (value?.length > 30) {
      sliceValue = value.slice(0, 30);
      Message.error('不能输入超过30个字符~');
    }
    console.log('点击查询');
  };
  const changeItem = value => {
    setItems(value);
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
