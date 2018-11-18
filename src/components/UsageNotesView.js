import React from 'react';

const UsageNotesView = () => {
  return (
    <div className="usage-notes-container">
      <h3 className="usage-notes-header">Please Note</h3>
      <ul className="usage-notes-list">
        <li>This calculator assumes that interest is compounded yearly</li>
      </ul>
    </div>
  );
}

export default UsageNotesView;