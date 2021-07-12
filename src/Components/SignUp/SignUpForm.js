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
    React.useEffect(()=>{
        setDisabledButton(!Object.values(inputInfo).every(field=>field.length)) 
    },[inputInfo]);
    const [isUserCreated, setIsUserCreated] = useState(false);
    const [isError, setIsError] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true)

    return (
        <div className = "formCont">
            <form>
                <div>
                <h2>Ingresa tus datos</h2>
                <TextField required id="standard-required" label="Nombre" value={inputInfo.name} onChange={e => setInputInfo({name: e.target.value, surname:inputInfo.surname, nickname: inputInfo.nickname, email:inputInfo.email, password:inputInfo.password }) }/><br />
                <TextField  required id="standard-required" label="Apellidos" value={inputInfo.surname} onChange={e => setInputInfo({name:inputInfo.name, surname:e.target.value, nickname: inputInfo.nickname, email:inputInfo.email, password:inputInfo.password})}/><br />
                <TextField required id="standard-required" label="Nickname" value={inputInfo.nickname} onChange={e => setInputInfo({name: inputInfo.name, surname:inputInfo.surname, nickname: e.target.value, email:inputInfo.email, password:inputInfo.password }) }/><br />
                <TextField  required id="standard-required" label="Email" value={inputInfo.email} onChange={e => setInputInfo({name:inputInfo.name, surname:inputInfo.surname, nickname: inputInfo.nickname, email:e.target.value, password:inputInfo.password})}/><br />
                <TextField  required
                    id="standard-password-input"
                    label="Contraseña"
                    type="password"
                    value={inputInfo.password}
                    onChange={e => setInputInfo({name:inputInfo.name, surname:inputInfo.surname, nickname: inputInfo.nickname, email:inputInfo.email, password:e.target.value})}
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