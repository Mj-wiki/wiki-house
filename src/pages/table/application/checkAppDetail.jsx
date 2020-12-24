import React, { useState, useEffect, useRef } from 'react';
import styles from './checkAppDetail.less';
import { Form, Input, Icon, Message, Select, Button } from 'antd';
import { connect } from 'umi';
import ColumnLayout from '@/components/ColumnLayout';
import SearchNormalizeCard from '@/components/SearchNormalizeCard';
import xhs_lls_1 from '../../../assets/layouticon/KG_2.jpg';

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
  const cookieListData = localStorage.getItem('cookieList');
  const [items, setItems] = useState(undefined);
  const [searchNumber, setSearchNumber] = useState(0);
  const [searchModalStatus, setSearchModalStatus] = useState(false);
  const [emptyStatus, setEmptyStatus] = useState(0);
  const [transArr, setTransArr] = useState([]);
  const [cookieList, setCookieList] = useState([]);
  const [hotWord, setHotWord] = useState(null);
  const chartRef = useRef(null);
  const {
    query: { uid },
  } = history.location;
  useEffect(() => {
    //   chartRef.current.addEventListener('click', (e) => {
    //     setSearchModalStatus(false);
    // });
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
    setHotWord(null);
    localStorage.setItem('cookieList', [...new Set(cookieList)]);
  };
  const changeItem = value => {
    setItems(value);
  };
  const skipDetailLecture = appId => {
    if (!appId) appId = 1;
    history.push('/table/checkConceptDetail/' + appId);
  };
  const getFocus = e => {
    console.log(e.target.value, '---获取焦点---');
    //stopPropagation(e)
    setSearchModalStatus(true);
  };
  const loseFocus = e => {
    // console.log(e.target.value,'---失去焦点---')
    // if(!e.target.value ){
    //   setSearchModalStatus(false);
    // }
  };
  const closeModal = e => {
    setSearchModalStatus(false);
  };
  const enterKeyword = e => {
    setHotWord(e.target.value);
  };

  const setHistoryWord = v => {
    setHotWord(v);
    setSearchModalStatus(false);
  };
  const empty = () => {
    setEmptyStatus(1);
    setCookieList([]);
    setSearchModalStatus(false);
    localStorage.removeItem('cookieList');
  };
  //阻止冒泡
  const stopPropagation = e => {
    e.nativeEvent.stopImmediatePropagation();
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
    <div className={styles.content} ref={chartRef}>
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
          <div className={styles.hotWordSearch}>
            <Search
              placeholder="请输入关键词搜索"
              prefix={
                <Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              style={{ width: 380, height: '100px !important' }}
              onSearch={changeSearch}
              onFocus={getFocus}
              onBlur={loseFocus}
              onChange={enterKeyword}
              enterButton="搜索"
              maxLength={30}
              value={hotWord}
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
