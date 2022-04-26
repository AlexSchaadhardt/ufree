import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import '../App.css';
import '../Header.css'
import users from '../data/users.js'
import UserList from '../UserList';
import Status from '../Status';

function ProfilePage() {
    return (
        <header className="App">
            <Header/>
            <div style={{height:"250px"}}></div>
            <Status/>
            <br></br>
            <Link className="App-link" to="/friendrequests">Friend Requests</Link>
           
            <UserList users={users}/>
            <Link className="App-link" to="/">Log Out</Link>
        </header>
    );
}

export default ProfilePage;