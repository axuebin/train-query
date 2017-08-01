import React from 'react';
import Map from './map';
import QueryInput from './queryInput';
import QueryResult from './queryResult';
import {Button, Icon, Row, Col} from 'antd';
export default class QueryArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.handleQuery=this.handleQuery.bind(this)
  }
  // componentDidMount() {
  //   var that = this;
  //   fetch('../src/js/demo.json').then(function(response) {
  //     return response.json()
  //   }).then(function(result) {
  //     that.setState({data: result})
  //   }).catch(function(e) {
  //     alert("出错啦")
  //   })
  // }
  handleQuery(trainNum) {
    var that = this;
    fetch('../src/js/demo.json').then(function(response) {
      return response.json()
    }).then(function(result) {
      that.setState({data: result})
    }).catch(function(e) {
      alert("出错啦")
    })
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={16} className="well left-area">
            <Map data={this.state.data}/>
          </Col>
          <Col span={8} className="well right-area">
            <h1 className="text-center">列车站点查询</h1>
            <br/>
            <QueryInput query={this.handleQuery}/>
            <QueryResult data={this.state.data}/>
          </Col>
        </Row>
      </div>
    )
  }
}
