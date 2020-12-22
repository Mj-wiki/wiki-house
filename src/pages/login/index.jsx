import React, { FC, useState, ChangeEvent } from 'react';
import { InitModelState, ConnectProps, connect } from 'umi';
import classnames from 'classnames';

import zhs from '@/assets/img/login_img.png';
import userImg from '@/assets/img/userImg.png';
import pwdImg from '@/assets/img/pwdImg.png';
import warnImg from '@/assets/img/remind.png';
import styles from './index.less';

const Login = props => {
  const { userName, passWord, errorInfo, changeState, signIn, history } = props;
  const [focus, setFocus] = useState('');
  const changeLine = type => {
    return () => {
      setFocus(type);
    };
  };
  const signin = () => {
    console.log('登录');
    signIn();
    history.push('/table/homePage');
  };
  const onEnter = e => {
    if (e.nativeEvent.keyCode !== 13) return;
    signIn();
    console.log('回车登录');
  };
  const getUserName = e => {
    changeState('userName', e.target.value);
  };
  const getPassWord = e => {
    changeState('passWord', e.target.value);
  };
  return (
    <div className={styles.login_wrap}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={zhs} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>欢迎登录联仁归一工具系统</div>
          <div className={styles.from}>
            <div
              className={classnames({
                [styles.input]: true,
                [styles.focus]: focus === 'username',
              })}
            >
              <img src={userImg} alt="" />
              <input
                type="username"
                onFocus={changeLine('username')}
                placeholder="用户名"
                onChange={getUserName}
                onKeyDown={onEnter}
              />
            </div>
            <div
              className={classnames({
                [styles.input]: true,
                [styles.focus]: focus === 'password',
              })}
            >
              <img src={pwdImg} alt="" />
              <input
                type="password"
                onFocus={changeLine('password')}
                placeholder="密码"
                onChange={getPassWord}
                onKeyDown={onEnter}
              />
            </div>
            <div className={styles.btn}>
              {errorInfo && (
                <div className={styles.error_info}>
                  <img src={warnImg} alt="" />
                  {errorInfo}
                </div>
              )}

              <input type="submit" value={'登录'} onClick={signin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateProps = ({ login }) => {
  return {
    userName: login.userName,
    passWord: login.passWord,
    errorInfo: login.errorInfo,
  };
};
const mapDispatchProps = dispatch => {
  return {
    changeState: (key, value) => {
      dispatch({ type: 'login/changeState', key, value });
    },
    signIn: () => {
      dispatch({ type: 'login/signIn' });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(Login);
