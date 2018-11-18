import React, {Component} from 'react';
import ResultView from './ResultView';
import UsageNotesView from './UsageNotesView';
import calculator from '../models/calculator.js';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialAmount: '',
      interestRate: '',
      numberOfYears: '',
      balance: '',
      initialAmountForResultView: null,
      amountFromInterest: ''
    };

    this.handleInitialAmountChange = this.handleInitialAmountChange.bind(this);
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
    this.handleNumberOfYearsChange = this.handleNumberOfYearsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInitialAmountChange(event) {
    this.setState({initialAmount: event.target.value});
  }

  handleInterestRateChange(event) {
    this.setState({interestRate: event.target.value});
  }

  handleNumberOfYearsChange(event) {
    this.setState({numberOfYears: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const initialAmount = this.state.initialAmount;
    const interestRate = this.state.interestRate;
    const numberOfYears = this.state.numberOfYears;

    if (!initialAmount || !interestRate || !numberOfYears) {
      return;
    }

    const balance = calculator.calculateCompoundInterest(initialAmount, interestRate, numberOfYears);
    const amountFromInterest = calculator.calculateAmountGainedFromInterest(balance, initialAmount);
    this.setState(
      {
        initialAmount: '',
        interestRate: '',
        numberOfYears: '',
        balance: balance,
        initialAmountForResultView: Number.parseFloat(initialAmount).toFixed(2),
        amountFromInterest: amountFromInterest
      }
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form className="compound-interest-form" onSubmit={this.handleSubmit}>
          <div className="input-wrapper">
            <label>
              Initial Amount (Principal)
              <p className="input-hint">Minimum: £1</p>
              <input
                id="amount"
                type="number"
                min="1"
                step="any"
                required
                value={this.state.initialAmount}
                onChange={this.handleInitialAmountChange}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Interest Rate (%)
              <p className="input-hint">Minimum: 0.01%</p>
              <input
                type="number"
                min="0.01"
                step="any"
                required
                value={this.state.interestRate}
                onChange={this.handleInterestRateChange}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Number of Years
              <p className="input-hint">Whole years only</p>
              <input
                type="number"
                min="1"
                required
                value={this.state.numberOfYears}
                onChange={this.handleNumberOfYearsChange}
              />
            </label>
          </div>
          <input id="calculate-button" type="submit" value="Calculate" />
        </form>
        <ResultView
          balance={this.state.balance}
          initialAmountForResultView={this.state.initialAmountForResultView}
          amountFromInterest={this.state.amountFromInterest}
        />
        <UsageNotesView />
      </div>
    );
  }
}

export default Calculator;