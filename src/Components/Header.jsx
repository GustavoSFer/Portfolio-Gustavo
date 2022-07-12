import React from 'react';
import '../Style/header.css';

function Header() {
  return (
    <div
      className="text-center p-3 font-text nav containerHeader vidro"
      id="nav"
    >
      <h1 className="fw-bold text-color">Gustavo Fernandes</h1>
      <div className="p-3">
        <a href="#Sobre" className="m-3 text-decoration-none text-color">Sobre Mim</a>
        <a href="#Projetos" className="m-3 text-decoration-none text-color">Projetos</a>
        <a href="#Habilidades" className="m-3 text-decoration-none text-color">Habilidades</a>
        <a href="#Contato" className="m-3 text-decoration-none text-color">Contato</a>
      </div>
    </div>
  );
}

export default Header;
