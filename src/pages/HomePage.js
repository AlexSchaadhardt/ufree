import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComp from '../HeaderComp';
import LoginForm from '../LoginForm';
import CreateAccount from '../CreateAccount';

function HomePage() {
    return(
        <>
            <HeaderComp/>
            <LoginForm/>
            <CreateAccount/>
            <Link className="App-link" to="/profile"> View App Demo</Link>
        </>
    )
}

export default HomePage 