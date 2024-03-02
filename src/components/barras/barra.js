import './barra.scss';


const Barra = () => {
  return (
    <div className="barra">
      <p>servicioalcliente@lasante.com.co</p> 
      <a href="https://www.facebook.com/medicamentoslasante/">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-facebook" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
      </a>
      <a href="https://www.instagram.com/medicamentoslasante/">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
      </a>
      <input type="search" placeholder="Buscar..." />
      <a href="https://www.lasante.com.co/?s=">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
      </a>
    </div>
  )
}

export default Barra
