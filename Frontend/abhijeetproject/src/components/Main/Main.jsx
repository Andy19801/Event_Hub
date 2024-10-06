import React from 'react';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Ourservice from './component/Ourservice/Ourservice';
import About from './component/About/About';
import Gallary from './component/Gallary/Gallary';
import Review from './component/Review/Review';
import Contact from './component/Contact/Contact';

const Main = () => {
  return (
    <div>
      <Header />
      <About />
      <Home />
      <Review />
      <Gallary />
      <Ourservice />
      <Contact />

      
    </div>
  );
};

export default Main;
