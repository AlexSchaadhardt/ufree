import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../_components/Header';
import '../App.css';
import '../Header.css'
import users from '../data/users.js'
import UserList from '../_components/UserList';
import Status from '../_components/Status';

function ProfilePage() {
    let curUser = 'test'
    return (
        <header className="App">
            <Header/>
            <div style={{height:"250px"}}></div>
            <Status/>
            <br></br>
            <Link className="App-link" to="/friendrequests">Friend Requests</Link>
           
            <UserList users={users} curUser = {curUser} />
            <Link className="App-link" to="/">Log Out</Link>
        </header>
    );
}

export default ProfilePage;