import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import '../App.css';
import '../Header.css'
import users from '../data/users.js'
import UserList from '../UserList';

function ProfilePage({username}) {
    return (
        <header className="App">
            <Header/>
            <h1>Users</h1>
            <UserList users={users}/>
            <Link className="App-link" to="/">Log Out</Link>
            <Link className="App-link" to="/contact">Go the Contact Page</Link>
        </header>
    );
}

export default ProfilePage;