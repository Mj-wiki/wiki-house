import React, { useEffect, useRef } from 'react';
import { Modal, Card } from 'antd';
import styles from './index.less';

const SearchModal = props => {
  const { visible, title, onOk, onCancel, data } = props;
  const chartRef = useRef(null);
  useEffect(() => {
    if (JSON.stringify(data) == '{}') {
      return;
    }
  }, [data]);

  return (
    <div className={styles.wrap}>
      <Modal
        title={title}
        visible={visible}
        centered={true}
        onOk={() => {
          onOk();
        }}
        onCancel={() => {
          onCancel();
        }}
        footer={null}
        closeIcon={null}
      >
        <div id="container" ref={chartRef}>
          这里是一些搜索热词balabala...
        </div>
      </Modal>
    </div>
  );
};
export default SearchModal;
