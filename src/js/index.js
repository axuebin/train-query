var React = require('react');
var ReactDOM = require('react-dom');
import './../css/index.css';
import { Row, Col } from 'antd';
import QueryArea from './components/queryArea';

export default class Index extends React.Component {
  constructor(){
    super();
  };
  render() {
    return (
      <QueryArea/>
    );
  }
}

ReactDOM.render(<Index/>,document.getElementById("example"))
