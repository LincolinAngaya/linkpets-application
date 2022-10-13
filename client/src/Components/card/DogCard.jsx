
import React, { useState } from 'react'

import '../card/Card.scss'
import '../card/view.scss'



function DogCard({name,breed,image,height,weight,life_expectancy,family_life,physical,social_life,personality,deletelink}) {

     const [show, setShow] = useState(false)

  return (

    <article className='tour' >
      <div className='img-container'>
     <img 
      width="200"
      src={image}  alt={name} />
      
    </div>

    <div className='restaraunt-info'>
      
      <h4>{name}</h4>
      <h3>{breed}</h3>
      <h4 className='colorred'>{weight}</h4>
      <h4 className='colorred'>{height}</h4>
      <h3>{life_expectancy}</h3>
     

       <div className='rbutton'>

            <button onClick={() => setShow(!show)}>{show ? "Hide Review" : "Show Review"}</button>
      </div>  
    </div>  
 {show &&   
<main>
 
<p>{family_life} </p>
<p>{physical} </p>
<p>{social_life} </p>
<p>{personality} </p>

 </main> 
       
 }
   {deletelink} 
    </article>
  
  )
}

export default DogCard