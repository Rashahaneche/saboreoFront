import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import DefButton from '../Button/Button';
import "./DishEdit.css"

const DishEdit= ({id}) => {
const [dish, setDish] = useState({
    name:"",
    description:"",
    price:""
});
console.log(dish);
useEffect(() => {
    axios.get(`http://localhost:3000/dish/${id}`)
    .then(function (response) {
        console.log(response.data);
      setDish(response.data[0]) 
    })
    .catch(error => { 
      console.log(error);
    })
  },[]);

const postDish = () =>{
    axios.post(`http://localhost:3000/dish/${id}`,dish)
    .then(function (response) {
        console.log('success');
      })
    .catch(function (error) {
        console.log(error);
      });
}
console.log(dish);

return (

<form className="modal">
   <TextField  required
                type="text"
                value={dish.name}
                onChange={e => setDish({
                    ...dish,
                    name:e.target.value
                })}
                />
                <br />
   <TextField  required
                type="text"
                value={dish.description}
                onChange={e => setDish({
                    ...dish,
                    description:e.target.value
                })}
                /><br />
    <TextField  required
                type="text"
                value={dish.price}
                onChange={e => setDish({
                    ...dish,
                    price:e.target.value})}
                /><br />
    <DefButton text= "Editar" onClick={postDish} />
    
</form>)
}

export default DishEdit;
