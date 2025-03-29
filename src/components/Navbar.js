// Archivo: src/components/Navbar.js
// Este componente muestra la barra de navegación con el logo de la universidad

import React from 'react';
import './Navbar.css';

function Navbar({ onNavClick }) {
  // Función para manejar clics en los enlaces de navegación
  const handleNavClick = (pagina) => {
    // Prevenir el comportamiento por defecto del enlace
    if (onNavClick) {
      onNavClick(pagina);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo de la universidad */}
        <div className="navbar-logo">
          <img 
            src="/logo-oym.png" 
            alt="Logo Universidad O&M" 
            className="navbar-logo-img"
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer' }}
          />
          <h1>Universidad O&M</h1>
        </div>
        
        {/* Enlaces de navegación */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <button 
              className="navbar-link-button"
              onClick={() => handleNavClick('home')}
            >
              Inicio
            </button>
          </li>
          <li className="navbar-item">
            <button 
              className="navbar-link-button"
              onClick={() => handleNavClick('home')}
            >
              Carreras
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;