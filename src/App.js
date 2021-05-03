import './App.css';
import Registro from './Componentes/Inicio/Menu';
import Entrada from './Componentes/Inicio/Entrada';
import Pantalla from './Componentes/Inicio/pantalla';
import Adorno from './Componentes/Inicio/adorno';

function App(){
  return(
  
  <div className="App">


    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Lugares</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Mapa</a></li>
        <li><a href="badges.html">Conoce</a></li>
        <li><a href="collapsible.html">Aplicación</a></li>
      </ul>
    </div>
  </nav>

  
  <Adorno/>

  <Pantalla/>   <Registro/>
<Entrada/>


  
  </div>
  )
}
export default App