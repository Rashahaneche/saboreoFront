import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import DefButton from '../Button/Button';
import { useHistory } from 'react-router-dom';

const initInfo = {
  name: '',
  surname: '',
  nickname: '',
  email: '',
  password: ''
};
const SignUpForm = () => {  
    const [isUserCreated, setIsUserCreated] = useState(false);
    const [isError, setIsError] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);
    const [inputInfo, setInputInfo] = useState (initInfo)
    const history = useHistory();
    const createUser = () => {
        axios.post ('http://localhost:3000/user/', inputInfo)

          .then(function (response) {
            console.log('success');
            setIsUserCreated(true);
            setInputInfo(initInfo);
          })
          .then (() => {setTimeout (()=> {
              console.log('redirect');
              history.push('/');
            }, 2000); 
            })
          .catch(function (error) {
            console.log(error);
            setIsError(true);
            setInputInfo(initInfo);
          });
    }
    const limitText = (e) => {
      const deny = /[!@#$·%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*/g;
      const changed = e.target.value.toLowerCase().replaceAll(deny, '');
      setInputInfo({...inputInfo, nickname: changed }) 
    }
    React.useEffect(()=>{
        setDisabledButton(!Object.values(inputInfo).every(field=>field.length)) 
    },[inputInfo]);

    return (
        <div className = "formCont">
            <form>
                <div>
                <h2>Ingresa tus datos</h2>
                <TextField 
                  required 
                  id="standard-required" 
                  label="Nombre" 
                  value={inputInfo.name} 
                  onChange={e => setInputInfo({...inputInfo, name: e.target.value }) }/><br />
                <TextField  
                  required 
                  id="standard-required" 
                  label="Apellidos" 
                  value={inputInfo.surname} 
                  onChange={e => setInputInfo({...inputInfo, surname:e.target.value })}/><br />
                <TextField 
                  required 
                  id="standard-required" 
                  label="Nickname" 
                  value={inputInfo.nickname} 
                  onChange={limitText}/><br />
                <TextField  
                  required 
                  id="standard-required" 
                  label="Email" 
                  type="email" 
                  value={inputInfo.email} 
                  onChange={e => setInputInfo({...inputInfo, email:e.target.value })}/><br />
                <TextField  required
                    id="standard-password-input"
                    label="Contraseña"
                    type="password"
                    value={inputInfo.password}
                    onChange={e => setInputInfo({...inputInfo, password:e.target.value})}
                    /><br />
                <DefButton onClick={createUser} disabled={disabledButton} text= "Crear cuenta"/>
                </div>
            </form>
            {
            isUserCreated && <p className="p_success">Tu cuenta ha sido creada</p>
            }
            {
            isError && <p className="p_error">Ha ocurrido un error</p>
            }
         </div>
  )
};
export default SignUpForm