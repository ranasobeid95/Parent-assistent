import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import HomePage from '../pages/Home';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
