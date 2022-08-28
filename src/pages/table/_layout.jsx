import React from 'react';
import styles from './_layout.less';
import { Layout, Menu, Button, notification, Breadcrumb } from 'antd';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';
import backIcon from '../../assets/layouticon/back.png';
import uniLogo from '../../assets/chart/uniLogo.svg';
import { connect } from 'umi';
import { YMLoading } from '../../components/Loading/Loading'; //全局loading

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const titleRightStyle = {
  background: 'none',
  color: 'rgba(255, 255, 255, 0.65) ',
  display: 'float',
  float: 'right',
  width: '3%',
};
const titleMiddleStyle = {
  background: 'none',
  color: 'rgba(255, 255, 255, 0.65)',
  padding: '0 50px',
  fontSize: '18px',
};

const BACK_URL = '/login';
function BackStageLayout(props) {
  const { history, signOut, userName } = props;
  const close = () => {
    console.log('取消退出');
  };
  const goLogin = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          signOut();
          history.push(BACK_URL);
          notification.close(key);
        }}
      >
        确定
      </Button>
    );
    notification.open({
      message: '退出提示',
      description: '确定要退出？',
      btn,
      key,
      onClose: close,
    });
  };
  const checkPersonalMessage = () => {
    console.log('点击查看系统设置');
    console.log(props);
  };
  const checkSystemState = () => {
    console.log('点击查看个人信息');
  };
  const goHomePage = () => {
    history.push('/table/homePage');
  };
  const goProjectManagement = () => {
    history.push('/table/projectManagement');
  };
  const goApplication = () => {
    history.push('/table/application');
  };

  return props.location.pathname.indexOf('/table/checkAppDetail/') > -1 ||
    props.location.pathname.indexOf('/table/checkConceptDetail/') > -1 ? (
    <div className={styles.normal}>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Menu theme="dark" mode="horizontal" selectable="false">
            <Menu.Item key="0">
              <div>
                <img src={uniLogo} alt="" style={{ width: '40px' }} />
              </div>
            </Menu.Item>
            <Menu.Item
              key="1"
              style={{
                background: 'none',
                color: 'rgba(255, 255, 255, 0.65)',
                fontSize: '18px',
              }}
            >
              wiki
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Content className={styles.site}>{props.children}</Content>
        </Layout>
      </Layout>
      <YMLoading />
    </div>
  ) : (
    <div className={styles.normal}>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Menu theme="dark" mode="horizontal" selectable="false">
            <Menu.Item key="0">
              <div>
                <img src={uniLogo} alt="" style={{ width: '40px' }} />
              </div>
            </Menu.Item>
            <Menu.Item
              key="1"
              style={{
                background: 'none',
                color: 'rgba(255, 255, 255, 0.65)',
                fontSize: '18px',
              }}
            >
              wiki
            </Menu.Item>

            <Menu.Item
              key="5"
              style={{
                ...titleMiddleStyle,
                marginLeft:
                  document?.documentElement?.clientWidth > 1800 ? '30%' : '26%',
              }}
            >
              <span onClick={goHomePage}>首页</span>
            </Menu.Item>
            <Menu.Item key="6" style={titleMiddleStyle}>
              <span onClick={goProjectManagement}>项目管理</span>
            </Menu.Item>
            <Menu.Item key="7" style={titleMiddleStyle}>
              <span onClick={goApplication}>应用</span>
            </Menu.Item>

            <Menu.Item
              key="4"
              style={{
                background: 'none',
                color: 'rgba(255, 255, 255, 0.65) ',
                display: 'float',
                float: 'right',
                width: '5%',
              }}
            >
              <div>
                {/* <span>登录账号：{userName}</span> */}

                <a rel="noopener noreferrer" onClick={goLogin}>
                  <img src={backIcon} alt="" />
                  <span
                    style={{
                      color: '#777ab7',
                      marginLeft: '5px',
                      verticalAlign: 'middle',
                    }}
                  >
                    退出
                  </span>
                </a>
              </div>
            </Menu.Item>
            <Menu.Item key="3" style={titleRightStyle}>
              <SettingOutlined onClick={checkPersonalMessage} />
            </Menu.Item>

            <Menu.Item key="2" style={titleRightStyle}>
              <UserOutlined onClick={checkSystemState} />
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Content className={styles.site}>{props.children}</Content>
        </Layout>
      </Layout>
      <YMLoading />
    </div>
  );
}
const mapStateProps = ({ list }) => {
  return {
    userName: list.userName,
  };
};
const mapDispatchProps = dispatch => {
  return {
    signOut: () => {
      dispatch({ type: 'login/signout' });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(BackStageLayout);
