import React from 'react';
import './user.css'
import './App.css'
import UserBusy from './UserBusy';


function User({ user}) {
    return (
      <div className="userDisplay">
          <table>
              <tbody >
                  <tr>
                      <td width={"200px"}>
                        <h3>{user.Name}</h3>
                      </td>
                      <td width={"200px"}>
                          <UserBusy Availability={user.Availability}/>
                      </td>
    
                      <td width={"400px"}>
                      <p>Time Left: {user.TimeLeft} hours</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      
      </div>
    );
}

export default User;