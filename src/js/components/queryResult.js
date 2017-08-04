import React from 'react'
import ResultItem from './resultItem'
import {Row, Col} from 'antd'
export default class QueryResult extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var stationList = this.props.data.map(listItem => <ResultItem stationId={listItem.id} key={listItem.id} station={listItem.station} arrivalTime={listItem.arrivalTime} departureTime={listItem.departureTime}/>)
    return (
      <div>
        <li className="list-group-item">
          <Row>
            <Col span={16}>
              站点
            </Col>
            <Col span={4}>
              到达时间
            </Col>
            <Col span={4}>
              出发时间
            </Col>
          </Row>
        </li>
        <ul>
          {stationList}
        </ul>
      </div>
    )
  }
}
