// Archivo: src/index.js
// Este es el punto de entrada principal de React

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Renderizar la aplicación en el elemento root del HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);