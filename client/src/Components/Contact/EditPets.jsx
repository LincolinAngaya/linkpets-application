import React from 'react'
import {useRef} from 'react'
import "./Contact.css"

const Editpets = ({targetPetEntry, handleDataEdit}) => {
//      const nameInputRef = useRef();
//     const breedInputRef = useRef();
//     const image_urlInputRef = useRef();
//     const heightInputRef = useRef();
//     const weightInputRef = useRef();
//     const life_expectancyInputRef = useRef();
//     const family_lifeInputRef = useRef();
//     const socialInputRef = useRef();
//     const physicalInputRef = useRef();
//     const personalityInputRef = useRef();
  


//     function submitHandler(e){
//       e.preventDefault();

//        const enteredName = nameInputRef.current.value;
//        const enteredBreed = breedInputRef.current.value;
//        const enteredImage = image_urlInputRef.current.value;
//        const enteredHeight = heightInputRef.current.value;
//        const enteredWeight = weightInputRef.current.value;
//        const enteredLife_Expectancy = life_expectancyInputRef .current.value;
//        const enteredFamily_Life = family_lifeInputRef.current.value;
//        const enteredPhysical = physicalInputRef.current.value;
//        const enteredSocial_Life = socialInputRef.current.value;
//        const enteredPersonality = personalityInputRef .current.value;
       
    
      //  const petDetails={
      //      name:enteredName,
      //      breed:enteredBreed,
      //      image_url:enteredImage,
      //      height:enteredHeight,
      //      weight:enteredWeight,
      //      life_expectancy:enteredLife_Expectancy,
      //      family_life:enteredFamily_Life,
      //      Physical:enteredPhysical,
      //      social_life:enteredSocial_Life,
      //      personality:enteredPersonality,
        
      //  };
      
//        props.onAddpets(petDetails)
// }

function handleOnSubmit(event){
  event.preventDefault();
  const editedData = {
    name:name,
    breed:breed,
    image_url:image_url,
    height:height,
    weight:weight,
    life_expectancy:life_expectancy,
    family_life:family_life,
    Physical:physical,
    social_life:social_life,
    personality:personality,
    user_id: targetPetEntry?.user_id
 
}
  fetch(`/pets/${targetPetEntry.id}`, {
      method: "PUT",
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify(editedData)
  })
  .then(response=>response.json())
  .then(()=> handleDataEdit());
}
 

 
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <p>Fill out the form below.</p>

            <form  onSubmit={handleOnSubmit}>
              <div className='grid1'>
               
                <div className='input'>
                  <span>
                    Dog Name <label>*</label>
                  </span>
                  <input type='text' name='fname' value={name} onChange={handleOnChange} required />
                </div>
                <div className='input'>
                  <span>
                    Dog Breed <label>*</label>
                  </span>
                  <input type='text' name='lname' value={breed} onChange={handleOnChange} required />
                </div>
                <div className='input'>
                  <span>
                    Dog Image <label>*</label>
                  </span>
                  <input type='text' name='phone' value={image_url} onChange={handleOnChange} required  />
                </div>
                <div className='input'>
                  <span>
                    Height <label>*</label>
                  </span>
                  <input type='text' name='height'value={height} onChange={handleOnChange} required />
                </div>
                <div className='input'>
                  <span>Weight</span>
                  <input type='text' name='subject' value={weight} onChange={handleOnChange}  />
                </div>
                <div className='input'>
                  <span>Life Expectancy</span>
                  <input type='text' name='company' value={life_expectancy} onChange={handleOnChange} />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                  Dog Family Life <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message' value={family_life} onChange={handleOnChange} ></textarea>
              </div>
              <div className='input inputlast'>
                <span>
                  Dog Physicality <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message' value={Physical} onChange={handleOnChange}></textarea>
              </div>
              <div className='input inputlast'>
                <span>
                  Social Life <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message' value={social_life} onChange={handleOnChange} ></textarea>
              </div>
              <div className='input inputlast'>
                <span>
                  Dog Personality <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message'  value={personality} onChange={handleOnChange} ></textarea>
              </div>
              <button className='primary-btn'>Edit Now</button>
            </form>
          </div>

        
            
         
        </div>
      </section>

     
    </>
  )
}

export default Editpets
