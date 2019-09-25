import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Subject from '../pages/Subject';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Subject />
      </main>
      <Footer />
    </>
  );
}

export default App;
