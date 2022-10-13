import "./App.css"
import Home from "./Components/pages/Home"



import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


/*-------------blog------------ */
import Pets from "./Components/pets/AllPets/Pets"
import Dogs from "./Components/AllDogs/Dog"
import DogForm from "./Components/Contact/DogForm"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"

/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path='/pets' exact component={Pets} />
          <Route path='/' exact component={Home} />
          <Route path='/Adopt-A-Pet' component={Dogs} />
          <Route path='/add-pet' component={DogForm} />
          <Route path='/sign-out' component={Home}  />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
        </Switch>
      
      </Router>
      
    </>
  )
}

export default App
