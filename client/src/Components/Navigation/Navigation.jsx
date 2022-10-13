import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navigation = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
         
            <li>
              <Link to='/Adopt-A-Pet' onClick={closeMobileMenu}>
                Dogs
              </Link>
            </li> 

            <li>
            <Link to='/dog-form'>
                <button className='primary-btn'>dog form</button>
              </Link>
            </li> 
        
        
          </ul>

          <div className='login-area flex'>
          <li>
              <Link to='/sign-out'>
                <i class='far fa-chevron-right'></i>Sign out
              </Link>
           </li>
          
           
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
