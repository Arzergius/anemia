import React from 'react';
import { Hero } from './components/Hero';
import { WhatIsAnemia } from './components/WhatIsAnemia';
import { Symptoms } from './components/Symptoms';
import { Treatment } from './components/Treatment';
import { Statistics } from './components/Statistics';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Hero />
      <WhatIsAnemia />
      <Symptoms />
      <Treatment />
      <Statistics />
      <Contact />
    </div>
  );
}

export default App;