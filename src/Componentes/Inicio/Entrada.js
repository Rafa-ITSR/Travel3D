
export default function Entrada() {
    return (

      <div class="row">
      <form class="col s3">
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
            <label for="first_name">Nombre(s)</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate"/>
            <label for="last_name">Apellidos</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input  type="text" class="validate"/>
            <label for="disabled">Fecha de nacimiento</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate"/>
            <label for="password">Contraseña</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate"/>
            <label for="email">Email</label>
          </div>
        </div>
      </form>
    </div>
    
   

        
    )
}
