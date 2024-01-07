// LeftSideSetup.js

import React, { useState } from 'react';
import './LeftSideSetup.css';

const LeftSideSetup = ({ regime, onRegimeChange, onAgeCategoryChange }) => {
  const handleRegimeChange = (event) => {
    onRegimeChange(event.target.value);
  };

  const handleAgeCategoryChange = (event) => {
    onAgeCategoryChange(event.target.value);
  };

  return (
    <div className='left-side-setup'>
      <div className={`form-container ${regime === 'old' ? 'old-regime' : ''}`}>
        <div className="form-group" style={{ width: '55px' }}>
          <label htmlFor="regime">Regime:</label>
          <select
            id="regime"
            className="p-2 border rounded"
            onChange={handleRegimeChange}
            value={regime}
          >
            <option value="new">New</option>
            <option value="old">Old</option>
          </select>
        </div>

        {regime === 'old' && (
          <div className="form-group" id="old-options" style={{ width: '55px' }}>
            <label htmlFor="old-options-select">Age Category</label>
            <select
              id="old-options-select"
              className="p-2 border rounded"
              onChange={handleAgeCategoryChange}
            >
              <option value="normal">Normal</option>
              <option value="senior">Senior</option>
              <option value="super-senior">supersenior</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSideSetup;
