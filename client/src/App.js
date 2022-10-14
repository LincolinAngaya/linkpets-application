import "./App.css"
import Home from "./Components/pages/Home"
// import React, { useEffect, useState } from "react";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


/*-------------blog------------ */
import Pets from "./Components/pets/AllPets/Pets"
import Dogs from "./Components/AllDogs/Dog"
import DogForm from "./Components/Contact/DogForm"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
import Navbar from "./Common/Navbar/Navbar"

/*-------------blog------------ */

function App() {
 

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);
  

  return (
    <>
     <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home}  /> */}
           <Route path='/Adopt-A-Pet' component={Dogs}  />
            <Route path='/add-pet' component={DogForm}   />
           <Route path='/sign-in' component={Login}  />
           <Route path='/Register' component={Register} />
            <Route path='/pets' exact component={Pets} />

          
        </Switch>
 
        </Router>
      
    </>
  )
}

export default App
