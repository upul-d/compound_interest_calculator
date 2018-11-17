import React, {Component} from 'react';
import ResultView from './ResultView';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return <div>
      <h1>{this.props.title}</h1>
      {/* ResultView given temporarily hard-coded balance*/}
      <ResultView balance='10.00'/>
    </div>
  }
}

export default Calculator;