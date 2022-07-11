import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Sobre from '../pages/Sobre';
import Projetos from '../pages/Projetos';
import Skills from '../pages/Skills';
import Main from '../pages/Main';

function Rotas() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </HashRouter>
  );
}

export default Rotas;
