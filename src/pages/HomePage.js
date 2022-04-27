import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComp from '../_components/HeaderComp';
import LoginForm from '../_account/LoginForm';
import CreateAccount from '../_account/CreateAccount';

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