import React from 'react';
import { Spin } from 'antd';
import style from './index.less';
class Loading {
  constructor() {
    this.loadingTag = 0;
    this.subscriptions = [];
  }
  add(text) {
    if (text) {
      this.loadingTag = 0;
    } else {
      this.loadingTag++;
    }
    this.subscriptions.forEach(f => f(this.loadingTag));
  }
  sub(text) {
    if (text) {
      this.loadingTag = 0;
    } else {
      this.loadingTag--;
    }
    this.subscriptions.forEach(f => f(this.loadingTag));
  }
  get() {
    return this.loadingTag;
  }
  subscribe(f) {
    this.subscriptions.push(f);
  }
}
let loadingPublisher = new Loading();

class YMLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalLoading: false,
    };
  }
  componentDidMount() {
    // 增加订阅loading状态更新
    loadingPublisher.subscribe(loadingTag => {
      if (this.state.globalLoading !== !!loadingTag) {
        this.setState({ globalLoading: !!loadingTag });
      }
    });
  }

  render() {
    return (
      <div
        className={style.globalLoading}
        style={{ display: this.state.globalLoading ? 'block' : 'none' }}
      >
        <Spin spinning={this.state.globalLoading} size="large" />
      </div>
    );
  }
}

export { YMLoading, loadingPublisher };
