import React, { Component } from 'react';
import { Modal } from 'antd';
export default class Addproject extends Component {
  render() {
    const {
      isModalVisible,
      cancelText,
      okText,
      title,
      closable,
      centered,
      width,
    } = this.props;
    return (
      <div style={{ position: 'relative', zIndex: '990', background: '#fff' }}>
        <Modal
          title={title}
          visible={isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText={cancelText}
          okText={okText}
          closable={closable}
          centered={centered}
          width={width}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
  handleOk = () => {
    const { Blundeventcancelproject } = this.props;
    Blundeventcancelproject();
  };
  handleCancel = () => {
    const { Blundeventcloseproject } = this.props;
    Blundeventcloseproject();
  };
}
