import React from 'react';
import PropTypes from 'prop-types';
import style from './index.less';
import { Button, Divider } from 'antd';
export default function SearchNormalizeCard({
  imgUrl,
  conceptName,
  projectName,
  fieldType,
  standardWord,
  synonym,
  onClick,
}) {
  // 跳转
  const clickSkip = () => {
    onClick();
  };
  const radioStyle = {
    width: '150px',
    height: '30px',
    border: '0px',
    background: '#353d58',
    borderRadius: '28px',
    lineHeight: '20px',
    color: '#fff',
  };
  return (
    <div>
      <div className={style.totalBox}>
        <div className={style.appIntroduction_img}>
          <img src={imgUrl} className={style.topBox}></img>
        </div>
        <div className={style.lecturerLayout}>
          <div className={style.lecturerLeft}>
            <span title={conceptName}>{conceptName}</span>
          </div>
        </div>
        <div className={style.line}>
          <Divider></Divider>
        </div>
        <div className={style.bottomBox}>
          <div className={style.lectureHospital}>
            <span className={style.projectName}>所属项目:</span>
            <span title={projectName}>{projectName}</span>
          </div>
          <div className={style.lectureHospital}>
            <span className={style.projectName}>领域类型:</span>
            <span title={fieldType}>{fieldType}</span>
          </div>
          <div className={style.lectureHospital}>
            <span className={style.projectName}>标准词:</span>
            <span title={standardWord}>{standardWord}</span>
          </div>
          <div className={style.lectureHospital}>
            <div style={{ display: 'flex' }}>
              <div className={style.synonym}>同义词:</div>
              <span title={synonym.join('; ')}>
                {synonym.join('; ')
                  ? synonym.join('; ').length > 20
                    ? synonym.join('; ').slice(0, 30) + '...'
                    : synonym.join('; ')
                  : undefined}
              </span>
            </div>
          </div>
          <div className={style.checkButton} onClick={clickSkip.bind(this)}>
            <Button type={'primary'} style={radioStyle}>
              查 看
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchNormalizeCard.propTypes = {
  imgUrl: PropTypes.string, // 应用图标
  conceptName: PropTypes.string, //概念名
  projectName: PropTypes.string, //所属项目
  fieldType: PropTypes.string, //领域类型
  standardWord: PropTypes.string, //标准词
  synonym: PropTypes.array, //同义词
  onClick: PropTypes.func,
};

SearchNormalizeCard.defaultProps = {
  onClick: () => {},
};