import './App.css';
import React, { useState} from 'react';
import {BrowserRouter as Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import users from './data/users.js'
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
function LoginForm() {
  const [username, setName] = useState('');
  return (
    <div>
        <form>
          <fieldset>
            <legend>Your Details</legend>
            <label>Please enter your username
              <input type="text" value={username}
                onChange={e => setName(e.target.value)} />
            </label>
          </fieldset>
          <button onClick={e => {
            console.log("Form submitted for ", username)
            users.map(user => {
              console.log(user.Username)
              if (user.Username === username){
              console.log("Match found")
              useHistory.pushState("/ProfilePage")
              
            }
              useHistory.pushState("/")
            })
            //setName(e.target.value);
            //alert(`Your name is ${username}`);
            e.preventDefault()
          }}>Submit</button>
        </form>
    </div>
  );
}

export default LoginForm;