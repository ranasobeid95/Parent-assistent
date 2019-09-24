import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import LogIn from '../pages/LogIn';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <LogIn />
      </main>
      <Footer />
    </>
  );
}

export default App;
