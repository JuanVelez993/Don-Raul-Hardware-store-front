import { Anchor, Button } from '@mantine/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/login/LoginForm';
import LoginEmail from './LoginEmail';
import SignInForm from './SignInForm';

const StarterPage: React.FunctionComponent = () => {


    return (
        <div className="start" >
            <h1 style={{ color: "cyan" }}>Please login before accessing the store.</h1>
            <div className="start">
                <LoginForm />
                <br/>
                <Anchor component={Link} to="/signIn">
                    <Button color="green"> Sign In</Button>
                </Anchor>
                <Anchor component={Link} to="/LoginEmail">
                     Log In
                </Anchor>
                
            </div>
            
        </div>
    );
};

export default StarterPage;