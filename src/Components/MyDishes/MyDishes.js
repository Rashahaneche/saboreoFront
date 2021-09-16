import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Card';
import axios from 'axios';
import Macarrones from '../../images/MacarronesConChorizo.jpeg'
import './MyDishes.css'
import PopupToAddDish from '../AddDishPopup/Popup';
import PopupToEditDish from '../EditPopup/EditPopup';

const MyDishes = (props) => {
    const [dishes, setMyDishes] = useState([]);
    const [currentSliderOffset, setCurrentSliderOffset] = React.useState(0);

  const move = direction => {
    console.log('current', currentSliderOffset);
    if (currentSliderOffset === 0 && direction === 'left') return;
    if (currentSliderOffset <= (dishes.length-1)*(-320) && direction === 'right') return;
    const offset = 320 * (direction === 'right' ? -1 : 1);
    console.log('offset', offset);
    console.log('Lenght', dishes.length);
    setCurrentSliderOffset(currentSliderOffset + offset)
  }
    const id= "60e2edb5a4927b86a9d4446c"
    useEffect(() => {
        if (props.dishType==="myOrders"){
            axios.get(`http://localhost:3000/order/user/${id}`)
            .then(function (response) {
              setMyDishes(response.data) 
            })
            .catch(error => { 
              console.log(error);
            }) 
        } 
        if (props.dishType==="myDishes"){
            axios.get(`http://localhost:3000/dish/user/${id}`)
            .then(function (response) {
              setMyDishes(response.data) 
            })
            .catch(error => { 
              console.log(error);
            }) 
        } 
    },[]);
    


    return (
        <section className="myDishesContainer"> 
            <div className="myDishes-carusel-div" id="slider" style={{transform:`translateX(${currentSliderOffset}px)`}}>  
            { dishes.length ? dishes.map(dish => <Cards 
                key= {dish._id}
                title={dish.name}
                description= {dish.description}
                price={dish.price}
                image={Macarrones}
                />)
                :
                <p>No existen platos</p>
            }
            </div>
            {dishes.length ?
            <div>
                <div className="Carussel-Nav-Button">
                    <button id="ourLeft" onClick={()=> move("left")}>Move left</button>
                    <button id="outButton" onClick={()=> move("right")}>Move right</button>
                </div>
           { props.dishType==="myDishes" ? 
                <div>
                    <PopupToEditDish/>
                    <PopupToAddDish/>
                    
                </div>: null}
            </div>
            : null
        }
        </section>
    )
}

export default MyDishes;