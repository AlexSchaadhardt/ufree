import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComp from '../_components/HeaderComp';
import LoginForm from '../_account/LoginForm';
import CreateAccount from '../_account/CreateAccount';

function HomePage() {
    return(
        <div className='home-page'>
            <div className='home-page-header'>
            <HeaderComp />
            </div>
            <div className='home-page-left'>
                <CreateAccount/>
            </div>
            <div className = 'home-page-right'>
                 <LoginForm></LoginForm>
            </div>
            <footer>
                 <Link className="link" to="/profile"> View App Demo</Link>
            </footer>
           
        </div>
    )
}

export default HomePage 