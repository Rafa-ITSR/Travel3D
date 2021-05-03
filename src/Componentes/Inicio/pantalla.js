import trav from '../../img/trav.png';

export default function Pantalla(){
return(

 <div class="col s4 m3 offset-m2 l2 offset-l1">
 <div class="card-panel yellow lighten-10 z-depth-1">
   <div class="row valign-wrapper">
     <div class="col s2">
       <img src={trav}  class="circle responsive-img" height="250px" width="350px" /> 
       
     </div>
     <div class="col s2">
     </div>
   </div>
 </div>
</div>



)
}