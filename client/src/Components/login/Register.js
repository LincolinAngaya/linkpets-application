import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
 import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Navbar from '../../Common/Navbar/Navbar';
import "./design.css"

const Register = () => {
  const history = useHistory();
    const[membership, setMembership] = useState("");
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[location, setLocation] = useState("");
    const[image, setImage] = useState("");
    const[contact, setContact] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");  


    function handleOnChange(event){
      if(event.target.name === "membership"){
            setMembership(event.target.value);
        }else if(event.target.name === "firstname"){
            setFirstname(event.target.value);
        }else if (event.target.name === "lastname"){
            setLastname(event.target.value);
        }else if (event.target.name === "location"){
            setLocation(event.target.value);
        }else if (event.target.name === "image"){
             setImage(event.target.value);
        }else if (event.target.name === "contact"){
             setContact(event.target.value);
        }else if (event.target.name === "email"){
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
            first_name: firstname,
            last_name: lastname,
            location: location,
            image_url: image,
            contact: contact,
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
        .then(response => response.json())
        .then(responseData => handleCreateAccountAlert(responseData));
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
              <input type='text' name='membership'  placeholder='Membership' value ={membership} required id="membership" onChange={handleOnChange} />
              <input type='text' name='firs_tname'  placeholder='FirstName' value ={firstname} required id="firstname" onChange={handleOnChange} />
              <input type='text' name='last_name' placeholder='LastName' value ={lastname} required id="lastname" onChange={handleOnChange} />
               <input type='text' name='location' placeholder='Location' value ={location} required id="location" onChange={handleOnChange} />
              {/* <input type='text' name='image_url'  placeholder='Image' value ={image} required id="image_url" onChange={handleOnChange} /> */}
              <input type='text' name='contact' placeholder='Contact' value ={contact} required id="contact" onChange={handleOnChange} />
              <input type='text' name='email' placeholder='Email' value ={email} required id="email" onChange={handleOnChange} />
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
