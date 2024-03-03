import React from 'react';
import './tarjeta.scss';

const Tarjeta = ({ imagen, titulo, texto, boton }) => {
  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>
      <div className="contenido">
        <img src={imagen} alt={titulo} />
        <div className="texto">{texto}</div> 
      </div>
      <button>{boton}</button>
    </div>
  );
}

export default Tarjeta;
