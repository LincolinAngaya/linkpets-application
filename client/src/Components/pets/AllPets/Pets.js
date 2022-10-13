
import { useState } from 'react';
 import { useEffect } from 'react';
 import HeadTitle from '../../../Common/HeadTitle/HeadTitle';
import React from 'react'

import './pets.scss'

  import PetItem from '../card/PetItem';
 import Navbar from '../../../Common/Navbar/Navbar';

 function Pets() {

  const [isLoading,setIsLoading] = useState(true);
  const [loadedDogs,setLoadedDogs] = useState([]);
  
  
        useEffect(() => {
           setIsLoading(true)
          fetch('/pets')

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
 

   if (isLoading){
    return <section>
      <p>loading......</p>
    </section>
   }


  return (
    <>
    <Navbar />
    <HeadTitle />
    {/* <h1 className='heading'>Adopt The Pet</h1>  */}
    <div className ='restarauntlist'>
    
    <PetItem   dogs={loadedDogs} />
  
    
    </div>
    </>
  )
}

export default Pets