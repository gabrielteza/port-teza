import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-scroll";

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
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbar-link"
            >
              Pagina Inicial
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbar-link"
            >
              Sobre mim
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="projetos"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="navbar-link"
            >
              Projetos
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="contato"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbar-link"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
