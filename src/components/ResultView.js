import React from 'react';

const ResultView = ({balance, initialAmountForResultView}) => {
  return (
    <div>
    <p>Balance: £{balance}</p>
    <p>Initial Amount: £{initialAmountForResultView}</p>
    </div>
  )
}

export default ResultView;