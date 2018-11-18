import React, {Component} from 'react';
import ResultView from './ResultView';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialAmount: '',
      interestRate: '',
      numberOfYears: '',
      balance: ''
    };
  }

  render() {
    return <div>
      <h1>{this.props.title}</h1>
      <form className="compound-interest-form">
        <input
          type="number"
          placeholder="Initial Amount"
          min="1"
          required
        />
        <br/>
        <input
          type="number"
          placeholder="Interest Rate"
          min="0.01"
          step="any"
          required
        />
        <br/>
        <input
          type="number"
          placeholder="Number of Years"
          min="1"
          step="any"
          required
        />
        <br/>
        <input type="submit" value="Calculate Compound Interest" />
        <br/>
      </form>
      <ResultView balance={this.state.balance}/>
    </div>
  }
}

export default Calculator;