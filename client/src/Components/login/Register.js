import React, {useState} from 'react'
 import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Navbar from '../../Common/Navbar/Navbar';
import "./design.css"

const Register = ({ setUser }) => {
  
    const[username, setUsername] = useState("");
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");  


    function handleOnChange(event){
      if(event.target.name === "username"){
        setUsername(event.target.value);
    }else if(event.target.name === "firstname"){
            setFirstname(event.target.value);
        }else if (event.target.name === "lastname"){
            setLastname(event.target.value);
        }else if (event.target.name === "email"){
            setEmail(event.target.value);
        }
        else{
            setPassword(event.target.value);
        }  
      }

    function handleCreateAccount(event){
        event.preventDefault()
        const newAdmin = {
            username: username,
            first_name: firstname,
            last_name: lastname,
            email: email.toLowerCase(), 
            password: password
        }
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newAdmin)
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }
  return (
    <>
      <Navbar />
       <HeadTitle /> 
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Do you want to be our member? Create your account, it takes less than a minute.</p>
            <form action='' onSubmit={handleCreateAccount}>
              
              <input type='text' name='username'  placeholder='Username' value ={username} required id="username" onChange={handleOnChange} />
              <input type='text' name='firstname'  placeholder='FirstName' value ={firstname} required id="firstname" onChange={handleOnChange} />
              <input type='text' name='lastname' placeholder='LastName' value ={lastname} required id="lastname" onChange={handleOnChange} />
              <input type='email' name='email' placeholder='Email' value ={email} required id="email" onChange={handleOnChange} />
              <input type='password' name='password' placeholder='Password'value={password} required onChange={handleOnChange} />
              <button type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default Register
