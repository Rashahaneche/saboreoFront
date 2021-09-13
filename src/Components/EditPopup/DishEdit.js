import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import DefButton from '../Button/Button';
import "./DishEdit.css"

const DishEdit= ({id}) => {
console.log("soy rasha",id)
const [dish, setDish] = useState({});

useEffect(() => {
    axios.get(`http://localhost:3000/dish/${id}`)
    .then(function (response) {
      setDish(response.data) 
    })
    .catch(error => { 
      console.log(error);
    })
  },[]);

const postDish = () =>{
    axios.post(`http://localhost:3000/dish/${id}`)
    .then(function (response) {
        console.log('success');
      })
    .catch(function (error) {
        console.log(error);
      });
}

return (

<form className="modal">
   <TextField  required
                label="name"
                type="text"
                defaultValue={dish.name}
                onChange={e => setDish({name:e.target.value})}
                />
                <br />
   <TextField  required
                label="description"
                type="text"
                defaultValue={dish.description}
                onChange={e => setDish({description:e.target.value})}
                /><br />
    <TextField  required
                label="price"
                type="text"
                defaultValue={dish.price}
                onChange={e => setDish({price:e.target.value})}
                /><br />
    <DefButton text= "Editar" onClick={postDish} />
    
</form>)
}

export default DishEdit;
