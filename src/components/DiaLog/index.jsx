import React from 'react';
import styles from './index.less';
import { CloseSquareOutlined } from '@ant-design/icons';
const DiaLog = props => {
  const { x, y, hidden, item, onClick } = props;
  // 点击聚焦
  const clickFocus = () => {
    onClick();
  };
  return (
    <div className={styles.wrap}>
      <div
        className={styles.dialog}
        style={{
          top: y + 82 + 'px',
          left: x + 'px',
          display: hidden ? 'block' : 'none',
        }}
      >
        <div className={styles.items} onClick={clickFocus.bind(this)}>
          <CloseSquareOutlined className={styles.iconRight} />
          聚焦
        </div>
        {/* <div className={styles.items}>添加关系</div>
        <div className={styles.items}>删除概念</div> */}
      </div>
    </div>
  );
};
export default DiaLog;
