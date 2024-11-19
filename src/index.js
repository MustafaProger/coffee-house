import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Hero from './pages/hero/hero';
import About from './pages/about/about';
import OurBest from './pages/our-best/our-best';
import Footer from './components/footer/footer';
import Animation from './components/animation/animation';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Animation />
    <Hero />
    <About />
    <OurBest />
    <Footer />
    
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
