import React from 'react';
import SearchBar from '../Searchbar/Searchbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ResultsPage = (props) => {
console.log(props);
let query = (new URLSearchParams(window.location.search)).get("query")
return(
    <section>
        <Header/>
        <SearchBar/>
        <div className="main-div">
            <div className="title">
            <h1 > Resultados de búsqueda para {query}</h1>
            </div>
        </div>
        <Footer/> 
    </section>     
);
}
export default ResultsPage;