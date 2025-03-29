// Archivo: src/components/TarjetaCarrera.js
// Este componente muestra la información básica de una carrera en forma de tarjeta

import React from 'react';
import './TarjetaCarrera.css';

function TarjetaCarrera({ carrera, onVerPensum }) {
  // Esta función se ejecuta cuando el usuario hace clic en "Ver Pensum"
  const handleClick = () => {
    onVerPensum(carrera.id);
  };

  return (
    <div className="tarjeta-carrera">
      <h2 className="tarjeta-titulo">{carrera.nombre}</h2>
      <p className="tarjeta-descripcion">{carrera.descripcion}</p>
      <div className="tarjeta-detalles">
        <p><strong>Duración:</strong> {carrera.duracion}</p>
        <p><strong>Total de Créditos:</strong> {carrera.totalCreditos}</p>
      </div>
      <button className="tarjeta-boton" onClick={handleClick}>Ver Pensum</button>
    </div>
  );
}

export default TarjetaCarrera;