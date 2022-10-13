import React from 'react'
import '../card/Card.scss'
import DogCard from './DogCard'


function DogItem({dogs}) {

  return (
   <>

     {dogs.map((dog) => <DogCard  
      
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
     
      

        
      />
      
      )}
      
     
    </>
  )
}

export default DogItem
