import React, { useState, useEffect } from 'react';
import './setdeimagenes.scss'

const SetImagenes = ({imagenes}) => {

  const [imagenActual, setImagenActual] = useState(0);
  console.log(imagenes)

  useEffect(() => {
    const temporizador = setInterval(() => {
      setImagenActual((imagenActual + 1) % imagenes.length);
    }, 7000); 
    return () => clearInterval(temporizador); 
  }, [imagenActual, imagenes.length]);

  console.log("pic: ", imagenes[imagenActual].href)

  return (
    <div className='imagen'>
      <img src={imagenes[imagenActual].href} alt={imagenes[imagenActual].alt} />
    </div>
  );
};

export default SetImagenes;
