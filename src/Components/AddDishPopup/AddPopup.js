import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import DefButton from '../Button/Button';
import { useHistory } from 'react-router-dom';
import Checkbox from "@material-ui/core/Checkbox";
import ReactDOM from "react-dom";
import UploadImage from './ImageUpload/UploadImages';



const newDishInfo = {
    name: '',
    description: '',
    price: '',
    allergens:'',
    vegan: 'No',
	  glutenFree:'No',
	  tags : '',
	  seller : "60e2edb5a4927b86a9d4446c"
  };

  console.log("hola", newDishInfo);
  const AddDish = () => {  
      const [isDishCreated, setIsDishCreated] = useState(false);
      const [isError, setIsError] = useState(false);
      const [disabledButton, setDisabledButton] = useState(true);
      const [inputInfo, setInputInfo] = useState (newDishInfo)
      const history = useHistory();
      console.log(inputInfo);
      const createDish = () => {
          axios.post ('http://localhost:3000/dish/', inputInfo)
            .then(function (response) {
              console.log('success');
              setIsDishCreated(true);
              setInputInfo(newDishInfo);
            })
            .then (() => {setTimeout (()=> {
                console.log('redirect');
                history.push('/');
              }, 2000); 
              })
            .catch(function (error) {
              console.log(error);
              setIsError(true);
              setInputInfo(newDishInfo);
            });
      }
      React.useEffect(()=>{
        setDisabledButton(!Object.values(inputInfo).every(field=>field.length)) 
    },[inputInfo]);
      return (
          <div>
              <form>
                  <div>
                  <h2>Ingresa la información de tu plato</h2>
                  <TextField  
                    required 
                    id="standard-required" 
                    label="Nombre del plato" 
                    value={inputInfo.name} 
                    onChange={e => setInputInfo({...inputInfo,name:e.target.value})} />
                  <br />
   <TextField  required 
                id="standard-required" 
                label="descripción del plato" value={inputInfo.description}
                onChange={e => setInputInfo({...inputInfo,description:e.target.value})} /><br />
    <TextField  required 
                id="standard-required" 
                label="price" value={inputInfo.price}
                onChange={e => setInputInfo({...inputInfo,price:e.target.value})} /><br /> 
    <TextField  id="standard-required" 
                label="allergens" value={inputInfo.allergens}
                onChange={e => setInputInfo({...inputInfo,allergens:e.target.value})} /><br />
    <TextField  id="standard-required" 
                label="tags" value={inputInfo.tags}
                onChange={e => setInputInfo({...inputInfo,tags:e.target.value})} /><br />

    <Checkbox/> Vegano <br/>
    <Checkbox/> Glutten Free <br/>  
    <UploadImage/>   
                  <DefButton onClick={createDish} text= "Añadir plato"/>
                  </div>
              </form>
              {
              isDishCreated && <p className="p_success">Tu plato ha sido añadido</p>
              }
              {
              isError && <p className="p_error">Ha ocurrido un error</p>
              }
           </div>

);}

export default AddDish;