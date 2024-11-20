import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoffeeHouse from "./pages/coffee-house/coffee-house";
import OurCoffee from "./pages/our-coffee/our-coffee";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route exact path="/coffee-house" element={<CoffeeHouse />} />
        <Route exact path="/our-coffee" element={<OurCoffee />} />
        <Route exact path="/" element={<CoffeeHouse />} />
      </Routes>
    </Router>
  );
};

export default App;