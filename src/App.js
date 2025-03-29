// Archivo: src/App.js
// Este es el componente principal que controla toda la aplicación

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TarjetaCarrera from './components/TarjetaCarrera';
import Materia from './components/Materia';
import universidadData from './data/universidadData';

function App() {
  // Estado para controlar qué página se muestra: 'home' o 'detalle'
  const [paginaActual, setPaginaActual] = useState('home');
  
  // Estado para guardar la carrera seleccionada
  const [carreraSeleccionada, setCarreraSeleccionada] = useState(null);
  
  // Estado para guardar el semestre seleccionado en la vista de detalle
  const [semestreSeleccionado, setSemestreSeleccionado] = useState(0);
  
  // Función para manejar la navegación desde la barra de navegación
  const handleNavClick = (pagina) => {
    setPaginaActual(pagina);
    if (pagina === 'home') {
      setCarreraSeleccionada(null);
    }
    
    // Si se hace clic en "Carreras", desplazar a la sección de carreras
    if (pagina === 'home') {
      setTimeout(() => {
        const carrerasSection = document.getElementById('carreras');
        if (carrerasSection) {
          carrerasSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  // Función para ver el detalle de una carrera
  const verDetalleCarrera = (carreraId) => {
    // Buscar la carrera en los datos
    const carrera = universidadData.carreras.find(c => c.id === carreraId);
    if (carrera) {
      // Guardar la carrera y cambiar la página
      setCarreraSeleccionada(carrera);
      setPaginaActual('detalle');
      // Resetear el filtro de semestre
      setSemestreSeleccionado(0);
      // Desplazar al inicio de la página
      window.scrollTo(0, 0);
    }
  };
  
  // Función para volver a la página de inicio
  const volverAInicio = () => {
    setPaginaActual('home');
    setCarreraSeleccionada(null);
    // Desplazar al inicio de la página
    window.scrollTo(0, 0);
  };
  
  // Contenido para la página de inicio
  const renderPaginaInicio = () => (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bienvenido al Sistema de Información Académica</h1>
        <h2>Universidad O&M</h2>
        <p>Explora nuestras carreras y descubre tu futuro profesional</p>
      </div>
      
      <div id="carreras" className="carreras-section">
        <h2>Nuestras Carreras</h2>
        <div className="carreras-grid">
          {universidadData.carreras.map(carrera => (
            <TarjetaCarrera 
              key={carrera.id} 
              carrera={carrera} 
              onVerPensum={verDetalleCarrera} 
            />
          ))}
        </div>
      </div>
    </div>
  );
  
  // Contenido para la página de detalle de carrera
  const renderPaginaDetalle = () => {
    // Si no hay carrera seleccionada, mostrar mensaje
    if (!carreraSeleccionada) return <div>Selecciona una carrera</div>;
    
    // Obtener el número máximo de semestres
    const maxSemestres = Math.max(...carreraSeleccionada.materias.map(m => m.semestre));
    
    // Filtrar materias por semestre seleccionado
    const materiasFiltradas = semestreSeleccionado === 0 
      ? carreraSeleccionada.materias 
      : carreraSeleccionada.materias.filter(m => m.semestre === semestreSeleccionado);
    
    return (
      <div className="detalle-container">
        <button className="boton-volver" onClick={volverAInicio}>
          ← Volver a carreras
        </button>
        
        <div className="detalle-header">
          <h1>{carreraSeleccionada.nombre}</h1>
          <p>{carreraSeleccionada.descripcion}</p>
          <div className="detalle-info">
            <p><strong>Duración:</strong> {carreraSeleccionada.duracion}</p>
            <p><strong>Total de Créditos:</strong> {carreraSeleccionada.totalCreditos}</p>
          </div>
        </div>
        
        <div className="pensum-section">
          <h2>Plan de Estudios (Pensum)</h2>
          
          <div className="filtro-semestre">
            <label>Filtrar por Semestre:</label>
            <select 
              value={semestreSeleccionado} 
              onChange={(e) => setSemestreSeleccionado(parseInt(e.target.value))}
            >
              <option value={0}>Todos los semestres</option>
              {[...Array(maxSemestres)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  Semestre {index + 1}
                </option>
              ))}
            </select>
          </div>
          
          <div className="materias-list">
            {materiasFiltradas.map(materia => (
              <Materia key={materia.id} materia={materia} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Renderizar la página actual
  return (
    <div className="App">
      <Navbar onNavClick={handleNavClick} />
      <main className="main-content">
        {paginaActual === 'home' ? renderPaginaInicio() : renderPaginaDetalle()}
      </main>
      <footer className="footer">
        <p>© 2025 Universidad O&M - Sistema de Información Académica</p>
      </footer>
    </div>
  );
}

export default App;