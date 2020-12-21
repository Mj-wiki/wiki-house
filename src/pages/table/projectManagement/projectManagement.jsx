import React, { Component } from 'react';
import Style from './projectManagement.less';
import Graph from '../../../components/eachartstable/graph';
export default class projectManagement extends Component {
  render() {
    return (
      <div className={Style.projectwrapper}>
        <Graph />
      </div>
    );
  }
}
