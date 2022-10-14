import "./App.css"
import React, { useEffect, useState } from "react";
  




import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


/*-------------blog------------ */
import Home from "./Components/pages/Home"
import Pets from "./Components/pets/AllPets/Pets"
import Dogs from "./Components/AllDogs/Dog"
import DogForm from "./Components/Contact/DogForm"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
import Navbar from "./Common/Navbar/Navbar"

/*-------------blog------------ */

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  

  return (
    <>
     <Router>
      
        <Navbar  user={user} setUser={setUser} />
        { user ? (
          <>
          <Switch>
              {/* <Route path='/' exact component={Home}  /> */}
              <Route path='/add-pet' component={DogForm}   />
              <Route path='/Adopt-A-Pet' component={Dogs}  />
           </Switch>
           </>

          ):(
            <>
            <Switch>
            <Route path='/pets'>
                      <Pets  setUser={setUser} />
                </Route> 
                
                <Route path='/sign-in'>
                    <Login  setUser={setUser} />
                </Route> 
                <Route path='/Register'>
                      <Register  setUser={setUser} />
                </Route> 
                <Route path="/">
                <Home />
            </Route>
                
            </Switch>
            
            </>
          )}
  
        </Router>
      
  </>
  )
}

export default App
