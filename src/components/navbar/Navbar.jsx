import React, { useState } from 'react';
import './nav.css'; 

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Pagina Inicial</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">Sobre Mim</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">Projetos</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
