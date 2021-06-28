import React from 'react';
import signInForm from './SignInForm';
import image from './table.png';

const SignIn = () => {

    return <div className = "flex-SignUp">
        <img className = "SignUpImage" src={image} alt="table"></img>
            {signInForm}

    </div>
}
export default SignIn