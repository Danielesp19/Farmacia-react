import React from 'react';
import './App.scss';

import Barra from './components/barras/barra';
import DropdownMenu from './components/Menu/Dessplegable';
import SetImagenes from './components/Imagenes/setdeimagenes';
import Card from './components/card/card';
import Separador from './components/separador/separador';
import Tarjeta from './components/tarjeta/tarjeta';


import miImagen from './imageness/laSante@2x.png';
import CardImagen1 from './imageness/oftalmico@3x.png';
import CardImagen2 from './imageness/interna@3x.png';
import CardImagen3 from './imageness/nervioso@3x.png';
import CardImagen4 from './imageness/vida@3x.png';
import CardImagen5 from './imageness/antiinfecciosos@3x.png';

import miImagen0 from './components/Imagenes/imagenes/oftamilcos.jpg';
import miImagen1 from './components/Imagenes/imagenes/BannerPagWebVitC_03.jpg';
import miImagen2 from './components/Imagenes/imagenes/BannerOftalmicos_24.jpg';
import miImagen3 from './components/Imagenes/imagenes/ART-OT-6839-BannerWeb_Desktop.jpg';
import miImagen4 from './components/Imagenes/imagenes/ART-OT-7940-BannerWeb_DesktopMedicamentos (1).jpg';

import miImagen5 from './imageness/WebLS_FotoBlog_Bacterias.jpg'
import miImagen6 from './imageness/WebLS_FotoBlog_InfVirales.jpg'
import miImagen7 from './imageness/WebLS_FotoBlog_PrevencionCov19.jpg'

import miImagen8 from './imageness/logo-rebaja.png'
import miImagen9 from './imageness/logo-lopido@2x.png'
import miImagen10 from './imageness/logo-colsusidio@2x.png'
import miImagen11 from './imageness/logo-cafam.png'
import miImagen12 from './imageness/LOGO-COMFANDI.png'
import miImagen13 from './imageness/droxi.png'
import miImagen14 from './imageness/logo-la-sante-naranja.png'

const imagenes1 = [
  {
    href: miImagen0,
    alt: 'pic 1'
  },
  {
    href: miImagen1,
    alt: 'pic 2'
  },
  {
    href: miImagen2,
    alt: 'pic 3'
  },
  {
    href: miImagen3,
    alt: 'pic 4'
  },
  {
    href: miImagen4,
    alt: 'pic 5'
  },
  
];
const imagenes2 = [
  {
    href: 'https://www.lasante.com.co/userfiles/2022/01/1401-Ibuprofeno-La-Sante.png',
    alt: 'pic 1'
  },
  {
    href: 'https://www.lasante.com.co/userfiles/2022/01/1401-Vitamina-C-Zinc-La-Sante.png',
    alt: 'pic 2'
  },
  {
    href: 'https://www.lasante.com.co/userfiles/2022/01/1401-vitamina-c-La-Sante.png',
    alt: 'pic 3'
  },
  {
    href: 'https://www.lasante.com.co/userfiles/2022/01/1401-oftamicos-La-Sante.png',
    alt: 'pic 4'
  },
  {
    href: 'https://www.lasante.com.co/userfiles/2022/01/1401-Naproxeno-La-Sante.png',
    alt: 'pic 5'
  },
]


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
        <SetImagenes imagenes={imagenes1}/>
      </div>
      
      <div className='mensaje'>
        <p>Contamos con un <strong>portafolio especializado</strong><br/> para cualquier tipo de necesidad <strong>¡Conócelo!</strong></p>
      </div>
      <div className='cards'>
        <Card imagen={CardImagen1} titulo="OFTÁLMICOS" texto="Soluciones oftálmicas para la salud visual.." color="	206, 229, 238" />
        <Card imagen={CardImagen2} titulo="MEDICINA INTERNA" texto="Enfocados en el manejo de los más frecuentes trastornos..." color="	255, 228, 204" />
        <Card imagen={CardImagen3} titulo="SISTEMA NERVIOSO" texto="Tratamientos dirigidos a los trastornos de sueño, depresión..." color="204, 198, 235" />
        <Card imagen={CardImagen4} titulo="CALIDAD DE VIDA" texto="Medicamentos contra el dolor y la inflamación, así como.." color="254, 223, 243" />
        <Card imagen={CardImagen5} titulo="INFECCIOSOS" texto="Enfocados en el tratamiento de infecciones por..." color="220, 255, 205" />
      </div>

      <div className='seccion4'>
        <div className='filtro-blanco'>
          <h2>Más de 30 años trabajando para tu salud</h2>
          <p>Más de 3 décadas de investigación, desarrollo y comercialización de medicamentos genéricos y de marca.</p>
          <button>EXPERIENCIA LA SANTE</button>
        </div>
      </div>
      <Separador mensaje="Conoce nuestros productos" />

      <div className='seccion6'>
        <SetImagenes imagenes={imagenes2}/>
      </div>
      <div className='seccion7'>
        <Tarjeta imagen={miImagen5} titulo="Infecciones virales" texto="Infecciones virales Causadas por virus, que son gérmenes muy pequeños, compuestos de material genético (ADN, ARN) con un recubrimiento de proteínas. Los virus pueden causar enfermedad" boton="ve mas" />
        <Tarjeta imagen={miImagen6} titulo="Bacterias" texto="Son seres vivos que contienen sólo una célula (unicelulares). Solo se pueden observar con un microscopio…" boton="ve mas" />
        <Tarjeta imagen={miImagen7} titulo="Prevención Covid 19" texto="Tips de prevención Covid 19 en tu vehículo y para tu mascota" boton="ve mas" />
      </div>
      <Separador mensaje="Nuestros aliados" />

      <div className='aliados'>
        <img src={miImagen8} alt="logo" />
        <img src={miImagen9} alt="logo" />
        <img src={miImagen10} alt="logo" />
        <img src={miImagen11} alt="logo" />
        <img src={miImagen12} alt="logo" />
        <img src={miImagen13} alt="logo" />
      </div>


      <div className='final'>
        <img src={miImagen14} alt="logo" />
        <form>
          <input type="email" placeholder="Introduce tu correo para suscribirte" />
          <button type="button">Suscribirse</button>
        </form>
        <div>
          <p>Contácto
            601 3647500 Cra 65 B No. 13-13 Zona industrial Montevideo, Bogotá
            Email: servicioalcliente@lasante.com.co
            Política de protección de datos personales</p>
        </div>
      </div>

    </div>
  );
}

export default App;
