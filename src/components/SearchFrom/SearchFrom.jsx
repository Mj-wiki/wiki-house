import React, { Component } from 'react';
import { Select, Input } from 'antd';
import Style from './index.less';
const { Search } = Input;
const { Option } = Select;
export default class SearchFrom extends Component {
  state = {
    SelectValue: '',
    optionValue: '',
  };
  render() {
    const { SelectValue, optionValue } = this.state;
    return (
      <div className={Style.wrapper}>
        <span className={Style.wrappertitle}>项目管理</span>
        <div className={Style.Fromdiv}>
          <Select
            defaultValue="领域"
            style={{ width: 300 }}
            onChange={this.handleChange}
          >
            <Option value="领域">领域</Option>
            <Option value="领域1">领域1</Option>
            <Option value="领域2">领域2</Option>
          </Select>
          <Search
            placeholder="输入关键词查询项目"
            onSearch={this.onSearch}
            enterButton
          />
        </div>
      </div>
    );
  }
  handleChange = value => {
    console.log(value);
  };
  onSearch = value => {
    console.log(value);
  };
}
