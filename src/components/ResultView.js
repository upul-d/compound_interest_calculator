import React from 'react';

const ResultView = ({balance, initialAmountForResultView, amountFromInterest}) => {
  return (
    <div>
    <p>Balance: £{balance}</p>
    <p>Initial Amount: £{initialAmountForResultView}</p>
    <p>Amount From Interest: £{amountFromInterest}</p>
    </div>
  );
}

export default ResultView;