import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoffeeHouse from './pages/coffee-house/coffee-house';
import OurCoffee from './pages/our-coffee/our-coffee';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/coffee-house" element={<CoffeeHouse />} />
        <Route path="/our-coffee" element={<OurCoffee />} />
        <Route path="/" element={<CoffeeHouse />} />  {/* по умолчанию открывается CoffeeHouse */}
      </Routes>
    </Router>
  );
};

export default App;