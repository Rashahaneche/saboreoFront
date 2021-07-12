import React , { useEffect,useState } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Card';
import axios from 'axios';
import Macarrones from '../../images/MacarronesConChorizo.jpeg';
import './resultsPage.css'

const ResultsPage = (props) => {
let query = (new URLSearchParams(window.location.search)).get("query")

const [dishes, setDishes] = useState([]);
  
 useEffect(() => {
    axios.get(`http://localhost:3000/dish/?text=${query}`)
    .then(function (response) {
      setDishes(response.data) 
    })
    .catch(function (error) {
      console.log(error);
    });
  },[query]);

return(
    <section>
        <Header/>
        <SearchBar />
        <div className="main-div">
            <div className="title">
                <h1 > Resultados de búsqueda para {query}</h1>
            </div>
            <div className="card-div">
            {
              dishes.length < 1
                ? <p>No hay resultados </p>
                : dishes.length && dishes.map(dish => <Cards 
                  key= {dish._id}
                  title={dish.name}
                  description= {dish.description}
                  image={Macarrones}
                  />)
            }
            </div>

        </div>
        <Footer/> 
    </section>     
);
}
export default ResultsPage;