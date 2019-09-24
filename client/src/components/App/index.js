import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './index.css';
import Signup from '../pages/SignUp';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Signup />
      </main>
      <Footer />
    </>
  );
}

export default App;
