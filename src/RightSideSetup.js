// RightSideSetup.js
import React from 'react';
import TaxButton from './TaxButton';
import './RightSideSetup.css';


const RightSideSetup = () => {
  const handleTaxSaveOldRegime = () => {
    // Logic for Tax Save under Old Regime
  };

  const handleTaxSaveNewRegime = () => {
    // Logic for Tax Save under New Regime
  };

  const handleTDSDate = () => {
    // Logic for TDS till date
  };

  const handleExpectedTDS = () => {
    // Logic for Expected Full TDS
  };

  const handleExpectedRefund = () => {
    // Logic for Expected Refund
  };

  return (
    <div className="right-side-setup">
    <div className="tax-button-container">
      <TaxButton label="Tax Save under Old Regime" onClick={handleTaxSaveOldRegime} />
    </div>
    <div className="tax-button-container">
      <TaxButton label="Tax Save under New Regime" onClick={handleTaxSaveNewRegime} />
    </div>
    <div className="tax-button-container">
      <TaxButton label="TDS till date" onClick={handleTDSDate} />
    </div>
    <div className="tax-button-container">
      <TaxButton label="Expected Full TDS" onClick={handleExpectedTDS} />
    </div>
    <div className="tax-button-container">
      <TaxButton label="Expected Refund" onClick={handleExpectedRefund} />
    </div>
  </div>
  );
};

export default RightSideSetup;