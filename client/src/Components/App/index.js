import React from 'react';
import Header from '../CommonComponent/Header';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
