import React from 'react';
import './card.scss';

const Card = ({ imagen, titulo, texto, color }) => {
  return (
    <div className='card' style={{ backgroundColor: `rgb(${color})` }}>
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </div>
  );
};

export default Card;
