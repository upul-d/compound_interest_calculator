const calculator = {
  getInterestRateAsDecimal: function(interestRate) {
    return (interestRate / 100);
  },
  isValidInput: function(input) {
    return input.includes('-')? false : true;
  },
  calculateCompoundInterest: function(initialAmount, interestRate, numberOfYears) {
    const multiplier = 1 + this.getInterestRateAsDecimal(interestRate);
    const balance = initialAmount * multiplier ** numberOfYears;
    return balance.toFixed(2);
  },
  calculateAmountGainedFromInterest: function(compoundInterest, initialAmount) {
    return (compoundInterest - initialAmount).toFixed(2);
  }
}

module.exports = calculator;