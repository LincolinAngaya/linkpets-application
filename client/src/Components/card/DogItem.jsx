import React from 'react'
import '../card/Card.scss'
import DogCard from './DogCard'


function DogItem({restaraunts}) {

  return (
   <>

     {restaraunts.map((restaraunt) => <DogCard  
      
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

export default DogItem
