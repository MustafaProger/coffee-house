import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoffeeHouse from "./pages/coffee-house/CoffeeHouse";
import OurCoffee from "./pages/our-coffee/OurCoffee";
import ScrollToTop from "./ScrollToTop";
import RandomCoffee from './pages/random-coffee/RandomCoffee';
import CoffeApi from "./services/CoffeeApi"; // Импортируем CoffeApi

const App = () => {

  const coffeeApi = new CoffeApi(); // Создаём экземпляр CoffeApi

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<CoffeeHouse />} />
        <Route exact path="/our-coffee" element={<OurCoffee />} />
        <Route exact path="/random-coffee" element={<RandomCoffee coffeeApi={coffeeApi} />} />
      </Routes>
    </Router>
  );
};

export default App;