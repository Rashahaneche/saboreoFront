import React from 'react';
import SearchBar from '../Searchbar/Searchbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./UserProfile.css"
import MyDishes from "../MyDishes/MyDishes";
import UserCard from '../UserCard/UserCard';

const UserProfile = () => {
return(
    <>
    <section>
        <Header />
        <SearchBar />
        <div className="main-div-user">
            <UserCard />
            <MyDishes dishType="myOrders" />
            <MyDishes dishType="myDishes" />
        </div>
        <Footer /> 
    </section>
    </>
    )
};

export default UserProfile;