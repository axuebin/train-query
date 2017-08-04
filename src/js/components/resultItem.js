import React from 'react'
import {Row, Col} from 'antd'

export default class ResultItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let station = this.props.station
    let arrivalTime = this.props.arrivalTime
    let departureTime = this.props.departureTime
    return (
      <li className="list-group-item">
        <Row>
          <Col span={16}>
            {station}
          </Col>
          <Col span={4}>
            {arrivalTime}
          </Col>
          <Col span={4}>
            {departureTime}
          </Col>
        </Row>
      </li>
    )
  }
}
