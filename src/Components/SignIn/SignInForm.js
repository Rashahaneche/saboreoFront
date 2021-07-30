import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import DefButton from '../Button/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext'

const SignInForm = () => {

	// Llamanos al contexto
	const AuthContext = useAuthContext();

    const initInfo = {
        nickname: '',
        password: ''
    }

    const validate = () => {
        axios.get (`http://localhost:3000/user/validate?nickname=${inputInfo.nickname}`)
        .then(function(response) {
            setIsUser(true);
            console.log('hello', response.data)
            if (response.data) setIsUser(true);
             else setIsNotUser(true);
        })
        .catch(function (error) {
            setIsNotUser(true);
        })
    }
    
    
    const history = useHistory();
    const [inputInfo, setInputInfo] = useState(initInfo)
	  const logIn = () => {
		axios.post ('http://localhost:3000/user/login', inputInfo)
		.then(function (response) {
			
			// Pasamos datos a AuthContext
			const {token, profile}	= response.data;
			AuthContext.userLogin(token, profile);
			setWelcome(true);
			setInputInfo(initInfo);
		})
		.then (() => {setTimeout (()=> {
			history.push('/');
			}, 2000); 
			})
		.catch(function (error) {
			setIsError(true);
			setInputInfo(initInfo);
		});
	}
      React.useEffect(()=>{
        setDisabledButton(!Object.values(inputInfo).every(field=>field.length)) 
    },[inputInfo]);
  
    const [disabledButton, setDisabledButton] = useState(true);
    const [welcome, setWelcome] = useState(false);
    const [isNotUser, setIsNotUser] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isError, setIsError] = useState(false);


    return (
    <div className = "formCont">
        <form>
            <div>
            <h2>Ingresa tus datos</h2>
            <TextField  required 
                id="standard-required" 
                label="Nickname" defaultValue="" 
                onBlur={validate} 
                onFocus={() => setIsNotUser(false)} 
                onChange={e => setInputInfo({nickname:e.target.value, password:inputInfo.password})} /><br />
            <TextField  required
                id="standard-password-input"
                label="Contraseña"
                type="password"
                autoComplete="current-password"
                onChange={e => setInputInfo({nickname:inputInfo.nickname, password:e.target.value})}
                /><br />
            <DefButton text= "Ingresar" disabled={disabledButton} onClick={logIn} />
            </div>
        </form>
            {
            welcome && <p className="p_success">Nos encanta verte de nuevo</p>
            }
            {
            isUser && <p className="p_success">Usuario registrado</p>
            }
            {
            isNotUser && <p className="p_error">Usuario no registrado</p>
            }
            {
            isError && <p className="p_error">Contraseña incorrecta</p>
            }
    </div>
    )
};
export default SignInForm