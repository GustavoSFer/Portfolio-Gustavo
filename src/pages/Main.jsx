import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CarroselItem from './Projetos';
import Skills from './Skills';
import Sobre from './Sobre';

function Main() {
  return (
    <div>
      <Header />
      <Sobre />
      <CarroselItem />
      <Skills />
      <Footer />
    </div>
  );
}

export default Main;
