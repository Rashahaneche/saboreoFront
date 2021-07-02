import React from 'react';
import SearchBar from '../Searchbar/Searchbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./Home.css"
import Cards from '../Cards/Card';
import axios from 'axios';
import Macarrones from '../../images/MacarronesConChorizo.jpeg'
const Home = () => {
  const [dishes, setDishes] = React.useState([]);
  
  React.useEffect(() => {
    axios.get('http://localhost:3000/dish/60da20c7fc389c6744d706dc')
    .then(function (response) {
      console.log(response);
      setDishes([response.data]) 
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])
  console.log('Esta es la info:', dishes.name);
  return (
    
    <section>
      <Header/>
      <SearchBar/>
      <div className="main-div">
        <div className="title">
          <h1 > PLATOS POPULARES </h1>
        </div>
        <div className="card-div">
          {dishes.length && dishes.map(dish => <Cards 
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

