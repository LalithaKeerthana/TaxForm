import React from 'react';
import './TaxButton.css';
const TaxButton = ({ label, style, onClick }) => {
  return (
    <div className="button-container">
      <button className="tax-button" style={style} onClick={onClick}>
        {label}
      </button>
      <div className="tax-save-display" id={`${label.replace(/\s+/g, '-').toLowerCase()}-tax-save-display`}></div>
    </div>
  );
};

export default TaxButton;