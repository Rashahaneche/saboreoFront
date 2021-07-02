import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import signUpForm from './SignUpForm.js';
import image from './table.png';

const SignUpPage = () => {

    return (
    <section>
        <Header />
        <div className = "flex-SignUp">
            <img className = "SignUp-Image" src={image} alt="table"></img>
            {signUpForm}

        </div>
        <div>
            <Footer/>
        </div>
    </section>
    )
};
export default SignUpPage