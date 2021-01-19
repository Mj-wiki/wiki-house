import React, { Component } from 'react';
import { Select, Input } from 'antd';
import Style from './index.less';
import { Getfield } from '@/api/Project.jsx';
const { Search } = Input;
const { Option } = Select;
export default class SearchFrom extends Component {
  state = {
    SelectValue: '',
    optionValue: '',
    GetfieldList: [],
  };
  render() {
    const { GetfieldList } = this.state;
    return (
      <div className={Style.wrapper}>
        <span className={Style.wrappertitle}>项目管理</span>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={Style.searchArea}>
            <Select
              defaultValue="全部领域"
              style={{ width: 150 }}
              onChange={this.handleChange}
            >
              {GetfieldList.map((item, index) => {
                return (
                  <Option value={item.label} key={index}>
                    {item.value}
                  </Option>
                );
              })}
            </Select>
            <div className={Style.line}></div>
            <Search
              placeholder="输入关键词查询"
              onSearch={this.onSearch}
              enterButton
            />
          </div>
        </div>
      </div>
    );
  }
  handleChange = value => {
    this.setState({
      optionValue: value,
    });
  };
  onSearch = value => {
    this.setState({
      SelectValue: value,
    });
    const { SearchFromValue } = this.props;
    const { optionValue } = this.state;
    SearchFromValue(optionValue, value);
  };
  componentDidMount() {
    this.initfiled();
  }
  initfiled = () => {
    Getfield().then(res => {
      if (res.result == 'success') {
        let data = [];
        res.data.forEach(item => {
          let obj = {
            label: item.field_code,
            value: item.field_name,
          };
          data.push(obj);
        });
        data.unshift({
          label: '',
          value: '全部领域',
        });
        this.setState({
          GetfieldList: data,
        });
      } else {
        return;
      }
    });
  };
}
