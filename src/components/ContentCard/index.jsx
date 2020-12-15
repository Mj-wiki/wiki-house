import React from 'react';
import PropTypes from 'prop-types';
import style from './index.less';

export default function ContentCard({
  imgUrl,
  appIntroduction,
  appName,
  onClick,
  courseCredit,
}) {
  let arr = [appIntroduction];
  let newArr = arr.map((v, k) => {
    if (v && v.length > 20) {
      return v.slice(0, 20) + '...';
    }
    return v;
  });
  let sliceLecturerName = appName;
  if (appName && appName.length > 8) {
    sliceLecturerName = appName.slice(0, 8) + '...';
  }
  // 跳转
  const clickSkip = () => {
    onClick();
  };
  return (
    <div onClick={clickSkip.bind(this)}>
      <div className={style.totalBox}>
        <div className={style.appIntroduction_img}>
          <img src={imgUrl} className={style.topBox}></img>
        </div>
        <div className={style.lecturerLayout}>
          <div className={style.lecturerLeft}>
            <span title={appName}>{sliceLecturerName}</span>
          </div>
        </div>
        <div className={style.bottomBox}>
          <div className={style.lectureHospital}>
            <span style={{ verticalAlign: 'middle' }} title={appIntroduction}>
              {newArr[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

ContentCard.propTypes = {
  imgUrl: PropTypes.string, // 图片路径
  appName: PropTypes.string,
  appIntroduction: PropTypes.string, //讲课人
  onClick: PropTypes.func,
  courseCredit: PropTypes.number, //评分
};

ContentCard.defaultProps = {
  onClick: () => {},
};
