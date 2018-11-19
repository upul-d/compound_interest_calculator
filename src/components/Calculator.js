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
      inputsForResultView: {
        initialAmountForResultView: null,
        interestRateForResultView: null,
        numberOfYearsForResultView: null
      },
      amountFromInterest: '',
      errorsForInputs: {
        initialAmount: null,
        interestRate: null,
        numberOfYears: null
      }
    };

    this.handleInitialAmountChange = this.handleInitialAmountChange.bind(this);
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
    this.handleNumberOfYearsChange = this.handleNumberOfYearsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateInput(event, inputName) {
    const validInput = calculator.isValidInput(event.target.value);
    if (validInput) {
      this.setState(
        {
          [inputName]: event.target.value,
          errorsForInputs: {
            [inputName]: ''
          }
        }
      );
      return true;
    }
  }

  createErrorMessage(inputName) {
    const error = 'Please enter a positive number';
    this.setState(
      {errorsForInputs:
        {
          [inputName]: error
        },
        [inputName]: ''
      }
    );
  }

  handleInputFocusLoss = (event) => {
    if (!event.target.value) {
      this.setState({errorsForInputs: {}});
    }
  }

  handleInitialAmountChange(event) {
    const isValid = this.validateInput(event, 'initialAmount');
    if (isValid) {
      return;
    }
    this.createErrorMessage('initialAmount');
  }

  handleInterestRateChange(event) {
    const isValid = this.validateInput(event, 'interestRate');
    if (isValid) {
      return;
    }
    this.createErrorMessage('interestRate');
  }

  handleNumberOfYearsChange(event) {
    const isValid = this.validateInput(event, 'numberOfYears');
    if (isValid) {
      return;
    }
    this.createErrorMessage('numberOfYears');
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
        inputsForResultView: {
          initialAmountForResultView: Number.parseFloat(initialAmount).toFixed(2),
          interestRateForResultView: Number.parseFloat(interestRate).toFixed(2),
          numberOfYearsForResultView: numberOfYears
        },
        amountFromInterest: amountFromInterest,
        errorsForInputs: {
          initialAmount: '',
          interestRate: '',
          numberOfYears: ''
        },
      }
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="calculator-wrapper">
          <h2>Calculator</h2>
          <p className="above-form-instruction">Please Enter Your Values Below:</p>
          <form className="compound-interest-form" onSubmit={this.handleSubmit}>
            <div className="input-wrapper">
              <label>
                Initial Amount (Principal)
                <p className="input-hint">Minimum: £1</p>
                <p className="input-error-display">{this.state.errorsForInputs.initialAmount}</p>
                <input
                  id="amount"
                  type="number"
                  min="1"
                  step="any"
                  required
                  value={this.state.initialAmount}
                  onChange={this.handleInitialAmountChange}
                  onBlur={this.handleInputFocusLoss}
                />
              </label>
            </div>
            <div className="input-wrapper">
              <label>
                Interest Rate (%)
                <p className="input-hint">Minimum: 0.01%</p>
                <p className="input-error-display">{this.state.errorsForInputs.interestRate}</p>
                <input
                  type="number"
                  min="0.01"
                  step="any"
                  required
                  value={this.state.interestRate}
                  onChange={this.handleInterestRateChange}
                  onBlur={this.handleInputFocusLoss}
                />
              </label>
            </div>
            <div className="input-wrapper">
              <label>
                Number of Years
                <p className="input-hint">Whole years only</p>
                <p className="input-error-display">{this.state.errorsForInputs.numberOfYears}</p>
                <input
                  type="number"
                  min="1"
                  required
                  value={this.state.numberOfYears}
                  onChange={this.handleNumberOfYearsChange}
                  onBlur={this.handleInputFocusLoss}
                />
              </label>
            </div>
            <input id="calculate-button" type="submit" value="Calculate" />
          </form>
        </div>
        <ResultView
          balance={this.state.balance}
          inputsForResultView={this.state.inputsForResultView}
          amountFromInterest={this.state.amountFromInterest}
        />
        <UsageNotesView />
      </div>
    );
  }
}

export default Calculator;