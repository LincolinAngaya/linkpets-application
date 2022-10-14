import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = ({ user, setUser }) => {
  

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
   
  return (
    

<header className="nav">
      
      <div>
           {/* <Link to="/" className="header-btn">Home</Link>   */}

          {user ? (
            <>
            <Link  to='/add-pet' className="header-btn" >  Add Pet</Link>
            <Link to='/Adopt-A-Pet' className="header-btn" > Adopt Pet</Link>
            <button onClick={handleLogoutClick} className="header-btn-logout" >Logout</button>
            </>
                     

          ):(    
            <>
             <Link to='/pets' className="header-btn" > Pets Available</Link>
           <Link to='/sign-in' className="header-btn">Sign In</Link>
            <Link to="/register" className="header-btn" >Become A Member</Link>
             </>      
            
           )} 
      </div>
    </header>

  )
}

export default Navbar
