import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import DefButton from '../Button/Button';


const signUpForm = () => {
    
    const createUser = () => {
        axios.post ('http://localhost:3001/user/singin');
    }

    return <div className = "formCont">
    <form>
     <div>
    <h2>Ingresa tus datos</h2>
    <TextField required id="standard-required" label="Nombre" defaultValue="" /><br />
    <TextField  required id="standard-required" label="Apellidos" defaultValue="" /><br />
    <TextField  required id="standard-required" label="Email" defaultValue="" /><br />
    <TextField 
          id="standard-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          /><br />
    <DefButton onClick={createUser} text= "Crear cuenta" />
    </div>
    </form>
    </div>
}

export default signUpForm()