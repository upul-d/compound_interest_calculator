const calculator = require('../calculator');
const assert = require('assert');

// arguments are given as strings to represent data coming through the browser
describe('calculator', () => {
  it('should be able to convert interest rate to a decimal', () => {
    const actual = calculator.getInterestRateAsDecimal('5');
    const expected = 0.05;
    assert.strictEqual(actual, expected);
  });
})
