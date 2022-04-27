import '../App.css';
import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import users from '../data/users.js'
function LoginForm() {


  const [name, setName] = useState('');
  const [password, setPassword] = useState('');



  const history= useHistory();
  const validate = (username, password) => {
    console.log(password)
    if (username === '' || password === '') {
      alert('Please fill all the fields')
    }
    users.map(user => {
      console.log(user.Username, user.Password)
      if (user.Username === username && user.Password === password){
        console.log("Match Found")
        push(username)
        return true}
      else {
        return false}
      })
      resetButton();
    };
  const resetButton = (e) => {
      setName('')
      setPassword('')
  }
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
            <br></br>
            <label>Password:
              <input type="text" value={password}
                onChange={e => setPassword(e.target.value)} 
                />
            </label>
            <hr />
            <button onClick={e => {
            validate(name, password)
            e.preventDefault()
            }}>
            Submit </button>
          </fieldset>


        </form>
    </div>
  );
}

export default LoginForm;