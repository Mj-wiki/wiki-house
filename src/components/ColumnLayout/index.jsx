import React from 'react';
import PropTypes from 'prop-types';
import style from './index.less';
//import noData from '../../assets/img/noData.png'

export default function ColumnLayout({
  list,
  renderItem,
  column,
  className,
  direction,
}) {
  const row = Math.ceil(list.length / column); //行数
  const verticalFuc = (rowIndex, colIndex) => colIndex * row + rowIndex; //
  const horizontalFuc = (rowIndex, colIndex) => rowIndex * column + colIndex; //
  let func = verticalFuc;
  if (direction === 'horizontal') {
    func = horizontalFuc;
  }
  let arr = [];
  for (let i = 0; i < column; i++) {
    arr.push(new Array(row).fill(0));
  }
  return Array.isArray(list) && list.length > 0 ? (
    <div className={`${style.column_layout_container} ${className}`}>
      {arr.map((item, colIndex) => (
        <div key={colIndex} className={style.column}>
          {item.map((v, rowIndex) => {
            const listIndex = func(rowIndex, colIndex);
            if (listIndex >= list.length) {
              return null;
            }
            return (
              <div className={style.item} key={rowIndex}>
                {renderItem(list[listIndex], listIndex + 1)}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  ) : (
    <div style={{ color: '#f40', textAlign: 'center', marginTop: '50px' }}>
      {/* <img src={noData} style={{height:'160px'}}></img> */}
      <p style={{ color: 'rgba(0, 0, 0, 0.25)', textAlign: 'center' }}>
        暂无数据
      </p>
    </div>
  );
}

ColumnLayout.propTypes = {
  list: PropTypes.array.isRequired, // 需要显示的列表数据
  renderItem: PropTypes.func.isRequired, // 渲染每项的函数
  column: PropTypes.number.isRequired, // 列数
  className: PropTypes.string,
  direction: PropTypes.oneOf(['vertical', 'horizontal']), // 方向， horizontal水平，vertical垂直
};

ColumnLayout.defaultProps = {
  direction: 'vertical', // 默认方向为垂直方向
  className: '',
};
