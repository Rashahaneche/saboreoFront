import React from 'react';
import SearchBar from '../Searchbar/Searchbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./Home.css"
import Card from '../Cards/Card';
import axios from 'axios';
import Macarrones from '../../images/MacarronesConChorizo.jpeg'
const Home = () => {
  const [dishes, setDishes] = React.useState([]);
  
  React.useEffect(() => {
    axios.get('http://localhost:3000/dish/60e2f1b310c0438886eb05a3')
    .then(function (response) {
      setDishes([response.data]) 
    })
    .catch(function (error) {
    })
  },[])
  return (
    
    <section>
      <Header/>
      <SearchBar/>
      <div className="main-div">
        <div className="title">
          <h1 > PLATOS POPULARES </h1>
        </div>
        <div className="card-div">
          {dishes.length && dishes.map(dish => <Card
            key= {dish._id}
            title={dish.name}
            description= {dish.description}
            image={Macarrones}
            />)}
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </section>
  )
};
export default Home;

