import React from 'react';
import ReactDOM from 'react-dom';
import EchartsMap from './echarts-map'
export default class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let convertData = [];
    this.props.data.map(listItem => convertData.push({
      name: listItem.station,
      value: [listItem.lnt, listItem.lat]
    }))
    return (<EchartsMap convertData={convertData}/>)
  }
}
