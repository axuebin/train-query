import React from 'react'
import Map from './map'
import QueryInput from './queryInput'
import QueryResult from './queryResult'
import fetchJsonp from 'fetch-jsonp'
import {Button, Icon, Row, Col} from 'antd'
const AK = "aqtkHfAmEK6xLPwSoR7Tjkeo"
const testData = [
  {
    "id": "1",
    "city": "北京",
    "station": "北京南站",
    "arrivalTime": "起点站",
    "departureTime": "10:50"

  }, {
    "id": "2",
    "city": "天津",
    "station": "天津南站",
    "arrivalTime": "11:24",
    "departureTime": "11:33"
  }, {
    "id": "3",
    "city": "济南",
    "station": "济南西站",
    "arrivalTime": "12:43",
    "departureTime": "12:45"
  }, {
    "id": "4",
    "city": "徐州",
    "station": "徐州东站",
    "arrivalTime": "14:19",
    "departureTime": "14:21"
  }, {
    "id": "5",
    "city": "南京",
    "station": "南京南站",
    "arrivalTime": "15:44",
    "departureTime": "15:50"
  }, {
    "id": "6",
    "city": "杭州",
    "station": "杭州东站",
    "arrivalTime": "17:13",
    "departureTime": "17:15"
  }
]
export default class QueryArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.handleQuery = this.handleQuery.bind(this)
  }

  handleQuery(trainNum) {
    let that = this
    let queryData = testData
    let length = queryData.length
    for (let i = 0; i < length; i++) {
      let station = queryData[i].station
      let city = queryData[i].city
      let url = "http://api.map.baidu.com/geocoder/v2/?ak=" + AK + "&output=json&address=" + station + "&city=" + city
      fetchJsonp(url).then(response => response.json()).then(location => {
        queryData[i]["lng"] = location.result.location.lng
        queryData[i]["lat"] = location.result.location.lat
        if (i === length - 1) {
          that.setState({data: queryData})
        }
      }).catch(function(e) {
        alert("坐标请求出错啦~")
      })
    }
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
        <Button className="pull-right"><Icon type="github" /><a href="https://github.com/axuebin">axuebin</a></Button>
        <Button className="pull-right"><Icon type="user" /><a href="http://axuebin.com">薛彬</a></Button>
      </div>
    )
  }
}
