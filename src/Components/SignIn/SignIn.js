import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignInForm from './SignInForm';
import image from './table.png';

const SignIn = () => {

    return (
        <section>
        <Header />
        <div className = "flex-SignUp">
            <img className = "SignUp-Image" src={image} alt="table"></img>
                <SignInForm />

        </div>
        <div>
            <Footer/>
        </div>
    </section>
    )
};
export default SignIn