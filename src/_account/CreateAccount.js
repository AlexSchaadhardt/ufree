import '../App.css';
import React, { useState} from 'react';
import users from '../data/users.js'


function CreateAccount() {
  const [name, setName] = useState(''); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const validate = (username, password, name, email) => {
    if (username === '' || password === '' || name === '' || email ==='') {
      alert('Please fill all the fields')
    }
    else if (
      users.map(user => {
        console.log(user.Username)
        if (user.Username === username){
          alert('Account already exists with this username.')
          return false
        }
        else {
          return true
        }

      })) {
      push(username, password, name, email)
      }
    }
  const push = (username) => {
        alert(`You created account with username ${username}`);
        
      }
  return (
    <div>
        <form>
          <fieldset>
            <legend>Create Account</legend>
            <label>Username
              <input type="text" value={username}
                onChange={e => setUsername(e.target.value)} 
                />
            </label>
            <br></br>
            <label>Password
              <input type="text" value={password}
                onChange={e => setPassword(e.target.value)} 
                />
            </label>
            <br></br>
      
            <label>Name
              <input type="text" value={name}
                onChange={e => setName(e.target.value)} 
                />
            </label>
            <br></br>
            <label>Email
              <input type="email" value={email}
                onChange={e => setEmail(e.target.value)} 
                />
            </label>
            <br></br>
            <hr/>
            <button onClick={e => {
            validate(username, password, name, email)
            e.preventDefault()
            }}>
            Submit </button>
          </fieldset>


        </form>
    </div>
  );
}
export default CreateAccount;