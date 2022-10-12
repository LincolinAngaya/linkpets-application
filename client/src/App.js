import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import Gallery from "./Components/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


/*-------------blog------------ */

import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
import BookingFrom from "./Components/login/BookingForm/BookingFrom"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' exact component={Gallery} />
          {/* <Route path='/singlepage/:id' component={SinglePage} /> */}
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/booking' component={BookingFrom} />
        </Switch>
      
      </Router>
    </>
  )
}

export default App
