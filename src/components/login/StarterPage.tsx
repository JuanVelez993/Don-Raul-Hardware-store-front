import * as React from 'react';
import LoginForm from '../../components/login/LoginForm';

const StarterPage: React.FunctionComponent = () => {


    return (
        <div >
            <h1>Please login before accessing the store.</h1>
            <LoginForm />
        </div>
    );
};

export default StarterPage;