import React, { useState, useEffect, useRef } from 'react';
import styles from './checkAppDetail.less';
import { Form, Input, Icon, Message, Modal, Select, Button } from 'antd';
import { connect } from 'umi';
import ColumnLayout from '@/components/ColumnLayout';
import SearchNormalizeCard from '@/components/SearchNormalizeCard';
import coverUrl from '../../../assets/layouticon/KG_2.jpg';
import noData from '../../../assets/img/noData.png';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import SortableList, { SortableItem } from 'react-easy-sort';
import arrayMove from 'array-move';
const { Option } = Select;
const { Search } = Input;

function CheckAppDetail(props) {
  const {
    history,
    onInit,
    fieldData,
    dataSource,
    total,
    searchList,
    searchConceptInfo,
  } = props;
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

  //---拖拽
  const [voteitems, setVoteitems] = useState([
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
  ]);
  const onSortEnd = (oldIndex, newIndex) => {
    setVoteitems(array => arrayMove(array, oldIndex, newIndex));
  };
  console.log(voteitems);
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
      // const config = {
      //   title: '查询提示',
      //   icon: <ExclamationCircleOutlined />,
      //   content: (
      //     <>
      //       <div>需输入关键词！</div>
      //     </>
      //   ),
      //   okText: '确定',
      //   cancelText: '取消',
      // };
      // Modal.confirm(config);
      Message.error('需输入关键词！');
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
  const skipDetailLecture = (itemId, conceptName, projectId, code, name) => {
    const appId = props.match.params.appId;
    if (!itemId) itemId = 1;

    //window.open(`#/table/checkConceptDetail/${appId}/${itemId}`);
    history.push(
      `/table/checkConceptDetail/${appId}/${itemId}/${conceptName}/${projectId}/${code}/${name}`,
    );
    searchConceptInfo({ itemId, conceptName, projectId, code, name });
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
          //imgUrl={coverUrl}
          conceptName={record.node_name}
          projectName={record.prj_name}
          fieldType={record.area}
          standardWord={record.std_vocab}
          synonym={record.syn_vocab}
          onClick={skipDetailLecture.bind(
            this,
            record.node_id,
            record.node_name,
            record.prj_id,
            record.area,
            record.prj_name,
          )}
        />
      </div>
    );
  };
  return (
    <div className={styles.content}>
      <SortableList
        onSortEnd={onSortEnd}
        className="list"
        draggedItemClassName="dragged"
      >
        {voteitems.map(item => (
          <SortableItem key={item}>
            <div className="voteitems">{item}</div>
          </SortableItem>
        ))}
      </SortableList>
      <div className={styles.checkTitle}>归一查询</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.searchArea}>
          <Select
            placeholder="全部领域"
            value={items}
            style={{ width: '240px' }}
            onChange={changeItem}
            defaultValue={''}
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
              placeholder="输入关键词查询"
              prefix={
                <Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              style={{ width: 480, height: '100px !important' }}
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
                    if (v && v.length > 20) {
                      sliceV = v.slice(0, 20) + '...';
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
        dataSource !== -1 ? (
          <ColumnLayout
            list={dataSource}
            renderItem={changeItemLecture}
            column={4}
            direction={'horizontal'}
          />
        ) : (
          <div className={styles.noData}>
            <img src={noData}></img>
            <p>数据加载中,请稍后...</p>
          </div>
        )
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
    searchConceptInfo: search => {
      dispatch({
        type: 'checkConceptDetail/searchConceptInfo',
        search,
      });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(CheckAppDetail);
