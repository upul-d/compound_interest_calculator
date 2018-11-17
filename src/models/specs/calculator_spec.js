const calculator = require('../calculator');
const assert = require('assert');

// arguments are given as strings to represent data coming through the browser
describe('calculator', () => {
  it('should be able to convert interest rate to a decimal', () => {
    const actual = calculator.getInterestRateAsDecimal('5');
    const expected = 0.05;
    assert.strictEqual(actual, expected);
  });

  // the expected value has not been converted to a Number as it is unnecessary for the React front-end
  it('should be able to calculate compound interest to two decimal places', function() {
    const actual = calculator.calculateCompoundInterest('5000', '5', '10');
    const expected = '8144.47';
    assert.strictEqual(actual, expected);
  });
})
