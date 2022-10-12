import React from "react"
import "./About.css"
import about from '../About/images/about-img-1.jpg'

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to your accommodation  needs
          </h1>
          <p >Guinness hotelg epitomises Western contemporary luxury, but its Tambourin Restaurant transports you to the Eastern Mediterranean.</p>
          <p>Arriving in the early evening, blue skies were still visible through the windows and glowing with evening light as darkness fast approached.</p>
          <p>This rooftop restaurant is furnished in ornate wooden chairs and long bench seats covered in woven cushions, creating the atmosphere of lounge. Tambourin also has an outdoor feel from the large glass ....</p>
          
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src={about} alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
