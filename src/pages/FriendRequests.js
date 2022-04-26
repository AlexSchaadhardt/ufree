import React from 'react';
import { Link } from 'react-router-dom';

function FriendRequests() {
    return (
        <>
            <h1>Friend Requests</h1>
            <Link className="App-link" to="/">Log Out</Link>
            <Link className="App-link" to="/profile">Return to Profile</Link>
        </>
    );
}

export default FriendRequests;