import React from 'react';
import '../App.css'


function User({ friend}) {
    return (
      <div className="userDisplay">
          <table>
              <tbody >
                  <tr>
                      <td width={"200px"}>
                        <h3>{friend}</h3>
                      </td>
                      <td width={"200px"}>
                          <button onClick={e => {
                                alert(`You accepted friend request from ${friend}`);
                                e.preventDefault();
                            }}>Add Friend</button>
                      </td>
                      <td>
                          <button onClick={e => {
                                alert(`You deleted friend request from ${friend}`);
                                e.preventDefault();
                            }}>Delete</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      
      </div>
    );
}

export default User;