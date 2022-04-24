import { useState } from 'react';
import React from 'react';
import './App.css';

function CreateAccount() {
    const [form, setform] = useState({
        userName: '',
        password: '',
        email: '',
        dropdown: '',
        order: ''
      })
    const inputHandler = (e) => {
        setform({ ...form, [e.target.userName]: e.target.value })
    }
    
    const submitButton = (e) => {
        e.preventDefault()
        console.log(form)
    
        if (form.userName === '' || form.password === '' || form.email === '' || form.dropdown === '' || form.order === '') {
          alert('Please fill all the fields')
        } 
        else {
          resetButton()
        }
    }
    
    const resetButton = (e) => {
        setform({
          userName: '',
          password: '',
          email: '',
          dropdown: '',
          order: ''
        })
    }
    return (
    <div className="Form-login">
        <h3>Create Account</h3>
        <div className="Form-login-entry">
            <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
            <input type="userName" userName="userName" className="form-control" value={form.userName}
                onChange={inputHandler} id="exampleFormControlInput1" />
        </div>
        <div className="Form-login-entry">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" value={form.email} onChange={inputHandler}
                userName="email" className="form-control" id="exampleFormControlInput1"
                placeholder="userName@example.com" />
        </div>
        <div className="Form-login-entry">
            <label htmlFor="exampleFormControlInput1" className="form-label">password</label>
            <input type="password" value={form.password} onChange={inputHandler}
                userName="password" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="Form-login-entry">
            <button type='submit' onClick={submitButton} className="Login-Btn">Submit</button>
            <button type='reset' onClick={resetButton} className="Login-Btn">Cancel</button>
        </div>
    </div>
    )
}

export default CreateAccount;