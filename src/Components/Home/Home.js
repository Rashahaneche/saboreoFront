import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../Searchbar/Searchbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./Home.css"
import Cards from '../Cards/Card';
import Macarrones from '../../images/MacarronesConChorizo.jpeg'
const Home = () => {
  const [currentSliderOffset, setCurrentSliderOffset] = React.useState(0);
  const [dishes, setDishes] = useState([]);

  const move = direction => {
    console.log('current', currentSliderOffset);
    if (currentSliderOffset === 0 && direction === 'left') return;
    if (currentSliderOffset < (dishes.length-4)*(-450) && direction === 'right') return;
    const offset = 450 * (direction === 'right' ? -1 : 1);
    console.log('offset', offset);
    setCurrentSliderOffset(currentSliderOffset + offset)
  }
  
  useEffect(() => {
    axios.get('http://localhost:3000/dish')
    .then(function (response) {
      setDishes(response.data) 
    })
    .catch(error => { 
      console.log(error);
    })
  },[]);

  return (
    <section>
      <Header/>
      <SearchBar/>
      <div className="main-div">
        <div className="title">
          <h1>PLATOS POPULARES</h1>
        </div>
        <div className="carusel-div">
          <div id="slider" className="slider" style={{transform:`translateX(${currentSliderOffset}px)`}}>  
              {dishes.length && dishes.map(dish => <Cards 
                key= {dish._id}
                title={dish.name}
                description= {dish.description}
                image={Macarrones}
                />)}
          </div>
        </div>
        <div className="Carussel-Nav-Button">
            <button id="ourLeft" onClick={()=> move("left")}>Move left</button>
            <button id="outButton" onClick={()=> move("right")}>Move right</button>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </section>
  );
};

export default Home;
