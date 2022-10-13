import { useState } from 'react';
import { useEffect } from 'react';
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import React from 'react'

import '../AllDogs/dogs.scss'

 import CardItem from '../card/DogItem';
import Navigation from '../../Common/Navigation/Navigation';

function Dogs() {

  const [isLoading,setIsLoading] = useState(true);
  const [loadedDogs,setLoadedDogs] = useState([]);
  
        useEffect(() => {
           setIsLoading(true)
          fetch('/dogs')

          .then(response => {
           return response.json();
          })
       
          .then(data => {

            const dogs = [];

            for (const key in data){
              const dog = {
                id:key,
                ...data[key]
              };
              dogs.push(dog);
            }
             setIsLoading(false);
             setLoadedDogs(dogs);
          });
        },[]);


      //   function handleAddReview(newReview) {
      //     setLoadedRestaraunts([...loadedRestaraunts, newReview]);
      // }
 

   if (isLoading){
    return <section>
      <p>loading......</p>
    </section>
   }



  return (
    <>
    <Navigation />
    <HeadTitle />
    {/* <h1 className='heading'>Adopt The Pet</h1>  */}
    <div className ='restarauntlist'>
    
     <CardItem  dog={loadedDogs}/>
  
    
    </div>
    </>
  )
}

export default Dogs