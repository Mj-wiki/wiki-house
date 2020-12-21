import React from 'react';
import styles from './index.less';

const LoginLogs = props => {
  const { x, y, hidden, item } = props;
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
        <div className={styles.items} onClick={() => Blundeventitem(item)}>
          聚焦
        </div>
        <div className={styles.items}>添加关系</div>
        <div className={styles.items}>删除概念</div>
      </div>
    </div>
  );
};
const Blundeventitem = item => {
  console.log(item);
};
export default LoginLogs;
