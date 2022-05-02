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
        <header>
            <Header></Header>
            <div id="header-grad"  style={{position: 'relative', top: '99px'}}>
            <Status/>
            <br></br>
            <Link className="link" to="/friendrequests">Friend Requests</Link>
            <UserList users={users} curUser = {curUser} />       
            <Link className="link" to="/">Log Out</Link>
            </div>
  
        </header>
    );
}

export default ProfilePage;