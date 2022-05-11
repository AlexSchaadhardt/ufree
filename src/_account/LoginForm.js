import '../App.css';
import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
function LoginForm() {


  const [name, setName] = useState('');
  const [password, setPassword] = useState('');



  const history= useHistory();
  const validate = (username, password) => {
    console.log(username + " and " + password)
    const validateURL = ["http://localhost:3001/?username=" + username + "&password=" + password]
    fetch(validateURL, {
     
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      if (json["validation"] === "username"){
        alert("Username did not match or is not in system.")
      }
      else if (json["validation"] === "password") {
        alert("Password did not match or is not in system.")
      }
      else if (json["validation"] === "success") {
        push(username)
        return true
      }
      resetButton()
    })
    /*
    if (username === '' || password === '') {
      alert('Please fill all the fields')
    }
    for (let i = 0; i<users.length; i++) {
      if (users[i].Username === username && users[i].Password === password){
        console.log("Match Found")
        push(username)
        return true}
      }
      resetButton();
      */
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