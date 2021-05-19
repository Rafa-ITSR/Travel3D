import './App.css';

import Entrada from './Componentes/Inicio/Entrada';
//import Pantalla from './Componentes/Inicio/pantalla';
import Adorno from './Componentes/Inicio/adorno';
import Sesion from './Componentes/Inicio/Sesion';
import what from '../src/img/whats.png';
import face from '../src/img/face.png';
import pint from '../src/img/pint.png';
import snap from '../src/img/snap.png';
import insta from '../src/img/ign.png';
import tumb from '../src/img/tumblr.png';
import choco from '../src/img/choco.png';
import trav from '../src/img/trav.png';
import './fondo.css';
function App(){
  return(
    
  <div className="App">
  <div className="background"> 
  <Sesion/>
  
  
 
 
  <body> 
  <div class="col s4 m3 offset-m2 l2 offset-l1">
   <div class="left">
     <div class="col s2">
       <img src={trav}   class="responsive-img" height="300px" width="450px" />  
     </div>
     <div class="col s2">
     </div>
   </div> 
</div>
</body>

<body>
  <div class="col s4 m3 offset-m2 l2 offset-l1">
   <div  class="left">
     <div class="col s2">
       <img src={choco}   class="responsive-img" height="250px" width="350px" />  
     </div>
     <div class="col s2">
     </div>
   </div>
</div>
</body>             
  
  <Adorno/>

  
  <html> 
        <head> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    </head>
    <i class="large material-icons">account_circle</i>
</html>

  <Entrada/>
          <button class="btn waves-effect waves-light black" type="submit" name="action">Registrarse
   <i class="material-icons right">account_circle</i>
 </button>
       
  
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

</div>
  

  </div>
  )
}
export default App