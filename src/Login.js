import { useState } from 'react';
import React from 'react';
import './App.css';

function Login() {
    const [form, setform] = useState({
        username: '',
        password: '',
      })
    const inputHandler = (e) => {
        setform({ ...form, [e.target.username]: e.target.value })
    }
    
    const submitButton = (e) => {
        e.preventDefault()
        console.log(form)
    
        if (form.username === '' || form.password === '') {
          alert('Please fill all the fields')
        } 
        else {
          resetButton()
        }
    }
    const resetButton = (e) => {
        setform({
          username: '',
          password: '',
        })
    }
    return (
    <div className="Form-login">
        <h3>Login</h3>
        <div className="Form-login-entry">
            <label className="form-label">Username</label>
            <input type="username" name="username" className="form-control" value={form.username}
                onChange={inputHandler} id="loginUsername" />
        </div>
        <div className="Form-login-entry">
            <label className="form-label">Password</label>
            <input type="password" value={form.password} onChange={inputHandler}
                name="password" className="form-control" id="loginPassword"/>
        </div>
        <div className="Form-login-entry">
            <button type='submit' onClick={submitButton} className="Login-Btn">Submit</button>
            <button type='reset' onClick={resetButton} className="Login-Btn">Cancel</button>
        </div>
    </div>
    )
}

export default Login;