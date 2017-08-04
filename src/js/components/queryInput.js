import React from 'react'
import ReactDOM from 'react-dom'
import {Row, Col, Form, Input, Button,notification} from 'antd'
export default class QueryArea extends React.Component {
  constructor(props) {
    super(props)
    this.query=this.query.bind(this)
  }
  query(e) {
    e.preventDefault()
    let element = ReactDOM.findDOMNode(this.refs.trainNum)
    let trainNum = element.value
    if (!trainNum) {
      notification.open({
        description: '车次不得为空！',
    })
    } else {
      this.props.query(trainNum)
      element.value = "G163"
    }
  }
  render() {
    return (
      <div className="query-area">
        <Form.Item>
          <label htmlFor="trainNum"></label>
          <Input id="trainNum" ref="trainNum" type="text" placeholder="G163~"></Input>
          <p>由于找不到免费接口...只有一个G163的部分数据...</p>
          <Button type="primary" className="pull-left" onClick={this.query}>查询</Button>
        </Form.Item>
      </div>
    )
  }
}
