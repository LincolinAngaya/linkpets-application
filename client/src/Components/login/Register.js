import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Register = () => {
  const history = useHistory();

    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");  


    function handleOnChange(event){
        if(event.target.name === "firstname"){
            setFirstname(event.target.value);
        }
        else if (event.target.name === "lastname"){
            setLastname(event.target.value);
        }
        else if (event.target.name === "email"){
            setEmail(event.target.value);
        }
        else{
            setPassword(event.target.value);
        }  
      }

      function handleCreateAccountAlert(responseData = {}){
        if(Object.values(responseData)[0] === "Admin already Exists"){
            alert("Admin email already exists, please Login!")
            history.replace("/sign-in")   
        }
        else{
           alert("Account Created successfully!")
           history.replace("/sign-in")     
        }
    }


    function handleCreateAccount(event){
        event.preventDefault()
        const newAdmin = {
            firstname: firstname,
            lastname : lastname,
            email: email.toLowerCase(), 
            password: password
        }
        fetch("https://linq-restaraunt.herokuapp.com/create-account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newAdmin)
        })
        .then(response => response.json())
        .then(responseData => handleCreateAccountAlert(responseData));
    }
  
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form action='' onSubmit={handleCreateAccount}>
              <input type='text' name='firstname'  placeholder='FirstName' value ={firstname} required id="firstname" onChange={handleOnChange} />
              <input type='text' name='lastname' placeholder='LastName' value ={lastname} required id="lastname" onChange={handleOnChange} />
              <input type='text' name='email' placeholder='Email' value ={email} required id="lastname" onChange={handleOnChange} />
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
