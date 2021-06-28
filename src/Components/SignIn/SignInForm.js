import React from 'react';
import TextField from '@material-ui/core/TextField';
import DefButton from '../Button/Button';


const signInForm = () => {
      
    return <div className = "formCont">
    <form>
     <div>
    <h2>Ingresa tus datos</h2>
    <TextField  required id="standard-required" label="Email" defaultValue="" /><br />
    <TextField 
          id="standard-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          /><br />
    <DefButton text= "Ingresar" />
    </div>
    </form>
    </div>
}

export default signInForm()