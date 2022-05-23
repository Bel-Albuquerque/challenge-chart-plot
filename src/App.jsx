import React from 'react';
import './App.css';
import ChartLine from './components/Chart';
import Footer from './components/Footer';
import Input from './components/Input';

function App() {
  return (
    <>
      <main>
        <Input />
        <ChartLine />
      </main>
      <Footer />
    </>
  );
}

export default App;
