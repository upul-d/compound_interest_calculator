const calculator = require('../calculator');
const assert = require('assert');

// arguments are given as strings to represent data coming through the browser
describe('calculator', () => {
  const initialAmount = '5000';
  let compoundInterest = '8144.47';

  it('should be able to convert interest rate to a decimal', () => {
    const actual = calculator.getInterestRateAsDecimal('5');
    const expected = 0.05;
    assert.strictEqual(actual, expected);
  });

  // the expected value has not been converted to a Number as it is unnecessary for the React front-end
  it('should be able to calculate compound interest to two decimal places', () => {
    const actual = calculator.calculateCompoundInterest(initialAmount, '5', '10');
    const expected = compoundInterest;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the amount gained from compound interest', () => {
    const actual = calculator.calculateAmountGainedFromInterest(compoundInterest, initialAmount);
    const expected = '3144.47';
    assert.strictEqual(actual, expected);
  });

  it('should not accept negative numbers (integers) as input', () => {
    const actual = calculator.isValidInput('-1');
    const expected = false;
    assert.strictEqual(actual, expected);
  });
})
