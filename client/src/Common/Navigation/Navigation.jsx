import React, { useState } from "react"
import '../Navigation/Navigation.css'
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
                Adopt Pet
              </Link>
            </li> 

            <li>
            <Link to='/add-pet'>
                 Add Pet
              </Link>
            </li> 
        
        
          </ul>

          <div className='login-area flex'>
          <li>
              <Link to='/sign-out'>
                <i className='far fa-chevron-right'></i>Sign out
              </Link>
           </li>
          
           
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
