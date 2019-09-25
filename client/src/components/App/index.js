import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import HomeWork from '../pages/HomeWork';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <HomeWork />
      </main>
      <Footer />
    </>
  );
}

export default App;
