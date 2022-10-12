import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>Guinness hotelg epitomises Western contemporary luxury, but its Tambourin Restaurant transports you to the Eastern Mediterranean.</p>
            <br />
            <p>Arriving in the early evening, blue skies were still visible through the windows and glowing with evening light as darkness fast approached..</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
              <span>125 ANNIVERSARY SPECIAL</span>
                <p>Travel to Nairobi to share a special moment and continue discovering.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>23 Sep 2022</span>
              </li>
              <li>
              <span>Celebration Offer</span>
                <p>Planning an unforgettable celebration? Guiness hotel has you covered.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>24 Sep 2022</span>
              </li>
              <li>
              <span>Family Fun</span>
                <p>Guiness hotel invites your whole family to stay at our luxury hotel.</p>
                <label className='fa fa-calendar-alt'></label>
                <span>25 Sep 2022</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER</h2>
            <p>Save time, save money!
Sign up and we'll send the best deals to you</p>

            <input type='text' name='email' id='' placeholder="Your Email" />
            <input type='submit' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>Brian Ondiek © 2022 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
