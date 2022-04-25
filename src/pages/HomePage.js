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
            <h1>Home Page</h1>
            <Link className="App-link" to="/contact"> Go to the Contact Page</Link>
            <Link className="App-link" to="/about"> Go to the About Page</Link>
        </>
    )
}

export default HomePage 