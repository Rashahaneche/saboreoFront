import React from 'react';
import SearchBar from '../Searchbar/Searchbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./Home.css"
import Cards from '../Cards/Card';

const Home = () => (
  <section>
    <Header/>
    <SearchBar/>
  <div className="main-div">
    <div className="title">
    <h1 > PLATOS POPULARES </h1>
    </div>
    
    <div className="card-div">
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
  </div>

  <div>
  <Footer/>
  </div>

    
  </section>

);

export default Home;