import React from 'react';
import Friend from './Friend';

function FriendList({ userRequests }) {
    const currUser = userRequests.Billy23
    return (
      <div className="list-container">
        {currUser.map((friend, i) => <Friend friend={friend} key={i} />)}
      </div>
    );
}
  
export default FriendList;