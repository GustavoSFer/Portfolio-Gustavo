import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from '../pages/Sobre';
import Projetos from '../pages/Projetos';
import Skills from '../pages/Skills';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
