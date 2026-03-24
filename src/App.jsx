import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './dock-connector.js';
import './index.css';

const App = ({ data }) => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-500">
      <Header />
      <main>
        <Section data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
};

export default App;