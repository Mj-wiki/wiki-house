import React, { useState, useEffect, useRef } from 'react';
import styles from './checkAppDetail.less';
import { Form, Input, Icon, Message, Select, Button } from 'antd';
import { connect } from 'umi';
import ColumnLayout from '@/components/ColumnLayout';
import SearchNormalizeCard from '@/components/SearchNormalizeCard';
import listData from './listData.js';
const { Option } = Select;
const { Search } = Input;
//mock数据
const itemData = [
  { projectId: '0', projectName: '全部领域' },
  { projectId: '1', projectName: '领域1' },
  { projectId: '2', projectName: '领域2' },
];

function CheckAppDetail(props) {
  const { history, onInit } = props;
  const cookieListData = localStorage.getItem('cookieList');
  const [items, setItems] = useState(undefined);
  const [searchNumber, setSearchNumber] = useState(0);
  const [searchModalStatus, setSearchModalStatus] = useState(false);
  const [emptyStatus, setEmptyStatus] = useState(0);
  const [transArr, setTransArr] = useState([]);
  const [cookieList, setCookieList] = useState([]);
  const [hotWord, setHotWord] = useState(null);
  const btnElement = useRef(null);
  const {
    query: { uid },
  } = history.location;

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
    //setHotWord(null);
    localStorage.setItem('cookieList', [...new Set(cookieList)]);
  };
  const changeItem = value => {
    setItems(value);
  };
  const skipDetailLecture = itemId => {
    const appId = props.match.params.appId;
    if (!itemId) itemId = 1;
    history.push(`/table/checkConceptDetail/${appId}/${itemId}`);
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
const mapStateProps = ({ detail }) => {
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
