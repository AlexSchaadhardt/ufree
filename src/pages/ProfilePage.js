import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import '../App.css';

function ProfilePage() {
    return (
        <header className="App">
            <Header/>
            <Link className="App-link" to="/">Log Out</Link>
            <Link className="App-link" to="/contact">Go the Contact Page</Link>
        </header>
    );
}

export default ProfilePage;