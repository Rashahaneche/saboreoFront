import React from 'react';
import signUpForm from './SignUpForm.js';
import image from './table.png';

const SignUpPage = () => {

    return <div className = "flex-SignUp">
        <img className = "SignUpImage" src={image} alt="table"></img>
            {signUpForm}

    </div>
}
export default SignUpPage