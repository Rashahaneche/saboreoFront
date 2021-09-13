import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DishList= () =>{

const [dishes, setDishes] = useState([]);

const id= "60e2edb5a4927b86a9d4446c";

useEffect(() => {
    axios.get(`http://localhost:3000/dish/user/${id}`)
    .then(function (response) {
      setDishes(response.data) 
      
    })
    .catch(error => { 
      console.log(error);
    })
  },[]);

return dishes.length && dishes.map (dish => <option value={dish._id}>{dish.name}</option>)


}

  export default DishList;