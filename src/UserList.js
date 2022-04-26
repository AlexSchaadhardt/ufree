import React from 'react';
import User from './User';

function UserList({ users }) {
    return (
      <div className="list-container">
        {users.map((user, i) => <User user={user} key={i} />)}
      </div>
    );
}
  
export default UserList;