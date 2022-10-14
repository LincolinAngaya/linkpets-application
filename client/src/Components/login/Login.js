import React, { useState }from 'react'
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Login = () => {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const history = useHistory();



  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }) .then(response => response.json())
    .then(userData => {
        //console.log(userData)
        if(Object.values(userData)[0] === "Invalid email or Password"){
            alert("Invalid email or Password!");
        }
        else{
            alert("Login successful!");
  
            localStorage.setItem("userData", JSON.stringify(userData));
            localStorage.setItem("loginStatus", JSON.stringify(true));
            history.replace("/")
        }  
    });
  }
  return (
    <>
   
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your username and password below to log in to your account and use the benefits of our website.</p>
            <form action='' onSubmit={handleSubmit} >
            <input type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
          />
              <input type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
          />

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
