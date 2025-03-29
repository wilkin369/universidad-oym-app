// Archivo: src/components/Materia.js
// Este componente muestra la información de una materia

import React from 'react';
import './Materia.css';

function Materia({ materia }) {
  return (
    <div className="materia-container">
      <div className="materia-header">
        <h3 className="materia-nombre">{materia.nombre}</h3>
        <span className="materia-codigo">{materia.codigo}</span>
      </div>
      <div className="materia-content">
        <div className="materia-detalles">
          <p><strong>Créditos:</strong> {materia.creditos}</p>
          <p><strong>Semestre:</strong> {materia.semestre}</p>
          <p><strong>Prerrequisitos:</strong> {
            materia.prerrequisitos.length > 0 
            ? materia.prerrequisitos.join(", ") 
            : "Ninguno"
          }</p>
        </div>
      </div>
    </div>
  );
}

export default Materia;