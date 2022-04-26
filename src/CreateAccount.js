import './App.css';
import React, { useState} from 'react';
import users from './data/users.js'


function CreateAccount() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const validate = (username) => {
    users.map(user => {
      console.log(user.Username)
      if (user.Username === username){
        console.log("Match Found")
        return true}
      else {
        push(username)
        return false}
      })
    };
  const push = (username) => {
        alert(`You created account with username ${username}`);
        
      }
  return (
    <div>
        <form>
          <fieldset>
            <legend>Create Account</legend>
            <label>Username
              <input type="text" name={name}
                onChange={e => setName(e.target.name)} 
                />
            </label>
            <br></br>
            <label>Password
              <input type="text" password={password}
                onChange={e => setPassword(e.target.password)} 
                />
            </label>
            <br></br>
              <label>Username
              <input type="email" email={email}
                onChange={e => setEmail(e.target.email)} 
                />
            </label>
          </fieldset>
          <button onClick={e => {
            validate(name)
            e.preventDefault()
            }}>
            Submit </button>

        </form>
    </div>
  );
}
export default CreateAccount;