import React from 'react'
import {useRef} from 'react'
import "./Contact.css"

const Editpets = ({targetPetEntry, handleDataEdit}) => {
  const[name, setName] = useState(targetPetEntry?.name);
  const[breed, setBreed] = useState(targetPetEntry?.breed);
  const[image_url, setImage_Url] = useState(targetPetEntry?.image_url);

  function handleOnChange(event){
    if(event.target.name === "name"){
        setName(event.target.value);
    }
    else if(event.target.name === "breed"){
    setBreed(event.target.value);
    } else {
      setImage_Url(event.target.value);
      } 


function handleOnSubmit(event){
  event.preventDefault();
  const editedData = {
    name:name,
    breed:breed,
    image_url:image_url,
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
