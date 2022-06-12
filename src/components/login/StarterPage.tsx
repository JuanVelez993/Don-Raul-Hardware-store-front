import * as React from 'react';
import LoginForm from '../../components/login/LoginForm';
import LoginEmail from './LoginEmail';
import SignInForm from './SignInForm';

const StarterPage: React.FunctionComponent = () => {


    return (
        <div className="start" >
            <h1 style={{ color: "rgb(51, 133, 255)" }}>Please login before accessing the store.</h1>
            <div className="options">
                <div className="option" >
                <LoginEmail />
                </div>
                
                <div className="option" >
                <SignInForm />
                </div>
               
                <div className="optiong" >
                <LoginForm />
                </div>
               
            </div>
            
        </div>
    );
};

export default StarterPage;