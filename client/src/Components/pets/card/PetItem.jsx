import React from 'react'
import '../card/Card.scss'
import PetCard from './PetCard'


function PetItem({restaraunts}) {

  return (
   <>

     {restaraunts.map((restaraunt) => <PetCard  
      
      key = {restaraunt.id}
      image = {restaraunt.image_url}
      name = {restaraunt.name}
      location = {restaraunt.location}
      phone_no = {restaraunt.phone_number}
      description = {restaraunt.description}
      reviews = {restaraunt.reviews}

        
      />
      
      )}
      
     
    </>
  )
}

export default PetItem
