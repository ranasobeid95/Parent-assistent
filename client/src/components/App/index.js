import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Error from '../pages/Error';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Error />
      </main>
      <Footer />
    </>
  );
}

export default App;
