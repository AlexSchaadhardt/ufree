import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComp from '../_components/HeaderComp';


function HomePage() {

    const push= (page) => {
        window.location.href = "http://localhost:3001/" + page
        };

    return(
        <div className='home-page'>
            <div className='home-page-header'>
            <HeaderComp />
            </div>
            <div className='home-page-left'>
                <button onClick={e => {
                    push("register")
                    e.preventDefault()
                    }}>
                    Register </button>
            </div>
            <div className = 'home-page-right'>
                <button onClick={e => {
                    push("login")
                    e.preventDefault()
                    }}>
                    Login </button>
            </div>
            <footer>
                 <Link className="link" to="/profile/test"> View App Demo</Link>
            </footer>
           
        </div>
    )
}

export default HomePage 