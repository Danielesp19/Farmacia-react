import React from 'react';
import './separador.scss';

const Separador = ({ mensaje }) => {
  return (
    <div className="separador">
      
        <span>{mensaje}</span>
      
    </div>
  );
}

export default Separador;

