import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
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
              <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
        
            <li>
              <Link to='/Adopt-A-Pet' onClick={closeMobileMenu}>
                Dogs
              </Link>
            </li>
            <li>
              <Link to='/dog-form' onClick={closeMobileMenu}>
                Dog Form
              </Link>
            </li>
          </ul>

          <div className='login-area flex'>
          <li>
              <Link to='/sign-out'>
                <i class='far fa-chevron-right'></i>Sign out
              </Link>
            </li>
            <li>
              <Link to='/sign-in'>
                <i class='far fa-chevron-right'></i>Sign in
              </Link>
            </li>
             <li>
             <Link to='/sign-in'>
                <button className='primary-btn'>Adopt A Pet</button>
              </Link>
            </li>
            
            <li>
            <Link to='/register'>
                <button className='primary-btn'>Become A member</button>
              </Link>
            </li>
            {/* <li>
            <Link to='/dog-form'>
                <button className='primary-btn'>dog form</button>
              </Link>
            </li> */}
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <h1>Linkpets</h1>
          </div>

          <div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Working Hours</h4>
                <Link to='/contact'>Monday - Sunday: 7.00am to 6.00pm</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+254793863208</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='far fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>lincolinangaya5626@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
