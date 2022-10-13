import React from 'react'
import {useRef} from 'react'
import "./Contact.css"

const DogFrom = (props) => {
     const nameInputRef = useRef();
    const breedInputRef = useRef();
    const image_urlInputRef = useRef();
    const heightInputRef = useRef();
    const weightInputRef = useRef();
    const life_expectancyInputRef = useRef();
    const family_lifeInputRef = useRef();
    const socialInputRef = useRef();
    const physicalInputRef = useRef();
    const personalityInputRef = useRef();
  


    function submitHandler(e){
      e.preventDefault();

       const enteredName = nameInputRef.current.value;
       const enteredBreed = breedInputRef.current.value;
       const enteredImage = image_urlInputRef.current.value;
       const enteredHeight = heightInputRef.current.value;
       const enteredWeight = weightInputRef.current.value;
       const enteredLife_Expectancy = life_expectancyInputRef .current.value;
       const enteredFamily_Life = family_lifeInputRef.current.value;
       const enteredPhysical = physicalInputRef.current.value;
       const enteredSocial_Life = socialInputRef.current.value;
       const enteredPersonality = personalityInputRef .current.value;
       
    
       const petDetails={
           name:enteredName,
           breed:enteredBreed,
           image_url:enteredImage,
           height:enteredHeight,
           weight:enteredWeight,
           life_expectancy:enteredLife_Expectancy,
           family_life:enteredFamily_Life,
           Physical:enteredPhysical,
           social_life:enteredSocial_Life,
           personality:enteredPersonality,
        
       };
      
       props.onAddpets(petDetails)
}
 
 
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <p>Fill out the form below.</p>

            <form  onSubmit={submitHandler}>
              <div className='grid1'>
               
                <div className='input'>
                  <span>
                    Dog Name <label>*</label>
                  </span>
                  <input type='text' name='fname' ref={nameInputRef} required />
                </div>
                <div className='input'>
                  <span>
                    Dog Breed <label>*</label>
                  </span>
                  <input type='text' name='lname' ref={breedInputRef} required />
                </div>
                <div className='input'>
                  <span>
                    Dog Image <label>*</label>
                  </span>
                  <input type='text' name='phone' ref={image_urlInputRef} required  />
                </div>
                <div className='input'>
                  <span>
                    Height <label>*</label>
                  </span>
                  <input type='text' name='height' ref={heightInputRef} required />
                </div>
                <div className='input'>
                  <span>Weight</span>
                  <input type='text' name='subject' ref={weightInputRef}  />
                </div>
                <div className='input'>
                  <span>Life Expectancy</span>
                  <input type='text' name='company' ref={life_expectancyInputRef}  />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                  Dog Family Life <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message'ref={family_lifeInputRef} ></textarea>
              </div>
              <div className='input inputlast'>
                <span>
                  Dog Physicality <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message'ref={physicalInputRef} ></textarea>
              </div>
              <div className='input inputlast'>
                <span>
                  Social Life <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message'ref={socialInputRef} ></textarea>
              </div>
              <div className='input inputlast'>
                <span>
                  Dog Personality <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message'ref={personalityInputRef} ></textarea>
              </div>
              <button className='primary-btn'>Submit Now</button>
            </form>
          </div>

        
            
         
        </div>
      </section>

     
    </>
  )
}

export default DogFrom
