import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import features from './images/feature-img-1.jpg'

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Features</span>
            </h1>
            <p>Simple Booking< br />
Fast, Friendly First Contact< br />
A Genuinely Cheerful, Helpful, Knowledgeable Staff< br />
Distinctive, Well-Appointed Guest Rooms < br />
On-Site Services < br />
 Excellent Food and Drink.</p>
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src={features} alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
