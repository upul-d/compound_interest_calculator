import React from 'react';

const ResultView = ({balance, initialAmountForResultView, amountFromInterest}) => {
  return (
    <div>
    <h2>Your Result</h2>
    <p>Balance: £{balance}</p>
    <p>Initial Amount (Principal): £{initialAmountForResultView}</p>
    <p>Amount From Interest: £{amountFromInterest}</p>
    </div>
  );
}

export default ResultView;