import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css'
import FriendList from '../FriendList';
import userRequests from '../data/userRequests';

function FriendRequests() {
    const [username, setName] = useState('');
    return (
        <>
            <h1>Friend Requests</h1>
            <form>
          <fieldset>
            <legend>Add Friend</legend>
            <label>Please enter your friend's username:  
              <input type="text" value={username}
                onChange={e => setName(e.target.value)} 
                />
            </label>
          </fieldset>
          <button onClick={e => {
               setName(e.target.value);
               alert(`Friend request sent to ${username}`);
               e.preventDefault();
          }}> 
            Submit </button>
        </form>

        <Link className="App-link" to="/profile">Return to Profile</Link>
        <FriendList userRequests= {userRequests} />
        <Link className="App-link" to="/">Log Out</Link>
        </>
    );
}

export default FriendRequests;