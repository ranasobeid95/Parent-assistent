import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Activities from '../pages/Activities';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Activities />
      </main>
      <Footer />
    </>
  );
}

export default App;
