import React from 'react';
import Header from '../CommonComponent/Header';
import Footer from '../CommonComponent/Footer';
import './index.css';

function App() {
  return (
    <div id="root">
      <Header />
      <main className="container"></main>
      <Footer />
    </div>
  );
}

export default App;
