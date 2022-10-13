import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"



import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


/*-------------blog------------ */
import Dog from "./Components/AllDogs/Dog"
import DogForm from "./Components/Contact/DogForm"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"

/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Adopt-A-Pet' component={Dog} />
          <Route path='/dog-form' component={DogForm} />
          <Route path='/sign-out' component={Login} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
        </Switch>
      
      </Router>
    </>
  )
}

export default App
