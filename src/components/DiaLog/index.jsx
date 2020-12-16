import React, { useEffect, useRef } from 'react';
import { Modal, Card } from 'antd';
import styles from './index.less';

const LoginLogs = props => {
  const { x, y, hidden, item } = props;
  const chartRef = useRef(null);

  return (
    <div className={styles.wrap}>
      <div
        className={styles.dialog}
        style={{
          top: y + 'px',
          left: x + 'px',
          display: hidden ? 'block' : 'none',
        }}
      >
        <div className={styles.items}>聚焦</div>
        <div className={styles.items}>添加关系</div>
        <div className={styles.items}>删除概念</div>
      </div>
    </div>
  );
};
export default LoginLogs;
