import React , { useEffect,useState } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Card';
import axios from 'axios';
import Macarrones from '../../images/MacarronesConChorizo.jpeg';

const ResultsPage = (props) => {
let query = (new URLSearchParams(window.location.search)).get("query")

const [dishes, setDishes] = useState([]);
  
 useEffect(() => {
    axios.get('http://localhost:3000/dish/60e2f1b310c0438886eb05a3')
    .then(function (response) {
      setDishes([response.data]) 
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])
return(
    <section>
        <Header/>
        <SearchBar/>
        <div className="main-div">
            <div className="title">
                <h1 > Resultados de búsqueda para {query}</h1>
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
        <Footer/> 
    </section>     
);
}
export default ResultsPage;