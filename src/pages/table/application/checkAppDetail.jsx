import React, { useState, useEffect, useRef } from 'react';
import styles from './checkAppDetail.less';
import { Form, Input, Icon, Message, Modal, Select, Button } from 'antd';
import { connect } from 'umi';
import ColumnLayout from '@/components/ColumnLayout';
import SearchNormalizeCard from '@/components/SearchNormalizeCard';
import listData from './listData.js';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Option } = Select;
const { Search } = Input;

function CheckAppDetail(props) {
  const { history, onInit, fieldData, dataSource, total, searchList } = props;
  const cookieListData = localStorage.getItem('cookieList');
  //下拉框领域的值
  const [items, setItems] = useState(undefined);
  const [searchNumber, setSearchNumber] = useState(0);
  const [searchModalStatus, setSearchModalStatus] = useState(false);
  const [emptyStatus, setEmptyStatus] = useState(0);
  const [transArr, setTransArr] = useState([]);
  const [cookieList, setCookieList] = useState([]);
  //搜索关键字
  const [hotWord, setHotWord] = useState(null);
  const btnElement = useRef(null);
  const {
    query: { uid },
  } = history.location;
  //页面初始化调取接口
  useEffect(() => {
    onInit();
  }, []);
  useEffect(() => {
    if (cookieListData) {
      setTransArr(cookieListData.split(','));
    }
  }, [cookieListData]);
  useEffect(() => {
    setCookieList(transArr);
  }, [transArr]);
  const [form] = Form.useForm();
  //查询
  const changeSearch = value => {
    if (!hotWord) {
      const config = {
        title: '查询提示',
        icon: <ExclamationCircleOutlined />,
        content: (
          <>
            <div>需输入关键词！</div>
          </>
        ),
        okText: '确定',
        cancelText: '取消',
      };
      Modal.confirm(config);
      return;
    }
    setSearchNumber(1);
    if (value) {
      cookieList.unshift(value);
    }
    value = null;
    if (cookieList.length > 5) {
      cookieList.pop();
    }
    setCookieList([...new Set(cookieList)]);
    setEmptyStatus(0);
    searchList(items, hotWord);
    localStorage.setItem('cookieList', [...new Set(cookieList)]);
  };
  const changeItem = value => {
    setItems(value);
  };
  const skipDetailLecture = itemId => {
    const appId = props.match.params.appId;
    if (!itemId) itemId = 1;
    window.open(`#/table/checkConceptDetail/${appId}/${itemId}`);
  };
  const getFocus = e => {
    e.stopPropagation();
    setSearchModalStatus(true);
  };

  const enterKeyword = e => {
    setHotWord(e.target.value);
  };

  const setHistoryWord = v => {
    setHotWord(v);
  };
  const empty = () => {
    setEmptyStatus(1);
    setCookieList([]);
    localStorage.removeItem('cookieList');
  };
  //阻止冒泡
  const stopPropagation = e => {
    e.stopPropagation();
  };
  const changeItemLecture = (record, index) => {
    return (
      <div>
        <SearchNormalizeCard
          imgUrl={listData[0].coverUrl}
          conceptName={record.node_name}
          projectName={record.prj_name}
          fieldType={record.area}
          standardWord={record.std_vocab}
          synonym={record.syn_vocab}
          onClick={skipDetailLecture.bind(this, record.node_id)}
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
            {fieldData.map((v, k) => {
              return (
                <Option key={k} value={v.field_code}>
                  {v.field_name}
                </Option>
              );
            })}
          </Select>
          <div className={styles.line}></div>
          <div
            className={styles.hotWordSearch}
            onMouseLeave={() => {
              setSearchModalStatus(false);
            }}
          >
            <Search
              placeholder="请输入关键词搜索"
              prefix={
                <Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              style={{ width: 380, height: '100px !important' }}
              onSearch={changeSearch}
              onFocus={getFocus}
              onChange={enterKeyword}
              enterButton="搜索"
              maxLength={30}
              value={hotWord}
              ref={btnElement}
            />
            <div
              className={styles.line_hover}
              style={{ display: searchModalStatus ? 'block' : 'none' }}
              onClick={stopPropagation}
            >
              {!emptyStatus
                ? cookieList.map((v, k) => {
                    let sliceV = v;
                    if (v && v.length > 12) {
                      sliceV = v.slice(0, 12) + '...';
                    }
                    return (
                      <div
                        key={k}
                        className={styles.cookieLine}
                        onClick={setHistoryWord.bind(this, v)}
                        title={v}
                      >
                        {sliceV}
                      </div>
                    );
                  })
                : null}
              <Button className={styles.emptyHistory} onClick={() => empty()}>
                清空历史
              </Button>
            </div>
          </div>
        </div>
      </div>
      {searchNumber ? (
        <div style={{ textAlign: 'left' }}>查询到 {total} 条概念</div>
      ) : null}
      {searchNumber ? (
        <ColumnLayout
          list={dataSource}
          renderItem={changeItemLecture}
          column={4}
          direction={'horizontal'}
        />
      ) : null}
    </div>
  );
}
const mapStateProps = ({ checkAppDetail }) => {
  return {
    fieldData: checkAppDetail.fieldData,
    dataSource: checkAppDetail.dataSource,
    total: checkAppDetail.total,
  };
};
const mapDispatchProps = dispatch => {
  return {
    onInit: () => {
      dispatch({ type: 'checkAppDetail/onInit' });
    },
    searchList: (code, name) => {
      dispatch({ type: 'checkAppDetail/searchList', code, name });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(CheckAppDetail);
