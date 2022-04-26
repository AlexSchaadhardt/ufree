import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComp from '../HeaderComp';
import LoginForm from '../LoginForm';
import CreateAccount from '../Create-account';

function HomePage() {
    return(
        <>
            <HeaderComp/>
            <LoginForm/>
            <CreateAccount/>
            <Link className="App-link" to="/profile"> Go to the Profile Page</Link>
        </>
    )
}

export default HomePage 