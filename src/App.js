import React from 'react';
import Barra from './components/barras/barra';
import './App.scss';
import miImagen from './imagenes/laSante@2x.png';
import DropdownMenu from './components/Menu/Dessplegable';

function App() {
  return (
    <div className="App">
      <Barra />
      <div className='contenidos'>
        <img src={miImagen} alt="logo" />
        <h3>Somos</h3>
        <h3>Medicamentos Bioequivalentes</h3>
        <h3>Farmaco Vigilancia</h3>
        <DropdownMenu title="Blog La Sante" options={['Opción 1', 'Opción 2', 'Opción 3']} />
        <h3>Contacto</h3>
      </div>
      <div className='imagen'>
        
      </div>
    </div>
  );
}

export default App;
