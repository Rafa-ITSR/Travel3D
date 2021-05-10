import './App.css';
import Registro from './Componentes/Inicio/Menu';
import Entrada from './Componentes/Inicio/Entrada';
import Pantalla from './Componentes/Inicio/pantalla';
import Adorno from './Componentes/Inicio/adorno';
import Sesion from './Componentes/Inicio/Sesion';
import what from '../src/img/whats.png';
import face from '../src/img/face.png';
import pint from '../src/img/pint.png';
import snap from '../src/img/snap.png';
import insta from '../src/img/ign.png';
import tumb from '../src/img/tumblr.png';

function App(){
  return(
  
  <div className="App">
  <Sesion/>
  
  <Pantalla/>                            
  
  <Adorno/>

  <Registro/>
  <html> 
        <head> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    </head>
    <i class="large material-icons">account_circle</i>
</html>
<Entrada/>
  
<body> 

<div class="col s4 m3 offset-m2 l2 offset-l1">
  <div class="valign-wrapper" class="left">
    <div class="col s2">
      <div class="left">
      <img src={what}  class="responsive-img" height="50px" width="50px" /> 
    
    </div>
    </div>
  </div>
</div>

</body>
    
<body> 
<div class="col s4 m3 offset-m2 l2 offset-l1">
  <div class="valign-wrapper" class="left">
    <div class="col s2">
      <div class="left">
      <img src={face}  class="responsive-img" height="50px" width="50px" /> 
    </div>
    </div>
  </div>
</div>
</body>


<body> 
<div class="col s4 m3 offset-m2 l2 offset-l1">
  <div class="valign-wrapper" class="left">
    <div class="col s2">
      <div class="left">
      <img src={pint}  class="responsive-img" height="50px" width="50px" /> 
    </div>
    </div>
  </div>
</div>
</body>


<body> 
<div class="col s4 m3 offset-m2 l2 offset-l1">
  <div class="valign-wrapper" class="left">
    <div class="col s2">
      <div class="left">
      <img src={snap}  class="responsive-img" height="50px" width="50px" /> 
    </div>
    </div>
  </div>
</div>
</body>


<body> 
<div class="col s4 m3 offset-m2 l2 offset-l1">
  <div class="valign-wrapper" class="left">
    <div class="col s2">
      <div class="left">
      <img src={insta}  class="responsive-img" height="50px" width="50px" /> 
    </div>
    </div>
  </div>
</div>
</body>




<body> 
<div class="col s4 m3 offset-m2 l2 offset-l1">
  <div class="valign-wrapper" class="left">
    <div class="col s2">
      <div class="left">
      <img src={tumb}  class="responsive-img" height="55px" width="55px" /> 
    </div>
    </div>
  </div>
</div>
</body>



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

  
  </div>
  )
}
export default App