import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Form, Input, Button} from 'antd';
export default class QueryArea extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="query-area">
        <Form.Item>
          <label htmlFor="site"></label>
          <Input id="site" ref="site" type="text" placeholder="G163~"></Input>
          <Button type="primary" className="pull-left">查询</Button>
        </Form.Item>
      </div>
    )
  }
}
