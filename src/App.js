// src/App.js
import React, { useState } from 'react';
import TaxForm from './TaxForm';
import LeftSideSetup from './LeftSideSetup';

import RightSideSetup from './RightSideSetup';
import './App.css';

const App = () => {
  const [regime, setRegime] = useState('new');

  const handleRegimeChange = (newRegime) => {
    setRegime(newRegime);
  };
  return (
    <div className="App">
      <div className="App-container">
      <LeftSideSetup regime={regime} onRegimeChange={handleRegimeChange} />
      <TaxForm regime={regime} />
        <RightSideSetup />
      </div>
    </div>
  );
}


export default App;
