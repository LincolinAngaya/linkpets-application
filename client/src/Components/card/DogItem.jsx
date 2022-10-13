import React from 'react'

import DogCard from './DogCard'
import '../card/Card.scss'
import '../card/view.scss'


function DogItem({pets,onDelete}) {

  return (
   <>

     {pets.map((dog) => <DogCard  
      
      key = {dog.id}
      name = {dog.name}
      breed = {dog.breed}
      image = {dog.image_url}
      height = {dog.height}
      weight= {dog.weight}
      life_expectancy = {dog.life_expectancy}
      family_life = {dog.family_life}
      physical = {dog.physical}
      social_life = {dog.social_life}
      personality = {dog.personality}
      deletelink={ <button onClick={()=> onDelete(dog.id)}>Delete</button>}
     
     
      

        
      />
      
      )}
      
     
    </>
  )
}

export default DogItem
