import React from 'react'
import ReactDOM from 'react-dom'
import 'echarts/map/js/china'

var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/map')
require('echarts/lib/chart/scatter')
require('echarts/lib/component/title')
require('echarts/lib/component/tooltip')

export default class EchartsMap extends React.Component {
  constructor(props) {
    super(props)
    this.setMapOption = this.setMapOption.bind(this)
    this.initMapChart = this.initMapChart.bind(this)
  }

  initMapChart() {
    const {data} = this.props
    let chart = echarts.getInstanceByDom(this.refs.mapChart)
    if (typeof(chart) !== 'undefined') {
      chart.dispose();
    }
    let myChart = echarts.init(this.refs.mapChart)
    let options = this.setMapOption(data)
    myChart.setOption(options)
  }

  componentDidMount() {
    this.initMapChart()
  }

  componentDidUpdate() {
    this.initMapChart()
  }

  render() {
    return (
      <div className="map-react">
        <div ref="mapChart" style={{
          width: "100%",
          height: "100%"
        }}></div>
      </div>
    )
  }

  setMapOption(data) {
    return {
      title: {
        show: false,
        left: "center"
      },
      tooltip: {
        trigger: 'item',
        formatter: params => params.name
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#eeeeee',
            borderColor: '#828282'
          },
          emphasis: {
            areaColor: '#eeeeee'
          }
        }
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          data: this.props.convertData,
          symbolSize: 10,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#345391',
              shadowBlur: 20,
              shadowColor: '#333'
            }
          }
        }
      ]
    }
  }
}
