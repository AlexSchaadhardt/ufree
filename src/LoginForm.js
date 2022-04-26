import './App.css';
import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import users from './data/users.js'
function LoginForm() {


  const [name, setName] = useState('');
  const history= useHistory();
  const validate = (username) => {
    users.map(user => {
      console.log(user.Username)
      if (user.Username === username){
        console.log("Match Found")
        push(username)
        return true}
      else {
        return false}
      })
    };
  const push = (username) => {
        history.push("/profile");
        // history.push("/blog", { fromPopup: true });
        history.push({
          pathname: "/profile",
          state: { username: username }
        });
      }
  return (
    <div>
        <form>
          <fieldset>
            <legend>Login</legend>
            <label>Username:
              <input type="text" value={name}
                onChange={e => setName(e.target.value)} 
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

export default LoginForm;