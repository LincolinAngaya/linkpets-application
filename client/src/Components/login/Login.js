import React, { useState }from 'react'
import { useHistory } from "react-router-dom";
import Navbar from '../../Common/Navbar/Navbar';
import { Link } from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Login = ({ setUser }) => {
  
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const history = useHistory();

  function handleOnChange(event){
    if (event.target.name === "email")
        setEmail(event.target.value);
    else{
        setPassword(event.target.value);
    }
}



function handleOnSubmit(event){

  const loginData = {
      email: email,
      password: password
  }

  event.preventDefault()
  fetch("/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      }, 
      body: JSON.stringify(loginData)
  })
  .then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
      }  

}
  return (
    <>
     <Navbar/>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form action='' onSubmit={handleOnSubmit} >
              <input type='text' name='email' placeholder='Email' value={email} required onChange={handleOnChange}/>
              <input type='password' name='password'  placeholder='Password' required id="password"  value={password} onChange={handleOnChange} />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span>I forgot my password</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>
                Don't have account? <Link to='/register'> <br />Become a Member!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default Login
